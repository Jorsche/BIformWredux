const initialState = {
};

const UPDATE_INPUT_COMPONENT_FIELDS = "inputComponent/UPDATE_FIELDS";
const UPDATE_BI_INPUT_COMPONENT_FIELDS = "inputComponent/UPDATE_BI_FIELDS";


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_INPUT_COMPONENT_FIELDS:
        return Object.assign({}, state, {
          InputField: action.state
        });

        case UPDATE_BI_INPUT_COMPONENT_FIELDS:
          return Object.assign({}, state, {
            [action.state.inputName]: action.state.inputValue
          });

        default:
            return state;

  }
};
export default reducer;



export const setBiInputField = (inputName,inputValue) => (dispatch) => {
  dispatch({
    state: {inputName, inputValue},
    type: UPDATE_BI_INPUT_COMPONENT_FIELDS
  }); 
};

  
  export const setInputField = (input) => (dispatch) => {
    dispatch({
      state: input,
      type: UPDATE_INPUT_COMPONENT_FIELDS
    });
  };
  


