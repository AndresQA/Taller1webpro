import React from 'react';
//import PropTypes from 'prop-types';
import Context from '../context';
import { useHistory, Link } from 'react-router-dom';



const Galery = () => {

    const context = React.useContext(Context);
    const history = useHistory();

    const handleDeleteAll = () => {
        const element = document.querySelector('.armavista');
        element.classList.add('animated', 'zoomOut');

        element.addEventListener('animationend', function () {
            element.classList.remove('animated', 'zoomOut')
            context.setList([]);
        })
    }

    const handleArmDelete = (id) => {

        const element = document.getElementById(id);
        element.classList.add('animated', 'zoomOut');

        element.addEventListener('animationend', function () {
            element.classList.remove('animated', 'zoomOut')
            const index = context.list.findIndex((elem) => {


                //console.log(elem.id)
                return elem.id === id;
            })

            console.log(index)
            context.setList([
                ...context.list.slice(0, index),
                ...context.list.slice(index + 1),
            ])

        })


    }

    const handleHover = (index) => {

        const node = document.querySelector(".imghover" + index)
        node.classList.add('animated', 'fadeIn')

    }

    const handleOut = (index) => {


        const node = document.querySelector(".imghover" + index)
        node.classList.remove('animated', 'fadeIn')


    }

    const handleArmEdit = (id) => {

        var element;

        context.list.findIndex((elem) => {
            // console.log(elem)
            element = elem;
            return elem.id === id;
        })

        context.contextSetName(element.name);
        context.setId(element.id)
        context.contextSetColor(element.color);
        context.contextSetSight(element.sight);
        context.contextSetSilencer(element.silencer);
        context.contextSetMag(element.mag);
        context.contextSetHandle(element.handle);
        context.contextSetButt(element.butt);
        context.contextSetBarrelColor(element.barrelColor);
        context.funclassbutt(element.classButt);
        context.contextClassSilencer(element.classSilencer);
        context.contextClassSight(element.classSight);
        context.contextSetColorMag(element.colorMag);
        history.push('/basic');

    }


    return <div className="contentsArms">

        <h1 className="titulogalery">Galeria</h1>
        <div className="posback">
            <div className="hoverimggalery">
                <img src="./images/hoverselect.png" className="imghover1" alt="" />
                <div className="back">
                    <Link to="/">
                        <h1 onMouseOver={() => handleHover(1)} onMouseOut={() => handleOut(1)}>Volver</h1>
                    </Link>
                </div>
            </div>

        </div>


        <div className="armavista">
            {context.list.map(arm => {
                return <div className={'armcreate animated fadeInDown delay-0.5s'} id={arm.id}>
                    <p>{arm.name}</p>
                    <img className="btnDelete" onClick={() => handleArmDelete(arm.id)} src="./images/delete.png" alt="" />
                    <div className="armcreate__prev" onClick={() => handleArmEdit(arm.id)}>
                        <img src={arm.color} className="preview_armbodyGalery" alt="" />
                        <img src={arm.butt} className={arm.classButt + 'Galery'} alt="" />
                        <img src={'./images/gun/mag/mag' + arm.mag + arm.colorMag + '.png'} className="preview_magGalery" alt="" />
                        <img src={arm.handle} className="preview_handleGalery" alt="" />
                        <img src={arm.barrelColor} className="preview_barrelGalery" alt="" />
                        <img src={arm.silencer} className={arm.classSilencer + 'Galery'} alt="" />
                        <img src={arm.sight} className={arm.classSight + 'Galery'} alt="" />
                    </div>
                </div>
            })}

        </div>

        {context.list.length == 0 &&
          <p>Vacio</p>

        }

        {context.list.length > 0 &&
            <div className="sectiondeleteall">
                <p className="deleteall" onClick={handleDeleteAll}>Eliminar todas</p>

            </div>

        }

    </div>
}

export default Galery;