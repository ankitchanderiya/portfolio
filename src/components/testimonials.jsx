import React from 'react';
import c from './images/c-plus-plus.png';
import python from './images/python.png';
import react from './images/react.png';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import bootstrap from './images/bootstrap.png';
import sql from './images/sql.png';

function Testimonials(){
    return(
        <section id="testimonials">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <h2 id='test-h2'>SKILLS</h2>
                <div class="carousel-item active">
                <h3>C++ is a cross-platform language that can be used to create high-performance applications.</h3>
                <img class="testimonial-img" src={c} alt="C-profile"/>
                <em>C++ (Advanced)</em>
                </div>
                <div class="carousel-item">
                <h3 class="testimonial-text">Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.</h3>
                <img class="testimonial-img" src={python} alt="python-profile"/>
                <em>Python (Intermediate)</em>
                </div>
                <div class="carousel-item item">
                <h3>Hyper Text Markup Language is a markup language for the web that defines the structure of web pages.</h3>
                <img class="testimonial-img" src={html} alt="html-profile"/>
                <em>HTML (Intermediate)</em>
                </div>
                <div class="carousel-item item">
                <h3>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.</h3>
                <img class="testimonial-img" src={css} alt="css-profile"/>
                <em>CSS (Intermediate)</em>
                </div>
                <div class="carousel-item item">
                <h3>JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</h3>
                <img class="testimonial-img" src={javascript} alt="js-profile"/>
                <em>Javascript (Intermediate)</em>
                </div>
                <div class="carousel-item item">
                <h3>Bootstrap is the most popular frontend framework for developing responsive and mobile-first websites.</h3>
                <img class="testimonial-img" src={bootstrap} alt="bootstrap-profile"/>
                <em>Bootstrap (Intermediate)</em>
                </div>
                <div class="carousel-item item">
                <h3>Structured Query Language is a standard language for accessing and manipulating databases.</h3>
                <img class="testimonial-img" src={sql} alt="sql-profile"/>
                <em>SQL (Begginer)</em>
                </div>
                <div class="carousel-item item">
                <h3>React may be a declarative, efficient, and versatile JavaScript library for building user interfaces.</h3>
                <img class="testimonial-img" src={react} alt="react-profile"/>
                <em>React (Begginer)</em>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

        </section>
    );
}

export default Testimonials;