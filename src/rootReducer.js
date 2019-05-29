import { combineReducers } from "redux";
import services from "./services";

const initialState = {
  directories: [
    { name: "DappData", weight: 2.3 },
    { name: "Documents", weight: 45.1 },
    { name: "Images", weight: 1.21 },
    { name: "Music", weight: 120.3 },
    { name: "Movies", weight: 1.3 },
    { name: "KeyData", weight: 3.12 }
  ]
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DIRECTORY":
      return {
        ...state,
        directories: [...state.directories, action.directories]
      };

    default:
      return state;
  }
};

const servicesReducers = {};
Object.values(services).forEach(({ mountPoint, reducer }) => {
  servicesReducers[mountPoint] = reducer;
});

export default combineReducers({
  ...servicesReducers,
  globalReducer
});
