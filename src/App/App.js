import React from 'react';
import Home from '../Home/Home';
import Performance from '../Performance/Performance';
import Basic from '../Basic/Basic';
import Accessories from '../Accessories/Accessories';

import { HashRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Router>

      <Route path="/" exact component={Home}/>
      <Route path="/basic" component={Basic}/>
      <Route path="/accessories" component={Accessories}/>
      <Route path="/performance" component={Performance}/>

      </Router>



    </div>
  );
}

export default App;
