import React from 'react';
import { Link} from 'react-router-dom';


const Header = () => {
    return <nav>
        <Link to="/basic">Basic</Link>
        <Link to="/accessories">accessories</Link>
        <Link to="/performance">performance</Link>
    </nav>
}

export default Header;