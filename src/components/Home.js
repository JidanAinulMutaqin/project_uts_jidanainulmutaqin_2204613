import React from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1500 },
  });

  const bounceIn = useSpring({
    from: { transform: 'translate3d(0, -30px, 0)', opacity: 1 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    config: { tension: 300, friction: 10, delay: 500 },
    loop: true,
  });

  return (
    <animated.section style={fadeIn} className="home" id="home">
      <div className="home__container bd-grid">
        <animated.h1 style={bounceIn} className="home__title">
          <span>Hello</span>
        </animated.h1>
        <animated.h2 style={bounceIn} className="home__title">World!</animated.h2>

        <div className="home__scroll">
          <a href="/about" className="home__scroll-link">
            <i className="bx bx-up-arrow-alt"></i>More
          </a>
        </div>

        <animated.img
          src="./assets/img/home.jpg"
          alt=""
          className="home__img"
        ></animated.img>
      </div>
    </animated.section>
  );
};

export default Home;
