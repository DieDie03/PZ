// A Tester

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PrivateRoute = ({children}) => {
    const isLogged = useSelector(state => state.session.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogged) {
            navigate('/login');
        }
    }, [isLogged]);

    return children;
}

export default PrivateRoute;