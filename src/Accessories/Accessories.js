import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import Context from '../context';


const Accessories = (props) => {

    const context = React.useContext(Context);

    const handleclicksight1 = () => {

        context.contextSetSight("");
    };
    const handleclicksight2 = () => {
        context.contextClassSight("preview_sight2")
        context.contextSetSight("./images/gun/sight/sight2.png");
    };
    const handleclicksight3 = () => {
        context.contextClassSight("preview_sight3")
        context.contextSetSight("./images/gun/sight/sight3.png");
    };




    // para los silenciadores


    const handleclicksilencer1 = () => {

        context.contextSetSilencer("");
    };

    const handleclicksilencer2 = () => {
        context.contextClassSilencer("preview_silencer");
        context.contextSetSilencer("./images/gun/silencer/silencer2.png");
    };

    const handleclicksilencer3 = () => {
        context.contextClassSilencer("preview_silencer2");
        context.contextSetSilencer("./images/gun/silencer/silencer3.png");
    };





    return <div>
        <Route component={Header}></Route>
        <div className="container">
            <div className="item">
                <p>Opticas</p>
                <div className="itemposacc__sitght">
                    <div className={context.sight == "" ? "item__img itemselect" : "item__img"} onClick={handleclicksight1}><img src="./images/gun/sight/stock.png" alt=""/></div>
                    <div className={context.sight == "./images/gun/sight/sight2.png" ? "item__img itemselect" : "item__img"} onClick={handleclicksight2}><img src="./images/gun/sight/sight2.png" alt=""/></div>
                    <div className={context.sight == "./images/gun/sight/sight3.png" ? "item__img itemselect" : "item__img"} onClick={handleclicksight3}><img src="./images/gun/sight/sight3.png" alt=""/></div>

                </div>

            </div>

            <div className="item">
                <p>Silenciadores</p>
                <div className="itemposacc">
                    <div className={context.silencer == "" ? "item__img itemselect" : "item__img"} onClick={handleclicksilencer1}><img src="/images/gun/silencer/stock.png" alt=""/></div>
                    <div className={context.silencer == "./images/gun/silencer/silencer2.png" ? "item__img itemselect" : "item__img"} onClick={handleclicksilencer2}><img src="./images/gun/silencer/silencer2.png" alt=""/></div>
                    <div className={context.silencer == "./images/gun/silencer/silencer3.png" ? "item__img itemselect" : "item__img"} onClick={handleclicksilencer3}><img src="./images/gun/silencer/silencer3.png" alt=""/></div>

                </div>
            </div>


        </div>
        <Preview></Preview>
    </div>
}

export default Accessories;