import React from 'react';
import Home from '../Home/Home';
import Performance from '../Performance/Performance';
import Basic from '../Basic/Basic';
import Accessories from '../Accessories/Accessories';



import { HashRouter as Router, Route} from 'react-router-dom';



function App() {

  const [ nameGun, setName ] = React.useState('');




  return (
    <div className="App">
      
      <Router>
        
       
      
      <Route path="/" exact component={Home}/>
     
      </Router>

      <Router>
      <Route path="/basic" render={() => <Basic nameGun={nameGun} setName={setName}></Basic>}/>
      <Route path="/accessories" component={Accessories}/>
      <Route path="/performance" component={Performance}/>

      </Router>



    </div>
  );
}

export default App;
