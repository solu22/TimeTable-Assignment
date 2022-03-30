const initState = {
  currentLattitude: "",
  currentLongitude: "",
};

const reducers = (state = initState, action) => {
  switch (action.type) {
  case "SET_CURRENT_LOCATION":
    return {
      ...state,
      currentLattitude: action.payload.lat,
      currentLongitude: action.payload.long,
    };

  default:
    return state;
  }
};

export default reducers;
