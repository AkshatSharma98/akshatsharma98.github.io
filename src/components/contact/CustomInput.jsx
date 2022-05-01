import React from 'react'
import "./custominput.css"

const CustomInput = ({text, onChange, error, placeHolder}) => {
  const onChangeValue = (e) => {
     var text = e.target.value; 
     onChange(text);
  }

  return (
    <div className="custom-input">
        {console.log(text)}  
        <input type="text"
               value={text}
               onChange={onChangeValue}
               placeholder={placeHolder}/>
        <h2 className="custom-input__error">{error}</h2>
    </div>
  )
}

export default CustomInput