import Admin from "./pages/Admin/Admin";
import Home from "./pages/Admin/Home/Home";
import Demo from "./pages/Demo/Demo";
import Login from "./pages/Auth/Login/Login";
import PageWithOutlet from "./pages/Admin/PageWithOutlet/PageWithOutlet";
import SubPage1 from "./pages/Admin/PageWithOutlet/SubPage1/SubPage1";
import SubPage2 from "./pages/Admin/PageWithOutlet/SubPage2/SubPage2";
import Agenda from "./pages/Admin/Agenda/Agenda";

const Routes = [
    { path: '/', element: <Admin />, children: [
        { path: '/', element: <Home /> },
        { path: '/agenda', element: <Agenda /> },
        { path: '/demo', element: <Demo /> },
        { path: '/pageWithOutlet', element: <PageWithOutlet />, children: [
            { path: 'sub1', element: <SubPage1 /> },
            { path: 'sub2', element: <SubPage2 /> },
        ] },
    ] },
    { path: '/login', element: <Login /> }
];

export default Routes;