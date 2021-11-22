import classNames from "classnames";
import './Header.scss';

const Header = ({ menuButtonClicked, isOpen }) => {
    return (
        <header>
            <button className={classNames('menu-button', {'open': isOpen})} onClick={menuButtonClicked}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </header>
    );
};
export default Header;