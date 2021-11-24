import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { start } from "../../../store/sessionSlice";

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const login = () => {
        dispatch(start('test'));
        navigate('/');
    }

    return (
        <>
            <Button onClick={ login } color="primary">Se connecter</Button>
        </>
    );
};

export default Login;