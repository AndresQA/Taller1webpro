import React from 'react';
import Home from '../Home/Home';
import Performance from '../Performance/Performance';
import Basic from '../Basic/Basic';
import Accessories from '../Accessories/Accessories';
import Galery from '../Galery/Galery';
import { HashRouter as Router, Route } from 'react-router-dom';
import Context from '../context';
import {v4} from 'uuid';




function App() {


  const [nameGun, setName] = React.useState('Ak-47');
  const [id, setId] = React.useState(v4());
  const [color, setColor] = React.useState('./images/gun/body/body_black.png');
  const [sight, setSight] = React.useState('');
  const [silencer, setSilencer] = React.useState('');
  const [mag, setMag] = React.useState('1');
  const [handle, setHandle] = React.useState('./images/gun/handle/handle1.png');
  const [butt, setButt] = React.useState('');
  const [barrelColor, setBarrelColor] = React.useState('./images/gun/body/barrel_black.png');



  //clases
  const [classButt, SetClassButt] = React.useState('');
  const [classSilencer, SetClassSilencer] = React.useState('');
  const [classSight, SetClassSight] = React.useState('');

  //Lista
  const [list, setList] = React.useState([]);

  //para poner a funcionar el local storage

  React.useEffect(()=>{
    const listString = localStorage.getItem('list');
    if (listString != null) {
      setList(JSON.parse(listString));
    }
  }, []);

  React.useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]);


  //agrega los elementos a la lista
  const handleFinish = () => {
    context.setList([
      ...context.list, {
        name: context.name,
        id: context.id,
        color: context.color,
        butt: context.butt,
        mag: context.mag,
        handle: context.handle,
        barrelColor: context.barrelColor,
        silencer: context.silencer,
        sight: context.sight,
        classButt: context.classButt,
        classSilencer: context.classSilencer,
        classSight: context.classSight,
      }
    ]);
    
  };

  const handleChangeId =() =>{
    setId(v4());
    context.contextSetName('Ak-47');
    context.contextSetColor('./images/gun/body/body_black.png');
    context.contextSetSight('');
    context.contextSetSilencer('');
    context.contextSetMag('1');
    context.contextSetHandle('./images/gun/handle/handle1.png');
    context.contextSetButt('');
    context.contextSetBarrelColor('./images/gun/body/barrel_black.png');
  }



  const context = {
    name: nameGun,
    id: id,
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
    list: list,
    setList: setList,
    handleFinish,
    handleChangeId,
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




        </Context.Provider>
      </Router>



    </div>
  );
}

export default App;
