import React from 'react';
import { Link} from 'react-router-dom';


const Home = () => {
    return <div className="Homescreen">
        <Link to="/basic">
        <p className="btnstart">START</p>
        </Link>
    </div>
}

export default Home;