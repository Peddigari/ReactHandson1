import './App.css';
import FuncComp from './Components/FuncComp';
import ClassComp from './Components/ClassComp';

import { useState } from 'react';

function App() {
  const [fstate,setFstate] = useState(false)
  const [cstate,setCstate] = useState(false)
  console.log(fstate)
  return (
    <div className="mainContainer">
      <div>
      <div className="App">  
         Styling Using Functional and Class Components
        </div>
        <div className="Buttons">
        <button className="btn" onClick={()=>setFstate(!fstate)}>To see styling in functional component</button>
        <button className="btn" onClick={()=>setCstate(!cstate)}>To see styling in class component</button>
        </div>
      </div>
      <div className="funcboxParent">
      {fstate ? <FuncComp/> : " "}
      {cstate && <ClassComp/>}   
      </div>
      </div>
  );
}

export default App;
