import React from 'react';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';
import { Route } from 'react-router-dom';
import Context from '../context';




const Basic = (props) => {



    const context = React.useContext(Context);

    const handleInput = (event) => {
        console.log(event.target.value);
        context.contextSetName(event.target.value);
    };


    const handleClickColor = (bodycolor) => {
        context.contextSetColor('./images/gun/body/body_' + bodycolor + '.png');
        context.contextSetBarrelColor('./images/gun/body/barrel_' + bodycolor + '.png')
        if (context.butt != "" && context.butt != "./images/gun/butt/butt1.png") {
            context.contextSetButt('./images/gun/butt/butt2_' + bodycolor + '.png');
        }
        context.contextSetColorMag(bodycolor);
    };

    const handleMag = (event) => {
        context.contextSetMag(event.target.value);

    }




    return <div>
        <Route component={Header}></Route>

        <div className="container">
            <div className="item">
                <p>Nombre</p>
                <input className="inputName animated bounceIn" type="text" placeholder="Nombre del mod" value={context.name} onChange={handleInput} />
            </div>

            <div className="item">
                <p>Tamaño del cargador</p>
                <input type="range" className="inputmag animated bounceIn" min="1" max="3" name="" value={context.mag} onChange={handleMag} />
            </div>

            <div className="item">
                <p>Color</p>
                <div className="itempos">
                    <div className={context.color == "./images/gun/body/body_black.png" ? "item__color plate itemselect animated bounceIn" : "item__color plate animated bounceIn"} onClick={() => handleClickColor('black')}></div>
                    <div className={context.color == "./images/gun/body/body_blue.png" ? "item__color blue itemselect animated bounceIn" : "item__color blue animated bounceIn"} onClick={() => handleClickColor('blue')}></div>
                    <div className={context.color == "./images/gun/body/body_gold.png" ? "item__color gold itemselect animated bounceIn" : "item__color gold animated bounceIn"} onClick={() => handleClickColor('gold')}></div>
                </div>
            </div>

        </div>
        <Preview></Preview>

    </div>
}


export default Basic;