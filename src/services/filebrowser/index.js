import saga from "./sagas";
import reducer from "./reducer";

// Service > user
export const mountPoint = "directoryList";

export default {
  mountPoint,
  saga,
  reducer
};
