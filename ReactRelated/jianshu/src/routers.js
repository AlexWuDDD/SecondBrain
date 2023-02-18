import {useRoutes} from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(()=>import("./pages/home"));
const Detail = loadable(()=> import("./pages/detail"));
const Login = loadable(()=>import("./pages/login"));
const Write = loadable(()=>import("./pages/write"));

export default function Router() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/detail/:id", element: <Detail /> },
    { path: "/login", element: <Login /> },
    { path: "/write", element: <Write /> },
  ]);

  return element;
}