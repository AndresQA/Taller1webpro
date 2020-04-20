import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import { HashRouter as Router, Route} from 'react-router-dom';


const Performance = (props) => {

    return <div>
        <Route component={Header}></Route>
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
                <input type="range" min="1" max="3" defaultValue="1" name="" id="" className="barrelsize"/>
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