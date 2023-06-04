import React from 'react';
import img from '../components/images/mine.jpg';

function Header() {
    return (
        <section id="title">

            <div className="container-fluid title">
                {/* <!-- Nav Bar --> */}
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="/">Ankit Chanderiya</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                {/* </button> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Qualifications</a>
                        </li>
                    </ul>
                </div>
                </nav>



                {/* <!-- Title --> */}

                <div className="row">
                    <div className="col-lg-6">
                        <h1>Welcome to my portfolio</h1>
                        {/* <button type="button" className="btn btn-light btn-lg dbtn"><i class="fa-brands fa-linkedin fa-sm"></i> LinkedIn</button> */}
                        <a href="components\AnkitChanderiya_Resume.pdf" download="Ankit_Chanderiya_resume">
                            <button type="button" className="btn btn-outline-light btn-lg dbtn resume"><i class="fa-solid fa-download fa-2xs"></i> Resume</button>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <img className="iphone-image" src={img} alt="dp-mockup"/>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default Header;