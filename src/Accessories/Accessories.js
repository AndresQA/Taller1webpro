import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import Context from '../context';


const Accessories = (props) => {

    const context = React.useContext(Context);

    const handleclicksight1 = () => {

        context.contextSetSight("1");
    };
    const handleclicksight2 = () => {
        context.contextClassSight("preview_sight2")
        context.contextSetSight("/images/gun/sight/sight2.png");
    };
    const handleclicksight3 = () => {
        context.contextClassSight("preview_sight3")
        context.contextSetSight("/images/gun/sight/sight3.png");
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
                <p>Sight</p>
                <div className="itemposacc__sitght">
                    <div className="item__img" onClick={handleclicksight1}></div>
                    <div className="item__img" onClick={handleclicksight2}></div>
                    <div className="item__img" onClick={handleclicksight3}></div>

                </div>

            </div>

            <div className="item">
                <p>Silencer</p>
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