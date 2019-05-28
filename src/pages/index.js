import Files from "./Files";
import Directory from "./Directory";

export default [
  { path: "/", exact: true, component: Files },
  { path: "/:directory", component: Directory }
];
