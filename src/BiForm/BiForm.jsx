import React from 'react';
import InputComponent from '../InputComponent/InputComponent'; 
import DropDownComponent from '../DropDownComponent/DropDownComponent';
import { connect } from "react-redux";
import {setBiInputField} from "../InputComponent/InputComponentDucks";

const BiForm=({setBiInput})=>{
    
    const partial=(name)=>{
        return (value) => setBiInput(name,value);
    };


return(
<div>
<DropDownComponent/>
<InputComponent setFunc={partial("brand")} name={"brand"}  inputCateogry={"Brand:"} />
<InputComponent setFunc={partial("material")} name={"material"} inputCateogry={"Material:"} />
<InputComponent setFunc={partial("certificate")}name={"certificate"} inputCateogry={"Certificate:"} />
</div>
);
}

const mapDispatchToProps={
    setBiInput: setBiInputField
  };
  

export default connect(null, mapDispatchToProps)(BiForm);
