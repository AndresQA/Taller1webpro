import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import { HashRouter as Router, Route} from 'react-router-dom';


const Accessories = (props) => {




    return <div>
        <Route component={Header}></Route>
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