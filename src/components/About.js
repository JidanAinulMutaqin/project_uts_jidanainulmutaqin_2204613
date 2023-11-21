import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHover } from 'react-use-gesture';

const About=()=>{
    const [isHovered, setIsHovered] = useState(false);

    const fadeIn = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        config: { duration: 1500 },
    });

    const bounceIn = useSpring({
        from: { transform: 'translate3d(0, -30px, 0)', opacity: 1 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        config: { tension: 400, friction: 10, delay: 200 },
        loop: true,
    });

    const bind = useHover(({ hovering }) => {
        setIsHovered(hovering);
    });

    useEffect(() => {
        // You can add more logic here if needed when the hover state changes
        // For now, it simply sets the hover state to true or false.
    }, [isHovered]);

    return(
        <animated.section style={fadeIn} class="about section" id="about">
            <h2 class="section-title">About Me</h2>

            <div class="about__container bd-grid">
                <animated.div  style={isHovered ? bounceIn : { transform: 'translate3d(0, 0, 0)', opacity: 1 }} class="about__img" {...bind()}>
                    <img src="./assets/img/about.jpg" alt=""></img>
                </animated.div>

                <div>
                    <h2 class="about__subtitle">I'am Jidan Ainul Mutaqin</h2>
                    <span class="about__profession">Mahasiswa / Web Programmer</span>
                    <p class="about__text">Saya adalah mahasiswa semester tiga prodi Pendidikan Ilmu Komputer di Universitas Pendidikan Indonesia. Saya merupakan orang yang selalu ingin belajar dan mencari pengalaman sebanyak-banyaknya di manapun dan kapanpun.</p>

                    <div class="about__social">
                        <a href="https://www.instagram.com/jidan.am/" class="about__social-icon"><i class='bx bxl-instagram' ></i></a>
                        <a href="https://github.com/JidanAinulMutaqin" class="about__social-icon"><i class='bx bxl-github' ></i></a>
                        <a href="#" class="about__social-icon"><i class='bx bxl-whatsapp' ></i></a>
                    </div>
                </div>
            </div>

            <h2 class="section-title">Riwayat Pendidikan</h2>
            <div class="riwayat bd-grid">
                <table class="tabel">
                    <tr>
                        <th>Tingkat</th>
                        <th>Sekolah</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr>
                        <td>TK</td>
                        <td>TK Islam Al-Azhar 18 Cianjur</td>
                        <td>LULUS</td>
                    </tr>
                    <tr>
                        <td>SD</td>
                        <td>SD Islam Al-Azhar 18 Cianjur</td>
                        <td>LULUS</td>
                    </tr>
                    <tr>
                        <td>SMP</td>
                        <td>SMPN 2 Ciamis</td>
                        <td>LULUS</td>
                    </tr>
                    <tr>
                        <td>SMK</td>
                        <td>SMKN 1 Cianjur</td>
                        <td>LULUS</td>
                    </tr>
                    <tr>
                        <td>S1</td>
                        <td>Universitas Pendidikan Indonesia</td>
                        <td>ON PROGRES</td>
                    </tr>
                </table>
            </div>

            <h2 class="section-title">Hobby</h2>
            <div class="container-hobby">
                <div class="card__container">
                    <article class="card__article">
                        <img src="./assets/img/hobby1.png" alt="image" class="card__img"></img>

                        <div class="card__data">
                            <span class="card__description">Taman Nasional Gunung Gede Pangrango, Cianjur</span>
                            <h2 class="card__title">Berpetualang</h2>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src="./assets/img/hobby2.png" alt="image" class="card__img"></img>

                        <div class="card__data">
                            <span class="card__description">Tempat Billiard, Cianjur</span>
                            <h2 class="card__title">Billiard</h2>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src="./assets/img/hobby3.png" alt="image" class="card__img"></img>

                        <div class="card__data">
                            <span class="card__description">Gor Badminton, Cianjur</span>
                            <h2 class="card__title">Badminton</h2>
                        </div>
                    </article>
                </div>
        </div>
        </animated.section>
    );
}

export default About;