import React from 'react';
import { Link} from 'react-router-dom';


const Header = () => {
    return <nav>
        <strong>
        <div className="Mainnav">
        <Link to="/basic"> Basic</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/performance">Performance</Link>
        </div>
        </strong> 
    </nav>
}

export default Header;