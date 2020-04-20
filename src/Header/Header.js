import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';


const Header = (props) => {

    //console.log(props.location.pathname);



    return <nav>
        <strong>
            <div className="Mainnav">
                <Link to="/basic" className="basic"> Basic</Link>
                <Link to="/accessories" className="accessories">Accessories</Link>
                <Link to="/performance" className="performance">Performance</Link>
            </div>
        </strong>
    </nav>
}




export default Header;