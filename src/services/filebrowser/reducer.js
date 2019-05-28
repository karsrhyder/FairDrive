import * as t from "./actionTypes";
import { assertAction } from "../utilities";

// Service > user
const initialState = {
  directories: [
  "Documents", 
  "Images", 
  "Music", 
  "Movies", 
  "DappData", 
  "KeyData", 
  "Magnet", 
  "Photos"
]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
