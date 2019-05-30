import Files from "./Files";
import Directory from "./Directory";
import Account from "./AccountRoot";
import Register from "./RegisterRoot";
import Wallet from "./WalletRoot";

export default [
  { path: "/", exact: true, component: Account },
  { path: "/f", exact: true, component: Files },
  { path: "/r", exact: true, component: Register },
  { path: "/w", exact: true, component: Wallet },
  { path: "/d/:directory", component: Directory }
];
