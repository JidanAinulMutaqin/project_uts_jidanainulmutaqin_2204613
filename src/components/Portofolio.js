import React from 'react';
import { useSpring, animated } from 'react-spring';

const Portofolio=()=>{
    const fadeIn = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        config: { duration: 1500 },
    });
    
    return(
        <animated.section style={fadeIn} class="portfolio section" id="portfolio">
            <h2 class="section-title">Portofolio</h2>

            <div class="portfolio__container bd-grid">
                <div class="portfolio__img">
                    <img src="./assets/img/lfd3.jpg" alt=""></img>

                    <div class="portfolio__link">
                        <a href="#" class="portfolio__link-name">"Looking For Dream" </a>
                    </div>
                </div>
                <div class="portfolio__img">
                    <img src="./assets/img/p2.jpg" alt=""></img>

                    <div class="portfolio__link">
                            <a href="#" class="portfolio__link-name"> "Forgotten Sunrise"</a>
                    </div>
                </div>
                <div class="portfolio__img">
                    <img src="./assets/img/lovemoon3.jpg" alt=""></img>

                    <div class="portfolio__link">
                         <a href="#" class="portfolio__link-name"> " A Ball Boy Goes to The Moon"</a>
                    </div>
                </div>
                <div class="portfolio__img">
                    <img src="./assets/img/dolphin2.jpg" alt=""></img>

                    <div class="portfolio__link">
                        <a href="#" class="portfolio__link-name"> "Where's That Dolphin go"</a>
                    </div>
                </div>
                <div class="portfolio__img">
                    <img src="./assets/img/admit.jpg" alt=""></img>

                    <div class="portfolio__link">
                        <a href="#" class="portfolio__link-name"> "Love is about Suffering"</a>
                    </div>
                </div>
                <div class="portfolio__img">
                    <img src="./assets/img/p6.jpg" alt=""></img>

                    <div class="portfolio__link">
                        <a href="#" class="portfolio__link-name"> "The Untold Story Rain Forest"</a>
                    </div>
                </div>
            </div>
        </animated.section>
    );
}

export default Portofolio;