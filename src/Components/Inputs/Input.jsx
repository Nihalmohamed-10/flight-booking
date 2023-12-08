import React from 'react'

const  Inputs= ({inputType, inputPlaceHolder,inputValue, inputId, inputOnchange}) =>{
  return (
    <input type={inputType} placeholder={inputPlaceHolder} id={inputId} value={inputValue} onChange={inputOnchange} />
  )
}

export default Inputs