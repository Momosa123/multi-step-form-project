import React from "react";
import ButtonGroup from "./ButtonGroup";
import TextInput from "./TextInput"

export default function LeftContainer({stage, setStage, savedinput, setSavedInput}){
 
  const labelText = ['Apply to work with our agency','What\'s your budget','Anything else we should know?', 'Thank you!' ]
  let content = ""
 if(stage === 0){
  content = <TextInput
              stage={stage}
              savedinput={savedinput}
              setSavedInput={setSavedInput}
              placeholder={"What's your email"}/>
 }else if (stage === 2){
  content = <TextInput 
              stage={stage}
              setSavedInput={setSavedInput}
               />
 }


  return(
    <div className="container left-container">
    <div className="text-input-content">

     <h2>{labelText[stage]}</h2>
     {content}
     {stage === 1 && <ButtonGroup
                      
                      setSavedInput={setSavedInput}
     />}
     {stage !== 3 && <button onClick={()=>setStage(stage + 1)} 
     className="next-button">Next</button>}
    </div>
    
    </div>
  )
}