import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';


const Home = () => {

    const context = React.useContext(Context);


    const handleChangeId = () => {
        context.handleChangeId();
    }


    return <div className="Homescreen">
        <Link to="/basic">
            <div className="hoverprop">
                <p onClick={handleChangeId} className="btnstart">CREAR</p>
            </div>
        </Link>
        <br />
        <Link to="/galery">
            <div className="hoverprop">
                <p className="btnstart">GALERIA</p>

            </div>
        </Link>
    </div>
}

export default Home;