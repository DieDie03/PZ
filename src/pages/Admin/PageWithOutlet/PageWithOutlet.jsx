import { Outlet } from "react-router";

const PageWithOutlet = () => {
    return (
        <>
            <h1>Page avec sous routing</h1>
            <Outlet />
        </>
    );
};
export default PageWithOutlet;