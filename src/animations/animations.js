import { config } from 'react-spring';

const animations = {
  flippingAnimation: {
    config: {
      ...config.molasses,
      duration: 1400,
    },
    delay: 100,
    from: {
      transform: 'perspective(600px) rotateX(90deg)',
      opacity: 0,
    },
    to: {
      transform: 'perspective(600px) rotateX(0deg)',
      opacity: 1,
    },
  },

  flippingTransitionAnimation: {
    config: {
      ...config.molasses,
      duration: 1400,
    },
    delay: 100,
    enter: {
      from: {
        transform: 'perspective(600px) rotateX(90deg)',
        opacity: 0,
      },
      to: {
        transform: 'perspective(600px) rotateX(0deg)',
        opacity: 1,
      },
    },
    leave: {
      from: {
        transform: 'perspective(600px) rotateX(0deg)',
        opacity: 1,
      },
      to: {
        transform: 'perspective(600px) rotateX(90deg)',
        opacity: 0,
      },
      // transform: "perspective(600px) rotateX(90deg)",
      // opacity: 0,
    },
  },
};

export default animations;
