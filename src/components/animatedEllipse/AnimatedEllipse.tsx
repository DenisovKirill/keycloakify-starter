/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSpring, animated } from 'react-spring';

import firstEllipse from './assets/img/ellipse_1.png';
import secondEllipse from './assets/img/ellipse_2.png';

const styles = {
  wrapper: css`
    label: ellipseWrapper;
    width: 460px;
    height: 400px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  `,
  firstEllipseStyle: css`
    top: 0;
    left: 0;
  `,
  secondEllipseStyle: css`
    bottom: 0;
    right: 0;
  `,
  ellipseStyle: css`
    position: absolute;
    /* opacity: 0.8; */
    /* filter: blur(86px); */
  `,
};

const {
  wrapper, firstEllipseStyle, secondEllipseStyle, ellipseStyle
} = styles;

const AnimatedEllipse = () => {
  const firstEllipseAnimation = useSpring({
    config: {
      duration: 1000,
      // easing: easings.easeInOutQuart,
    },
    loop: true,
    reset: true,
    from: {
      transform: 'scale(160%)',
      opacity: 1,
    },
    to: [
      {
        opacity: 0.5,
        transform: 'scale(110%)',
      },
      {
        transform: 'scale(160%)',
        opacity: 1,
      },
    ],
  });
  const secondEllipseAnimation = useSpring({
    config: {
      duration: 1000,
      // easing: easings.easeInOutQuart,
    },
    loop: true,
    reset: true,
    from: {
      transform: 'scale(110%)',
      opacity: 0.5,
    },
    to: [
      {
        opacity: 1,
        transform: 'scale(160%)',
      },
      {
        transform: 'scale(110%)',
        opacity: 0.5,
      },
    ],
  });
  return (
    <div css={wrapper}>
      <animated.img
        style={firstEllipseAnimation}
        css={[firstEllipseStyle, ellipseStyle]}
        src={firstEllipse}
        alt="ellipse"
      />
      <animated.img
        style={secondEllipseAnimation}
        css={[secondEllipseStyle, ellipseStyle]}
        src={secondEllipse}
        alt="ellipse"
      />
    </div>
  );
};

export default AnimatedEllipse;
