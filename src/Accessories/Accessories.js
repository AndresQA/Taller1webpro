import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';

const Accessories = (props) => {
/*
    if(props.location.pathname === "/accessories"){
        document.addEventListener("DOMContentLoaded", function () { 
            document.querySelector(".accessories").style.color = "red";
            console.log("hola");
         });
    }
    */



    return <div>
        <Header></Header>
        <div className="container">
            <div className="item">
                <h3>Sight</h3>
                <div className="itemposacc__sitght">
                    <div className="item__img"></div>
                    <div className="item__img"></div>
                    <div className="item__img"></div>
                    <div className="item__img"></div>

                </div>

            </div>

            <div className="item">
                <h3>Silencer</h3>
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

export default Accessories;