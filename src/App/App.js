import React from 'react';
import Home from '../Home/Home';
import Performance from '../Performance/Performance';
import Basic from '../Basic/Basic';
import Accessories from '../Accessories/Accessories';
import { HashRouter as Router, Route } from 'react-router-dom';
import Context from '../context';



function App() {


  const [nameGun, setName] = React.useState('');
  const [color, setColor] = React.useState('black');
  const [sight, setSight] = React.useState('1');
  const [silencer, setSilencer] = React.useState('1');
  const [mag, setMag] = React.useState('1');
  const [handle, setHandle] = React.useState('1');
  const [butt, setButt] = React.useState('1');
  const [barrel, setBarrel] = React.useState('1');

  const context = {
    name: nameGun,
    contextSetName: setName,
    color: color,
    contextSetColor: setColor,
    mag: mag,
    contextSetMag: setMag,
    sight: sight,
    contextSetSight: setSight,
    silencer: silencer,
    contextSetSilencer: setSilencer,
    handle: handle,
    contextSetHandle: setHandle,
    butt: butt,
    contextSetButt: setButt,
    barrel: barrel,
    contextSetBarrel: setBarrel,
  }
  return (
    <div className="App">
      <Router>
        <Context.Provider value={context}>


          <Route path="/" exact component={Home} />
          <Route path="/basic" component={Basic} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/performance" component={Performance} />


          {/* 
      <Route path="/basic" render={() => <Basic nameGun={nameGun} setName={setName} setColor={setColor}></Basic>}/>
    */}

        </Context.Provider>
      </Router>



    </div>
  );
}

export default App;
