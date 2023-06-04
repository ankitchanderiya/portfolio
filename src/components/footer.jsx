import React from 'react';

var year = new Date().getFullYear();

function Footer(){
    return(
        <div>
            <section id="cta">

                <h3>Connect with me.</h3>
                <a href="https://www.linkedin.com/in/ankit-chanderiya-295986278" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-lg btn-dark dbtn"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
                </a>
                <a href="https://wa.me/+918602547769/?text=urlencodedtext" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-lg btn-light dbtn"><i class="fa-brands fa-whatsapp"></i> Whatsapp</button>
                </a>

            </section>

            <footer id="footer">

                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-solid fa-envelope"></i>
                <p>For Queries: achanderiya70@gmail.com</p>
                <p>© Copyright {year} Ankit Chanderiya</p>

            </footer>
        </div>
        
    );
}

export default Footer;