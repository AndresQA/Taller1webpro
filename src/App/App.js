import React from 'react';
import Home from '../Home/Home';
import Performance from '../Performance/Performance';
import Basic from '../Basic/Basic';
import Accessories from '../Accessories/Accessories';
import Galery from '../Galery/Galery';
import { HashRouter as Router, Route } from 'react-router-dom';
import Context from '../context';



function App() {


  const [nameGun, setName] = React.useState('Ak-47');
  const [color, setColor] = React.useState('/images/gun/body/body_black.png');
  const [sight, setSight] = React.useState('');
  const [silencer, setSilencer] = React.useState('');
  const [mag, setMag] = React.useState('/images/gun/mag/mag3.png');
  const [handle, setHandle] = React.useState('/images/gun/handle/handle1.png');
  const [butt, setButt] = React.useState('');
  const [barrelColor, setBarrelColor] = React.useState('/images/gun/body/barrel_black.png');

  //clases
  const [classButt, SetClassButt] = React.useState('');
  const [classSilencer, SetClassSilencer] = React.useState('');
  const [classSight, SetClassSight] = React.useState('');

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
    barrelColor: barrelColor,
    contextSetBarrelColor: setBarrelColor,
    classButt: classButt,
    funclassbutt: SetClassButt,
    classSilencer: classSilencer,
    contextClassSilencer: SetClassSilencer,
    classSight: classSight,
    contextClassSight: SetClassSight,
  }
  return (
    <div className="App">
      <Router>
        <Context.Provider value={context}>


          <Route path="/" exact component={Home} />
          <Route path="/basic" component={Basic} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/performance" component={Performance} />
          <Route path="/galery" component={Galery} />


          {/* 
      <Route path="/basic" render={() => <Basic nameGun={nameGun} setName={setName} setColor={setColor}></Basic>}/>
    */}

        </Context.Provider>
      </Router>



    </div>
  );
}

export default App;
