import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import { HashRouter as Router, Route} from 'react-router-dom';
import Context from '../context';


const Basic = (props) => {

const context = React.useContext(Context);

    const handleInput = (event) => {
        console.log(event.target.value);
        context.contextSetName(event.target.value);
    };

    const handleclickRed = ()=> {
        context.color = "red"
        console.log(context.color);
    };
    const handleclickBlue = ()=> {
        context.color = "blue"
        console.log(context.color);
    };
    const handleclicklGold = ()=> {
        context.color = "gold"
        console.log(context.color);
    };
    const handleclicklYellow = ()=> {
        context.color = "yellow"
        console.log(context.color);
    };
    const handleclicklBlack = ()=> {
        context.color = "black"
        console.log(context.color);
    };

    return <div>
        <Route component={Header}></Route>
       
        <div className="container">
            <div className="item">
                <h3>Name</h3>
                <input type="text" placeholder="Setup Name" value={context.name} onChange={handleInput} />

            </div>

            <div className="item">
                <h3>Mag size</h3>
                <input type="range" min="1" max="3" defaultValue="1" name="" id="MagSize" />
            </div>

            <div className="item">
                <h3>Color</h3>
                <div className="itempos">
                    <div className="item__color red" onClick={handleclickRed}></div>
                    <div className="item__color blue" onClick={handleclickBlue}></div>
                    <div className="item__color gold" onClick={handleclicklGold}></div>
                    <div className="item__color yellow" onClick={handleclicklYellow}></div>
                    <div className="item__color white" onClick={handleclicklBlack}></div>

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