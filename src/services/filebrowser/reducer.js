import * as t from "./actionTypes";


// Service > Directories

console.log("reducer")

export default function (state = [], action) {
  switch (action.type) {
    case t.UPDATE_DIRECTORY_LIST:
      return action.data;
    default:
      return state;
  }
}
