import React from 'react';
import './styles.css';

function Main(props) {
    return (
        <div className="main-div">
            {props.children}
        </div>
    )
}

export default Main