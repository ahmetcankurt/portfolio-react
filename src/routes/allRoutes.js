
import HomePage from "../components/index";
import CoinSweeper from "../components/game/index";
import YapayZeka from "../components/artificialIntelligence/index";

const publicRoutes = [
  { path: "/", exact: true, component: <HomePage /> },
  { path: "/coin-sweeper", component:   <CoinSweeper /> },
  { path: "/yapay-zeka", component:   <YapayZeka /> },
  { path: "*", component:   <div>404</div> },
]; 


export {  publicRoutes };