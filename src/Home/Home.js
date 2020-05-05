import React from 'react';
import { Link} from 'react-router-dom';
import Context from '../context';


const Home = () => {

    const context = React.useContext(Context);
    const handleChangeId = () =>{
        context.handleChangeId();
    }


    return <div className="Homescreen">
        <Link to="/basic">
        <p onClick={handleChangeId} className="btnstart">START</p>
        </Link>
        <br/>
        <Link to="/galery">
        <p className="btnstart">GALERY</p>
        </Link>
    </div>
}

export default Home;