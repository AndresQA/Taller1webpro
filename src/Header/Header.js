import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';


const Header = (props) => {




    return <nav>
        <strong>
            <div className="Mainnav">
                {props.location.pathname == "/basic" ? <Link to="/basic" className="basic redchange">Basico</Link> : <Link to="/basic" className="basic">Basico</Link> }
                {props.location.pathname == "/accessories" ? <Link to="/accessories" className="accessories redchange">Accesorios</Link> :  <Link to="/accessories" className="accessories">Accesorios</Link>}
                {props.location.pathname == "/performance" ? <Link to="/performance" className="performance redchange">Rendimiento</Link> : <Link to="/performance" className="performance">Rendimiento</Link>}
            </div>
        </strong>
    </nav>
}




export default Header;