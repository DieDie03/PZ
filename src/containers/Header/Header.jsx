import { Button } from "@mui/material";
import classNames from "classnames";
import { useSelector } from "react-redux";
import './Header.scss';

const Header = ({ menuButtonClicked, isOpen }) => {

    const isLogged = useSelector((state) => state.session.isLogged);

    return (
        <header>
            <button className={classNames('menu-button', {'open': isOpen})} onClick={menuButtonClicked}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            { isLogged && <Button color="info">Logout</Button> }
        </header>
    );
};
export default Header;