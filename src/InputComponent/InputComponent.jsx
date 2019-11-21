import React from 'react';

const InputComponent =({name,inputCateogry,setFunc})=>{

  const onChangeHandler=(evt)=>{
console.log("newValue",evt.target.value);
setFunc(evt.target.value);
  }
return(
    <form >
    <label>
      {inputCateogry}
      <input name={name} type="text" onChange={onChangeHandler} />
    </label>
  </form>
);}




export default InputComponent;
