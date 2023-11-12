// import './App.css';

const About=()=>{
    return(
        <section class="about section" id="about">
            <h2 class="section-title">About Me</h2>

            <div class="about__container bd-grid">
                <div class="about__img">
                    <img src="./assets/img/about.jpg" alt=""></img>
                </div>

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
        </section>
    );
}

export default About;