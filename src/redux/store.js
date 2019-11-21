import {
    createStore, combineReducers, applyMiddleware, compose
  } from "redux";
  import thunk from "redux-thunk";
  import DropDownReducer from "../DropDownComponent/DropdownDucks";
  import InputComponentReducer from "../InputComponent/InputComponentDucks"
  
  const rootReducer = combineReducers({
    inputComponentStore: InputComponentReducer,
    dropdownComponentStore: DropDownReducer
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  