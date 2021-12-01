import About from "./pages/Admin/About/About";
import Admin from "./pages/Admin/Admin";
import Map from "./pages/Admin/Map/Map";
import Login from "./pages/Auth/Login/Login";
import PageWithOutlet from "./pages/Admin/PageWithOutlet/PageWithOutlet";
import SubPage1 from "./pages/Admin/PageWithOutlet/SubPage1/SubPage1";
import SubPage2 from "./pages/Admin/PageWithOutlet/SubPage2/SubPage2";

const Routes = [
    { path: '/', element: <Admin />, children: [
        { path: '/', element: <Map /> },
        { path: '/about', element: <About /> },
        { path: '/pageWithOutlet', element: <PageWithOutlet />, children: [
            { path: 'sub1', element: <SubPage1 /> },
            { path: 'sub2', element: <SubPage2 /> },
        ] },
    ] },
    { path: '/login', element: <Login /> }
];

export default Routes;