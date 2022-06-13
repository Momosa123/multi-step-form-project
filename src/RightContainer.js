import React from "react";

export default function RightContainer({stage}){
  const url =['https://assets.codepen.io/6060109/form-stage-1.png','https://assets.codepen.io/6060109/form-stage-2.png', 'https://assets.codepen.io/6060109/form-stage-3.png', 'https://assets.codepen.io/6060109/form-stage-4.png']

  return(
    <div className="container right-container">
    <img src={`${url[stage]}`} alt="" />
    </div>
  )
}