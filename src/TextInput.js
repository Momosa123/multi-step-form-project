import React from "react";


export default function TextInput({placeholder, setSavedInput, stage}){

  function changeinput(e){
    if (stage === 0){
      setSavedInput(input =>
        ({...input, 
        email: e.target.value}))
    }else if(stage === 2){
      setSavedInput(input =>
        ({...input, 
        message: e.target.value}))
    }
  }
  return(
    <div className="text-input">
    <input onChange={e => changeinput(e)} type="text" placeholder={placeholder} />
    </div>
  )
}