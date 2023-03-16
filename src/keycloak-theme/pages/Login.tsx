// This is a copy paste from https://github.com/InseeFrLab/keycloakify/blob/main/src/lib/pages/Login.tsx
import { useState, type FormEventHandler } from "react";
import FormButton from "../../components/formButton/FormButton";
import FormInput from "../../components/formInput/FormInput";
// You can replace all relative imports by cherry picking files from the keycloakify module.  
// For example, the following import:  
// import { clsx } from "./tools/clsx";
// becomes:  
import { clsx } from "keycloakify/lib/tools/clsx";
import { useConstCallback } from "keycloakify/lib/tools/useConstCallback";
import type { PageProps } from "keycloakify/lib/KcProps";
// Here use your own KcContext and I18n that you might have overloaded.  
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
import LoginForm from "../../components/loginForm/LoginForm";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl"; }>, I18n>) {
	// Custom code
	const [nextInput, setNextInput] = useState(false);

	const { kcContext, i18n, doFetchDefaultThemeResources = true, Template, ...kcProps } = props;

	const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext;

	const { msg, msgStr } = i18n;

	const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

	const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
		e.preventDefault();

		setIsLoginButtonDisabled(true);

		const formElement = e.target as HTMLFormElement;

		//NOTE: Even if we login with email Keycloak expect username and password in
		//the POST request.
		formElement.querySelector("input[name='email']")?.setAttribute("name", "username");

		formElement.submit();
	});

	return (
		<Template
			{...{ kcContext, i18n, doFetchDefaultThemeResources, ...kcProps }}
			displayInfo={social.displayInfo}
			displayWide={realm.password && social.providers !== undefined}
			headerNode={msg("doLogIn")}
			formNode={
				<div
					// id="kc-form" className={clsx(realm.password && social.providers !== undefined && kcProps.kcContentWrapperClass)}
				>
					<div
						// id="kc-form-wrapper"
						// className={clsx(
						// 	realm.password && social.providers && [kcProps.kcFormSocialAccountContentClass, kcProps.kcFormSocialAccountClass]
						// )}
					>
						{realm.password && (
							<LoginForm
								onSubmit={onSubmit}
								loginAction={url.loginAction}
								isLoginButtonDisabled={isLoginButtonDisabled}
							/>
							// <form id="kc-form-login" onSubmit={onSubmit} action={url.loginAction} method="post">
							// 	<div className={clsx(kcProps.kcFormGroupClass)}>
							// 		{!nextInput && (
							// 			<div>
							// 				<FormInput name="email" autoFocus label="login"/>
							// 			</div>
							// 		)}
							// 	</div>
							// 	{nextInput && (
							// 		<FormInput name="password" type="password" autoFocus />
							// 	)}
							// 	<div className={clsx(kcProps.kcFormGroupClass, kcProps.kcFormSettingClass)}>
							// 		<div id="kc-form-options">
							// 			{realm.rememberMe && !usernameEditDisabled && (
							// 				<div className="checkbox">
							// 					<label>
							// 						<input
							// 							id="rememberMe"
							// 							name="rememberMe"
							// 							type="checkbox"
							// 							{...(login.rememberMe
							// 								? {
							// 									"checked": true
							// 								}
							// 								: {})}
							// 						/>
							// 						{msg("rememberMe")}
							// 					</label>
							// 				</div>
							// 			)}
							// 		</div>
							// 		<div className={clsx(kcProps.kcFormOptionsWrapperClass)}>
							// 			{realm.resetPasswordAllowed && (
							// 				<span>
							// 					<a tabIndex={5} href={url.loginResetCredentialsUrl}>
							// 						{msg("doForgotPassword")}
							// 					</a>
							// 				</span>
							// 			)}
							// 		</div>
							// 	</div>
							// 	<div id="kc-form-buttons" className={clsx(kcProps.kcFormGroupClass)}>
							// 		<input
							// 			type="hidden"
							// 			id="id-hidden-input"
							// 			name="credentialId"
							// 			{...(auth?.selectedCredential !== undefined
							// 				? {
							// 					"value": auth.selectedCredential
							// 				}
							// 				: {})}
							// 		/>
							// 		{!nextInput  && (
							// 			<FormButton
							// 				text="Continue"
							// 				type="button"
							// 				onClick={() => setNextInput(true)}
							// 			/>
							// 		)}
							// 		{nextInput  && (
							// 			<FormButton
							// 				text="Login"
							// 				type="submit"
							// 				disabled={isLoginButtonDisabled}
							// 			/>
							// 		)}
							// 	</div>
							// </form>
						)}
					</div>
					{realm.password && social.providers !== undefined && (
						<div id="kc-social-providers" className={clsx(kcProps.kcFormSocialAccountContentClass, kcProps.kcFormSocialAccountClass)}>
							<ul
								className={clsx(
									kcProps.kcFormSocialAccountListClass,
									social.providers.length > 4 && kcProps.kcFormSocialAccountDoubleListClass
								)}
							>
								{social.providers.map(p => (
									<li key={p.providerId} className={clsx(kcProps.kcFormSocialAccountListLinkClass)}>
										<a href={p.loginUrl} id={`zocial-${p.alias}`} className={clsx("zocial", p.providerId)}>
											<span>{p.displayName}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			}
			infoNode={
				realm.password &&
				realm.registrationAllowed &&
				!registrationDisabled && (
					<div id="kc-registration">
						<span>
							{msg("noAccount")}
							<a tabIndex={6} href={url.registrationUrl}>
								{msg("doRegister")}
							</a>
						</span>
					</div>
				)
			}
		/>
	);
}
