import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';


const Home = () => {

    const context = React.useContext(Context);


    const handleChangeId = () => {
        context.handleChangeId();
    }

    const handleHover = (index) => {

        const node = document.querySelector(".imghover"+index)
        node.classList.add('animated', 'fadeIn')

    }

    const handleOut = (index) => {


        const node = document.querySelector(".imghover"+index)
        node.classList.remove('animated', 'fadeIn')


    }



    return <div className="Homescreen">
        <Link to="/basic">
            <div className="hoverimg">
                <img src="./images/hoverselect.png" className="imghover1" alt="" />
                <div className="hoverprop">
                    <p onClick={handleChangeId} onMouseOver={()=>handleHover(1)} onMouseOut={()=>handleOut(1)} className="btnstart">CREAR</p>
                </div>

            </div>
        </Link>
        <br />
        <Link to="/galery">
            <div className="hoverprop">
                <div className="hoverimg">
                    <img src="./images/hoverselect.png" className="imghover2" alt="" />
                    <div className="hoverprop">
                        <p className="btnstart" onMouseOver={()=>handleHover(2)} onMouseOut={()=>handleOut(2)}>GALERIA</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
}

export default Home;