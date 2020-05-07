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

    const handleHover = (index) => {
        console.log("hola")
        const node = document.querySelector(".imghover" + index)
        node.classList.add('animated', 'fadeIn')

    }

    const handleOut = (index) => {


        const node = document.querySelector(".imghover" + index)
        node.classList.remove('animated', 'fadeIn')


    }


    return <div>
        <Route component={Header}></Route>

        <div className="container">
            <div className="item">
                <p>Nombre</p>
                <input className="inputName" type="text" placeholder="Nombre del mod" value={context.name} onChange={handleInput} />
            </div>

            <div className="item">
                <p>Tamaño del cargador</p>
                <input type="range" min="1" max="3" name="" value={context.mag} onChange={handleMag} />
            </div>

            <div className="item">
                <p>Color</p>
                <div className="itempos">
                    <div className="hoverimgb">
                        <img src="./images/hoverselect2.png" className="imghover1" alt="" />
                        <div className={context.color == "./images/gun/body/body_black.png" ? "item__color plate itemselect" : "item__color plate"} onMouseOver={() => handleHover(1)} onMouseOut={() => handleOut(1)} onClick={() => handleClickColor('black')}></div>
                    </div>
                    <div className={context.color == "./images/gun/body/body_blue.png" ? "item__color blue itemselect" : "item__color blue"} onClick={() => handleClickColor('blue')}></div>
                    <div className={context.color == "./images/gun/body/body_gold.png" ? "item__color gold itemselect" : "item__color gold"} onClick={() => handleClickColor('gold')}></div>
                </div>
            </div>

        </div>
        <Preview></Preview>

    </div>
}


export default Basic;