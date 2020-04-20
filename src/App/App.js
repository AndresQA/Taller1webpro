import React from 'react';
import Home from '../Home/Home';
import Performance from '../Performance/Performance';
import Basic from '../Basic/Basic';
import Accessories from '../Accessories/Accessories';
import { HashRouter as Router, Route} from 'react-router-dom';
import Context from '../context';



function App() {


  const [ nameGun, setName ] = React.useState('');
  const [ color ] = React.useState('black');
  
  const context = {
    name: nameGun,
    contextSetName: setName,
    color: color,
    
  }
  
  console.log(context.color);
  return (
    <div className="App">
      <Router>
      <Context.Provider value={context}>
        
        
      <Route path="/" exact component={Home}/>
      <Route path="/basic" component={Basic}/>
      <Route path="/accessories" component={Accessories}/>
      <Route path="/performance" component={Performance}/>
       
      
      {/* 
      <Route path="/basic" render={() => <Basic nameGun={nameGun} setName={setName} setColor={setColor}></Basic>}/>
    */}

    </Context.Provider>      
      </Router>



    </div>
  );
}

export default App;
