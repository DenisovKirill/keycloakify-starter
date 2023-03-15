PS E:\Avataa\keycloakify-starter> yarn build-keycloak-theme
yarn run v1.22.19
$ react-scripts build && keycloakify
Creating an optimized production build...
Browserslist: caniuse-lite is outdated. Please run:                               
npx update-browserslist-db@latest                                               
Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: caniuse-lite is outdated. Please run:                               
npx update-browserslist-db@latest                                               
Why you should do it regularly: https://github.com/browserslist/update-db#readme
Browserslist: caniuse-lite is outdated. Please run:
npx update-browserslist-db@latest
Why you should do it regularly: https://github.com/browserslist/update-db#readme
Compiled successfully.

File sizes after gzip:

53.48 kB  build\static\js\main.8bc8b95a.js
45.81 kB  build\static\js\3128.c686dac9.chunk.js
25.92 kB  build\static\js\7842.659ebb72.chunk.js
12.58 kB  build\static\js\8026.0a47020d.chunk.js
7.51 kB   build\static\js\2077.4eb7a81e.chunk.js
7.45 kB   build\static\js\6606.cf394357.chunk.js
7.34 kB   build\static\js\2327.ddd13dc7.chunk.js
6.61 kB   build\static\js\4703.075e433e.chunk.js
6.59 kB   build\static\js\129.f8ebad7b.chunk.js
6.55 kB   build\static\js\2502.04d4db80.chunk.js
6.41 kB   build\static\js\7316.dbfca034.chunk.js
5.89 kB   build\static\js\2810.91e6939f.chunk.js
5.66 kB   build\static\js\8733.8a9532e1.chunk.js
5.65 kB   build\static\js\6165.2ec6abeb.chunk.js
5.62 kB   build\static\js\8565.b7407831.chunk.js
5.24 kB   build\static\js\1822.dd8f41c6.chunk.js
5.2 kB    build\static\js\1808.49150f0f.chunk.js
5.1 kB    build\static\js\1820.5738e6b5.chunk.js
4.92 kB   build\static\js\1105.78e562eb.chunk.js
4.86 kB   build\static\js\5662.eb338f47.chunk.js
4.11 kB   build\static\js\8991.243bca1e.chunk.js
4.05 kB   build\static\js\5847.ba00a9f8.chunk.js
4.01 kB   build\static\js\6669.c9b0ecf4.chunk.js
3.9 kB    build\static\js\803.5559e5f6.chunk.js
3.76 kB   build\static\js\3833.677fc138.chunk.js
3.69 kB   build\static\js\6416.f234fdd0.chunk.js
3.67 kB   build\static\js\8286.51843bac.chunk.js
3.09 kB   build\static\js\2814.caee338c.chunk.js
2.68 kB   build\static\js\4096.4fd19b5d.chunk.js
2.65 kB   build\static\js\9924.39ea2443.chunk.js
1.71 kB   build\static\js\8393.63aef200.chunk.js
1.6 kB    build\static\js\4901.aad2dec5.chunk.js
1.54 kB   build\static\js\5621.c09e7e05.chunk.js
1.5 kB    build\static\js\9523.7421b491.chunk.js
1.45 kB   build\static\js\2121.b76ef002.chunk.js
1.24 kB   build\static\js\6870.a3769d71.chunk.js
1.24 kB   build\static\js\5330.0d95ac47.chunk.js
1.19 kB   build\static\js\9142.11752fc3.chunk.js
1.11 kB   build\static\js\1371.23a321df.chunk.js
1.08 kB   build\static\js\1163.7e7d925a.chunk.js
1.03 kB   build\static\js\96.26f29674.chunk.js
996 B     build\static\js\3187.0c333cf5.chunk.js
964 B     build\static\js\7725.5f9ada65.chunk.js
962 B     build\static\js\961.1d8c17cd.chunk.js
929 B     build\static\js\2487.1d11003f.chunk.js
913 B     build\static\js\3269.988cbbdf.chunk.js
832 B     build\static\js\4586.e270ea4b.chunk.js
814 B     build\static\js\6435.92439486.chunk.js
740 B     build\static\js\4587.806479ea.chunk.js
680 B     build\static\js\72.9744b6de.chunk.js
671 B     build\static\js\3007.50c9e608.chunk.js
664 B     build\static\js\4401.579dfe53.chunk.js
650 B     build\static\js\5697.b35f5dee.chunk.js
505 B     build\static\css\6165.34b83dcc.chunk.css
472 B     build\static\js\5221.b134b2bf.chunk.js
425 B     build\static\js\1961.a01df928.chunk.js
217 B     build\static\css\4096.e73e3aa2.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

yarn global add serve
serve -s build

Find out more about deployment here:

https://cra.link/deployment

🔏 Building the keycloak theme...⌚
🫶 Let keycloakify do its thang

✅ Your keycloak theme has been generated and bundled into ./build_keycloak\target\keycloakify-starter-keycloak-theme-3.1.0.jar 🚀
It is to be placed in "/opt/keycloak/providers" in the container running a quay.io/keycloak/keycloak Docker image.


value.yaml:
extraInitContainers: |
- name: realm-ext-provider
image: curlimages/curl
imagePullPolicy: IfNotPresent
command:
- sh
args:
- -c
- curl -L -f -S -o /extensions/keycloakify-starter-keycloak-theme-3.1.0.jar https://AN.URL.FOR/keycloakify-starter-keycloak-theme-3.1.0.jar
volumeMounts:
- name: extensions
mountPath: /extensions

        extraVolumeMounts: |
            - name: extensions
              mountPath: /opt/keycloak/providers
    extraEnv: |
    - name: KEYCLOAK_USER
      value: admin
    - name: KEYCLOAK_PASSWORD
      value: xxxxxxxxx
    - name: JAVA_OPTS
      value: -Dkeycloak.profile=preview


To test your theme locally you can spin up a Keycloak 20.0.1 container image with the theme pre loaded by running:

👉 $ ./build_keycloak\start_keycloak_testing_container.sh 👈

Test with different Keycloak versions by editing the .sh file. see available versions here: https://quay.io/repository/keycloak/keycloak?tab=tags

- Log into the admin console 👉 http://localhost:8080/admin username: admin, password: admin 👈
- Create a realm named "myrealm"
- Create a client with ID: "myclient", "Root URL": "https://www.keycloak.org/app/" and "Valid redirect URIs": "https://www.keycloak.org/app/*"
- Select Login Theme: keycloakify-starter (don't forget to save at the bottom of the page)
- Go to 👉 https://www.keycloak.org/app/ 👈 Click "Save" then "Sign in". You should see your login page

Video demoing this process: https://youtu.be/N3wlBoH4hKg

