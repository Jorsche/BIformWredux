const initialState = {
};

const UPDATE_DROPDOWN_FIELDS = "dropdownComponent/UPDATE_DROPDOWN_FIELDS";



const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_DROPDOWN_FIELDS:
        return Object.assign({}, state, {
          dropdownField: action.state
        });
        default:
            return state;

  }
};
export default reducer;

  export const setDropdownField = (dropdownInput) => (dispatch) => {
    dispatch({
      state: dropdownInput,
      type: UPDATE_DROPDOWN_FIELDS
    });
  };
  


