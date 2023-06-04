import React from 'react';

function Features(){
    return(
        <section id="features">
            <h2>PROJECTS</h2>
            <div class="row">
            <div class="col-lg-4 features-col">
                <a href="https://ankitchanderiya.github.io/weather-app.github.io/" target="_blank" rel="noopener noreferrer" className='project'>
                    <i class="fa-solid fa-cloud-bolt fa-shake fa-4x ficon"></i>
                    <h3>Weather App</h3>
                    <p>Get weather details of a place with a related image.</p>
                </a>
            </div>
            <div class="col-lg-4 features-col">
                <a href="https://ankitchanderiya.github.io/Drum-kit/" target="_blank" rel="noopener noreferrer" className='project'>
                    <i class="fa-solid fa-drum fa-bounce fa-4x ficon"></i>
                    <h3>Drum Kit</h3>
                    <p>Get experience of a real drum kit digitally.</p>
                </a>
            </div>
            <div class="col-lg-4 features-col">
                <a href="https://ankitchanderiya.github.io/The-Simon-Game/" target="_blank" rel="noopener noreferrer" className='project'>
                    <i class="fa-solid fa-gamepad fa-fade fa-4x ficon"></i>
                    <h3>Simon Game</h3>
                    <p>An digital game of short-term memory skill.</p>
                </a>
            </div>
            </div>

         </section>
    );
}

export default Features;