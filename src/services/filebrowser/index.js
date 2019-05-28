import saga from "./sagas";
import reducer from "./reducer";

// Service > user

export const mountPoint = "filebrowser";

export default {
  mountPoint,
  saga,
  reducer
};
