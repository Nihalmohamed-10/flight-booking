import React from 'react'

const  Button= ({btnClass, btnContent, btnFunction}) =>{
  return (
    <button className={btnClass} onClick={btnFunction}>{btnContent}</button>
  )
}

export default Button