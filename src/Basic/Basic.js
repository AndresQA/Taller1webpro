import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Context from '../context';


const Basic = (props) => {

    const context = React.useContext(Context);

    const handleInput = (event) => {
        console.log(event.target.value);
        context.contextSetName(event.target.value);
    };



    const handleclickBlue = () => {
        context.contextSetColor("/images/gun/body/body_blue.png");
        context.contextSetBarrelColor("/images/gun/body/barrel_blue.png")
        if (context.butt === "/images/gun/butt/butt2.png" || context.butt === "/images/gun/butt/butt2_gold.png" ) {
            context.contextSetButt("/images/gun/butt/butt2_blue.png");
        }
    };
    const handleclicklGold = () => {
        context.contextSetColor("/images/gun/body/body_gold.png");
        context.contextSetBarrelColor("/images/gun/body/barrel_gold.png")
        if (context.butt === "/images/gun/butt/butt2.png" || context.butt === "/images/gun/butt/butt2_blue.png" ) {
            context.contextSetButt("/images/gun/butt/butt2_gold.png");
        }
    };
    const handleclicklBlack = () => {
        context.contextSetColor("/images/gun/body/body_black.png");
        context.contextSetBarrelColor("/images/gun/body/barrel_black.png")
        if (context.butt === "/images/gun/butt/butt2_blue.png" || context.butt === "/images/gun/butt/butt2_gold.png" ) {
            context.contextSetButt("/images/gun/butt/butt2.png");
        }
    };
  
    
    const handleMag = (event) => {     

        if(event.target.value == 1){
            context.contextSetMag("/images/gun/mag/mag1.png");
        }
        if(event.target.value == 2){
            context.contextSetMag("/images/gun/mag/mag2.png");
        }
        if(event.target.value == 3){
            context.contextSetMag("/images/gun/mag/mag3.png");
        }
    }


    return <div>
        <Route component={Header}></Route>

        <div className="container">
            <div className="item">
                <h3>Name</h3>
                <input type="text" placeholder="Setup Name" value={context.name} onChange={handleInput} />

            </div>

            <div className="item">
                <h3>Mag size</h3>
                <input type="range" min="1" max="3" name="" id="MagSize" onChange={handleMag} />
            </div>

            <div className="item">
                <h3>Color</h3>
                <div className="itempos">
                    <div className="item__color plate" onClick={handleclicklBlack}></div>
                    <div className="item__color blue" onClick={handleclickBlue}></div>
                    <div className="item__color gold" onClick={handleclicklGold}></div>

                </div>
            </div>

        </div>
        <Preview></Preview>

    </div>
}
/*
Basic.propTypes = {
    nameGun: PropTypes.string,
    setName: PropTypes.func,
    setColor: PropTypes.func,
}
*/

export default Basic;