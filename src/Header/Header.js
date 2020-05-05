import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';


const Header = (props) => {




    return <nav>
        <strong>
            <div className="Mainnav">
                {props.location.pathname == "/basic" ? <Link to="/basic" className="basic redchange">Basic</Link> : <Link to="/basic" className="basic">Basic</Link> }
                {props.location.pathname == "/accessories" ? <Link to="/accessories" className="accessories redchange">Accessories</Link> :  <Link to="/accessories" className="accessories">Accessories</Link>}
                {props.location.pathname == "/performance" ? <Link to="/performance" className="performance redchange">Performance</Link> : <Link to="/performance" className="performance">Performance</Link>}
            </div>
        </strong>
    </nav>
}




export default Header;