import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';

const Performance = (props) => {
/*
    if(props.location.pathname === "/performance"){
        document.addEventListener("DOMContentLoaded", function () { 
            document.querySelector(".performance").style.color = "red";
            console.log("hola");
         });

    }
*/

    return <div>
        <Header></Header>
        <div className="container">
            <div className="item">
                <h3>Handle</h3>
                <div className="itemposacc">
                    <div className="item__img"></div>
                    <div className="item__img"></div>
                    <div className="item__img"></div>


                </div>

            </div>

            <div className="item">
                <h3>Barrel size</h3>
                <input type="range" name="" id="" className="barrelsize"/>
            </div>

            <div className="item">
                <h3>Butt stock</h3>
                <div className="itemposacc">
                    <div className="item__img"></div>
                    <div className="item__img"></div>
                    <div className="item__img"></div>


                </div>
            </div>
        </div>
        <Preview></Preview>
    </div>
}

export default Performance;