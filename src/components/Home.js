// import './App.css';

const Home=()=>{
    return(
        <section class="home" id="home">
            <div class="home__container bd-grid">
                <h1 class="home__title"><span>Hello</span></h1>
                <h2 class="home__title">World!</h2>

                <div class="home__scroll">
                    <a href="/about" class="home__scroll-link"><i class='bx bx-up-arrow-alt' ></i>More</a>
                </div>

                <img src="./assets/img/home.jpg" alt="" class="home__img"></img>
            </div>
        </section>
    );
}

export default Home;