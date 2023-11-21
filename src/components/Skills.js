import React from 'react';
import { useSpring, animated } from 'react-spring';

const Skills=()=>{
    const fadeIn = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        config: { duration: 1500 },
    });

    return(
        <animated.section style={fadeIn} class="skills section" id="skills">
            <h2 class="section-title">Skills</h2>

            <div class="skills__container bd-grid">
                <div class="skills__box">
                    <h3 class="skills__subtitle">Development</h3>
                    <span class="skills__name">Html</span>
                    <span class="skills__name">Css</span>
                    <span class="skills__name">Javascript</span>
                    <span class="skills__name">Laravel</span>
                    <span class="skills__name">React</span>
                    <span class="skills__name">PHP</span>
                        
                    <h3 class="skills__subtitle">Design</h3>
                    <span class="skills__name">Capcut</span>
                    <span class="skills__name">After Effect</span>
                    <span class="skills__name">Photoshop</span>

                    <h3 class="skills__subtitle">Soft Skills</h3>
                    <span class="skills__name">Communication</span>
                    <span class="skills__name">Leadership</span>
                </div>

                <div class="skills__img">
                    <img src="./assets/img/skill.jpg" alt=""></img>
                </div>
            </div>
        </animated.section>
    );
}

export default Skills;