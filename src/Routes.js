import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import PageWithOutlet from "./pages/PageWithOutlet/PageWithOutlet";
import SubPage1 from "./pages/PageWithOutlet/SubPage1/SubPage1";
import SubPage2 from "./pages/PageWithOutlet/SubPage2/SubPage2";

const Routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/pageWithOutlet', element: <PageWithOutlet />, children: [
        { path: 'sub1', element: <SubPage1 /> },
        { path: 'sub2', element: <SubPage2 /> },
    ] },
];

export default Routes;