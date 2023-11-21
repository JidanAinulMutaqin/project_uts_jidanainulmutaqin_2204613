import React from 'react';
import { useSpring, animated } from 'react-spring';

const About=()=>{
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

    return(
        <animated.section style={fadeIn} class="about section" id="about">
            <h2 class="section-title">About Me</h2>

            <div class="about__container bd-grid">
                <animated.div style={bounceIn} class="about__img">
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
        </animated.section>
    );
}

export default About;