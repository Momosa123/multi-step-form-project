import React, {useState} from 'react';

import './App.css';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';


function App() {
  const [stage, setStage] = useState(0)
  const [savedInput, setSavedInput]=useState({})
  if(stage ===3){
    console.log(savedInput)
  }
  return (
    <div className="App">
    <LeftContainer 
     savedinput={savedInput}
     setSavedInput={setSavedInput}
     setStage={setStage} 
     stage={stage}/>
    <RightContainer stage={stage}/>
    
    </div>
  );
}

export default App;
