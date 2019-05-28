import Files from "./Files";
import Directory from "./Directory";
import Account from "./AccountRoot";

export default [
  { path: "/", exact: true, component: Files },
  { path: "/account", exact: true, component: Account },
  { path: "/d/:directory", component: Directory }
];
