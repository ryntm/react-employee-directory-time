import React from 'react';
import Logo from '../logo/index';
import './styles.css';


function Nav() {


    return (
        <section className="nav columns">
            <div className="column is-one-fifth">
                <a href="/">
                    <Logo className="logo" />
                </a>
            </div>    
            <div className="place column">
                Scanton, PA 
                <br/>
                Branch Directory
            </div>
        </section>
    )
}





export default Nav;