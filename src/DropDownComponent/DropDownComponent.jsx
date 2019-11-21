import React from 'react'
import { connect } from "react-redux";
import { Dropdown } from 'semantic-ui-react'
import {setDropdownField} from '../DropDownComponent/DropdownDucks'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
  
const DropdownExampleSelection = ({setDropdownValue}) => {
  
  const countryOptions = [
    {
      key: 'Brunei',
      text: 'Brunei',
      value: 'Brunei',
    },
    {
      key: 'Cambodia',
      text: 'Cambodia',
      value: 'Cambodia',
    },
    {
      key: 'Indonesia',
      text: 'Indonesia',
      value: 'Indonesia',
    },
    {
      key: 'Laos',
      text: 'Laos',
      value: 'Laos',
    },
    {
      key: 'Malaysia',
      text: 'Malaysia',
      value: 'Malaysia',
    },
    {
      key: 'Myanmar',
      text: 'Myanmar',
      value: 'Myanmar',
    },
  
    {
      key: 'Singapore',
      text: 'Singapore',
      value: 'Singapore',
    },
  
    {
      key: 'Philippines',
      text: 'Philippines',
      value: 'Philippines',
    },
  ]
  
  const onChangeHandler=(e,data)=>{
    console.log("ndropdown",data.value);
    setDropdownValue(data.value);
    console.log("duck",setDropdownValue(data.value));
      }

  return(
   <Dropdown
    placeholder='Select Country'
    fluid
    selection
    options={countryOptions}
    onChange={onChangeHandler}
  />
);
 }
const mapDispatchToProps={
  setDropdownValue: setDropdownField
};

export default connect(null, mapDispatchToProps)(DropdownExampleSelection);

