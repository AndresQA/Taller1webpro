import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import Context from '../context';


const Accessories = (props) => {

    const context = React.useContext(Context);

    const handleclicksight1 = () => {
        context.sight = "1"
        context.contextSetSight(context.sight);
    };
    const handleclicksight2 = () => {
        context.contextSetSight("/images/gun/sight/sight2.png");
    };
    const handleclicksight3 = () => {
        context.sight = "3"
        context.contextSetSight(context.sight);
    };
    const handleclicksight4 = () => {
        context.sight = "4"
        context.contextSetSight(context.sight);
    };



    // para los silenciadores


    const handleclicksilencer1 = () => {

        context.contextSetSilencer("");
    };

    const handleclicksilencer2 = () => {
        context.contextClassSilencer("preview_silencer");
        context.contextSetSilencer("/images/gun/silencer/silencer2.png");
    };

    const handleclicksilencer3 = () => {
        context.contextClassSilencer("preview_silencer2");
        context.contextSetSilencer("/images/gun/silencer/silencer3.png");
    };





    return <div>
        <Route component={Header}></Route>
        <div className="container">
            <div className="item">
                <h3>Sight</h3>
                <div className="itemposacc__sitght">
                    <div className="item__img" onClick={handleclicksight1}></div>
                    <div className="item__img" onClick={handleclicksight2}></div>
                    <div className="item__img" onClick={handleclicksight3}></div>
                    <div className="item__img" onClick={handleclicksight4}></div>

                </div>

            </div>

            <div className="item">
                <h3>Silencer</h3>
                <div className="itemposacc">
                    <div className="item__img" onClick={handleclicksilencer1}></div>
                    <div className="item__img" onClick={handleclicksilencer2}></div>
                    <div className="item__img" onClick={handleclicksilencer3}></div>

                </div>
            </div>


        </div>
        <Preview></Preview>
    </div>
}

export default Accessories;