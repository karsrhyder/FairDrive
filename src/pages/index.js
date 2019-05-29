import Files from "./Files";
import Directory from "./Directory";
import Account from "./AccountRoot";

export default [
  { path: "/", exact: true, component: Account },
  { path: "/f", exact: true, component: Files },
  { path: "/d/:directory", component: Directory }
];
