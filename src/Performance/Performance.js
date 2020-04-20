import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
//import PropTypes from 'prop-types';
import { Route} from 'react-router-dom';
import Context from '../context';


const Performance = (props) => {
    const context = React.useContext(Context);

    const handleclickhandle1 = () => {
        context.handle = "1"
        context.contextSetHandle(context.handle);
    };

    const handleclickhandle2 = () => {
        context.handle = "2"
        context.contextSetHandle(context.handle);
    };

    const handleclickhandle3 = () => {
        context.handle = "3"
        context.contextSetHandle(context.handle);
    };




    const handleclickbutt1 = () => {
        context.butt = "1"
        context.contextSetButt(context.butt);
    };

    const handleclickbutt2 = () => {
        context.butt = "2"
        context.contextSetButt(context.butt);
    };

    const handleclickbutt3 = () => {
        context.butt = "3"
        context.contextSetButt(context.butt);
    };



    const handlebarrel = (event) => {
        context.contextSetBarrel(event.target.value);
    }

 


    return <div>
        <Route component={Header}></Route>
        <div className="container">
            <div className="item">
                <h3>Handle</h3>
                <div className="itemposacc">
                    <div className="item__img" onClick={handleclickhandle1}></div>
                    <div className="item__img" onClick={handleclickhandle2}></div>
                    <div className="item__img" onClick={handleclickhandle3}></div>


                </div>

            </div>

            <div className="item">
                <h3>Barrel size</h3>
                <input type="range" min="1" max="3" value={context.barrel} name="" id="" className="barrelsize" onChange={handlebarrel}/>
            </div>

            <div className="item">
                <h3>Butt stock</h3>
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