import React from 'react';
import c from './images/c-plus-plus.png';
import python from './images/python.png';
import react from './images/react.png';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import bootstrap from './images/bootstrap.png';
import sql from './images/sql.png';

function Press(){
    return(
        <section id="press">
            <img class="press-logo" src={c} alt="c-logo"/>
            <img class="press-logo" src={python} alt="python-logo"/>
            <img class="press-logo" src={html} alt="html-logo"/>
            <img class="press-logo" src={css} alt="css-logo"/>
            <img class="press-logo" src={javascript} alt="javascript-logo"/>
            <img class="press-logo" src={bootstrap} alt="bootstrap-logo"/>
            <img class="press-logo" src={sql} alt="sql-logo"/>
            <img class="press-logo" src={react} alt="react-logo"/>


        </section>
    );
}

export default Press;