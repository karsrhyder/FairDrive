import * as t from "./actionTypes";
import { assertAction } from "../utilities";

// Service > user
const initialState = {
  directories: [
    "DappData", 

  "Documents", 
  "Images", 
    "KeyData", 
      "Magnet", 

    "Movies", 

  "Music", 
  "Photos"
]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
