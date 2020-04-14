import React from 'react';
import { Link} from 'react-router-dom';

const Home = () => {
    return <div className="Homescreen">
        <Link to="/basic">
        <button className="Homescreen__startbtn">Start</button>
        </Link>
    </div>
}

export default Home;