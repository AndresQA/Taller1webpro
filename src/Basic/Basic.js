import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';

const Basic = () => {
    return <div>
        <Header></Header>
        <div className="container">
            <div className="item">
                <h3>Name</h3>
                <input type="text" />

            </div>

            <div className="item">
                <h3>Magazine size</h3>
                <input type="range" name="" id=""/>
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

export default Basic;