import Files from "./Files/Files";
import Directory from "./Files/Directory";
import Account from "./Account/AccountRoot";
import Register from "./Account/RegisterRoot";
import Wallet from "./Account/WalletRoot";

export default [
  { path: "/", exact: true, component: Account },
  { path: "/f", exact: true, component: Files },
  { path: "/r", exact: true, component: Register },
  { path: "/w", exact: true, component: Wallet },
  { path: "/d/:dirId", component: Files },
  { path: "/cb/:putIo", component: Account }
];
