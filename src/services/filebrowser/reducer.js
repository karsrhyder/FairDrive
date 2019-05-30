import * as t from "./actionTypes";
import { assertAction } from "../utilities";

// Service > Directories
const initialState = {
  directories: [
    { name: "DappData", weight: 2.3 },
    { name: "Documents", weight: 45.1 },
    { name: "Images", weight: 1.21 },
    { name: "Music", weight: 120.3 },
    { name: "Movies", weight: 1.3 },
    { name: "KeyData", weight: 3.12 },
    { name: "DappData", weight: 2.3 },
    { name: "Documents", weight: 45.1 },
    { name: "Images", weight: 1.21 },
    { name: "Music", weight: 120.3 },
    { name: "Movies", weight: 1.3 },
    { name: "KeyData", weight: 3.12 }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
