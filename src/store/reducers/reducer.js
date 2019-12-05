const initialState = {
    cityList: [],
    errorMessage: "",
    selected: []
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_CITY":
            newState.cityList = [...newState.cityList, action.payload]
            break;
        case "REMOVE_CITY":
            newState.cityList = action.payload
            break;
        default:
            return state;
    }
    return newState
};

export default reducer;