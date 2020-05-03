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
            context.contextSetButt("/images/gun/butt/butt2.png");
        }

    };



 //   const handlebarrel = (event) => {
   //     context.contextSetBarrel(event.target.value);
   // }




    return <div>
        <Route component={Header}></Route>
        <div className="container">
            <div className="item">
                <p>Handle</p>
                <div className="itemposacc">
                    <div className="item__img" onClick={handleclickhandle1}></div>
                    <div className="item__img" onClick={handleclickhandle2}></div>
                    <div className="item__img" onClick={handleclickhandle3}></div>



                </div>

            </div>

            <div className="item">
                <p>Butt stock</p>
                <div className="itemposacc">
                    <div className="item__img" onClick={handleclickbutt1}></div>
                    <div className="item__img" onClick={handleclickbutt2}></div>
                    <div className="item__img" onClick={handleclickbutt3}></div>


                </div>
            </div>
        </div>
        <Preview></Preview>
    </div>
}

export default Performance;