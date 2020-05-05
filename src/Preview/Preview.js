import React from 'react';
//import PropTypes from 'prop-types';
import Context from '../context';
import { Link, useHistory } from 'react-router-dom';



const Preview = () => {

    const context = React.useContext(Context);
    const history = useHistory();

    const handleFinish = () =>{
        context.handleFinish();
        history.push('/galery')
    };

    const handleEdit = ()=>{

        var idedit = context.id
      
        const index = context.list.findIndex((elem) => {

            console.log(elem.id)
            console.log(idedit)

            
            return elem.id === idedit;
        })
        console.log(index)


        history.push('/galery')
        //console.log(context.list.indexOf(context.id));
/*
        context.list.indexOf((elem) => {
            element = elem;
            console.log(elem);
            return elem.id;
        })
*/
     
    }

    return <div>
        <div className="preview">
            <img src={context.color} className="preview_armbody" alt="" />
            <img src={context.butt} className={context.classButt} alt="" />
            <img src={'/images/gun/mag/mag'+context.mag+'.png'} className="preview_mag" alt="" />
            <img src={context.handle} className="preview_handle" alt="" />
            <img src={context.barrelColor} className="preview_barrel" alt="" />
            <img src={context.silencer} className={context.classSilencer} alt="" />
            <img src={context.sight} className={context.classSight} alt="" />

        </div>
        <p className="namegun"> {context.name} </p>
        {/*<p onClick={handleEdit}>Edit</p> */}       
        <Link to="/galery"><p onClick={handleFinish} className="finishbtn">Finish</p>
        </Link>
    </div>
}

export default Preview;