// import './App.css'; 

const Footer=()=>{
    return(
        <footer class="footer section">
            <div class="footer__container bd-grid">
                <div class="footer__data">
                    <h2 class="footer__title">JIDAN AM</h2>
                    <p class="footer__text">I'm Jidan Ainul Mutaqin and this is my personal website</p>
                </div>

                <div class="footer__data">
                    <h2 class="footer__title">EXPLORE</h2>
                    <ul>
                        <li><a href="/" class="footer__link">Home</a></li>
                        <li><a href="/about" class="footer__link">About</a></li>
                        <li><a href="/skills" class="footer__link">Skills</a></li>
                        <li><a href="/portfolio" class="footer__link">Portfolio</a></li>
                        <li><a href="/Contact" class="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer__data">
                    <h2 class="footer__title">FOLLOW</h2>
                    <a href="https://www.instagram.com/jidan.am/" class="about__social-icon"><i class='bx bxl-instagram' ></i></a>
                    <a href="https://github.com/JidanAinulMutaqin" class="about__social-icon"><i class='bx bxl-github' ></i></a>
                    <a href="#" class="about__social-icon"><i class='bx bxl-whatsapp' ></i></a>
                </div>


            </div>
        </footer>
    );
}

export default Footer;