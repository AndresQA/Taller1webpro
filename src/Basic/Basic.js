import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import PropTypes from 'prop-types';

const Basic = (props) => {
    /*
        if(props.location.pathname === "/basic"){
            document.addEventListener("DOMContentLoaded", function () { 
                document.querySelector(".basic").style.color = "red";
                console.log("hola");
             });
    
        }
    
        
        */

    const handleInput = (event) => {
        console.log(event.target.value);
        props.setName(event.target.value);

    }

    return <div>
        <Header></Header>
        <div className="container">
            <div className="item">
                <h3>Name</h3>
                <input type="text" placeholder="Setup Name" value={props.nameGun} onChange={handleInput} />

            </div>

            <div className="item">
                <h3>Mag size</h3>
                <input type="range" name="" id="" />
            </div>

            <div className="item">
                <h3>Color</h3>
                <div className="itempos">
                    <div className="item__color red"></div>
                    <div className="item__color blue"></div>
                    <div className="item__color gold"></div>
                    <div className="item__color yellow"></div>
                    <div className="item__color white"></div>

                </div>
            </div>

        </div>
        <Preview></Preview>

    </div>
}

Basic.propTypes = {
    nameGun: PropTypes.string,
    setName: PropTypes.func,
}

export default Basic;