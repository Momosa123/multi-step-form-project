import React, {useState} from "react";

export default function ButtonGroup({ setSavedInput}){
const [selectedButton, setSelectedButton] = useState(0)
const ALT_STYLE = {
  background : 'white',
color: '#745E5E'

}
  const BUTTON_TEXT= ['$2k', '$5k', 'No limit']
  return(
    <div className="Button-group">
   {
    BUTTON_TEXT.map((btnText,i) => (
      <button key={i}
      className="budget-button" 
      style={selectedButton === i ? ALT_STYLE : {}} onClick={()=>{setSelectedButton(i)
      setSavedInput(input =>
        ({...input, 
        budget: btnText}))
      }}>{btnText}
      </button>)
   )}
    </div>
  )
}