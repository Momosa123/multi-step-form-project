import React from "react";
import ButtonGroup from "./ButtonGroup";

export default function TextInput(){
  return(
    <div className="text-input">
    <div className="text-input-content">
    <h2>Apply to work with our agency</h2>
      <form action="">
        <input type="text" placeholder="What's your email?" />
        <ButtonGroup/>
      </form>
    </div>
    </div>
  )
}