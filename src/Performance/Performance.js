import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Context from '../context';


const Performance = (props) => {
    const context = React.useContext(Context);

    const handleclickhandle1 = () => {
        context.contextSetHandle("/images/gun/handle/handle1.png");
    };

    const handleclickhandle2 = () => {
        context.contextSetHandle("/images/gun/handle/handle2.png");

    };

    const handleclickhandle3 = () => {
        context.contextSetHandle("/images/gun/handle/handle3.png");
    };




    const handleclickbutt1 = () => {
        context.contextSetButt("");
 
    };

    const handleclickbutt2 = () => {
        context.funclassbutt('preview_butt')
        context.contextSetButt("/images/gun/butt/butt1.png");
    };

    const handleclickbutt3 = () => {
        context.funclassbutt('preview_butt2')
        if (context.color === "/images/gun/body/body_blue.png") {
            context.contextSetButt("/images/gun/butt/butt2_blue.png");
        } else if (context.color === "/images/gun/body/body_gold.png") {
            context.contextSetButt("/images/gun/butt/butt2_gold.png");
        } else {
            context.contextSetButt("/images/gun/butt/butt2_black.png");
        }

    };





    return <div>
        <Route component={Header}></Route>
        <div className="container">
            <div className="item">
                <p>Handle</p>
                <div className="itemposacc">
                    <div className={context.handle == "/images/gun/handle/handle1.png" ? "item__img itemselect" : "item__img"} onClick={handleclickhandle1}><img src="/images/gun/handle/handle1.png" alt=""/></div>
                    <div className={context.handle == "/images/gun/handle/handle2.png" ? "item__img itemselect" : "item__img"} onClick={handleclickhandle2}><img src="/images/gun/handle/handle2.png" alt=""/></div>
                    <div className={context.handle == "/images/gun/handle/handle3.png" ? "item__img itemselect" : "item__img"} onClick={handleclickhandle3}><img className="handlelast" src="/images/gun/handle/handle3.png" alt=""/></div>



                </div>

            </div>

            <div className="item">
                <p>Butt stock</p>
                <div className="itemposacc">
                    <div className={context.butt == "" ? "item__img itemselect" : "item__img"} onClick={handleclickbutt1}><img src="/images/gun/butt/Stock.png" alt=""/></div>
                    <div className={context.butt == "/images/gun/butt/butt1.png" ? "item__img itemselect" : "item__img"} onClick={handleclickbutt2}><img src="/images/gun/butt/butt1.png" alt=""/></div>
                    <div className={context.butt == "/images/gun/butt/butt2.png" ? "item__img itemselect" : "item__img"} onClick={handleclickbutt3}><img src="/images/gun/butt/butt2_black.png" alt=""/></div>


                </div>
            </div>
        </div>
        <Preview></Preview>
    </div>
}

export default Performance;