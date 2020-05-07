import React from 'react';
//import PropTypes from 'prop-types';
import Context from '../context';
import { Link, useHistory } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';



const Preview = () => {

    const context = React.useContext(Context);
    const history = useHistory();


    const handleFinish = () => {
        context.handleFinish();
        history.push('/galery')
    };

    const handleHover = (index) => {

        const node = document.querySelector(".imghover" + index)
        node.classList.add('animated', 'fadeIn')

    }

    const handleOut = (index) => {


        const node = document.querySelector(".imghover" + index)
        node.classList.remove('animated', 'fadeIn')


    }
    /*
        const handleDownload = () => {
            console.log('holla')
            domtoimage.toBlob(document.getElementsByClassName('preview'))
                .then(function (blob) {
                    window.saveAs(blob, 'my-node.png');
                });
        }
        */


    return <div id="armPrev">
        <div className="preview" >
            <img src={context.color} className="preview_armbody"  alt="" />
            <img src={context.butt} className={context.classButt} id="butanim" alt="" />
            <img src={'./images/gun/mag/mag' + context.mag + context.colorMag + '.png'} className="preview_mag" alt="" />
            <img src={context.handle} className="preview_handle" alt="" />
            <img src={context.barrelColor} className="preview_barrel" alt="" />
            <img src={context.silencer} className={context.classSilencer} alt="" />
            <img src={context.sight} className={context.classSight} alt="" />

        </div>
        <p className="namegun"> {context.name} </p>
        {/*<p onClick={handleEdit}>Edit</p> 
        <p onClick={handleDownload} className="">Descargar</p>
        */}
        <div className="posbtn">

            <div className="hoverimgprev">
                <img src="./images/hoverselect.png" className="imghover1" alt="" />
                <div className="hoverprop">
                    <Link to="/galery">
                        <p onClick={handleFinish} onMouseOver={() => handleHover(1)} onMouseOut={() => handleOut(1)} className="finishbtn">Terminar</p>
                    </Link>
                </div>
            </div>
        </div>

    </div>
}

export default Preview;