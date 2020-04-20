import React from 'react';
import preview from '../preview.svg';
//import PropTypes from 'prop-types';
import Context from '../context';



const Preview = () => {

    const context = React.useContext(Context);

    const handleclic = ()=>{
        console.log(context.color);
    }

    return <div className="previewcontent">
            <img src={preview} className="preview_arm" onClick={handleclic} alt="Preview"/>
    </div>
}

export default Preview;