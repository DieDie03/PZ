import { useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import classNames from "classnames";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Nav.scss';

const NavItem = ({to, title, onClick}) => 
    <li><NavLink to={to} onClick={onClick}>{title}</NavLink></li>;

const NavItemMenu = ({to, title, children, onClick}) => {
    const match = useMatch(to);

    const [isOpen, setIsOpen] = useState(match);

    return <li>
        <div className={classNames('has-sub-menu',  {'active': match})} 
             onClick={() => setIsOpen(isOpen => !isOpen)}>
            <span>{title}<ArrowDropDownIcon /></span>
            <ul className={classNames('sub-menu', { 'open' : isOpen })}>
                { children.map((child, i) => 
                    <NavItem key={i} { ...child } onClick={onClick} />
                ) }
            </ul>
        </div>
    </li>;
}

const Nav = ({navLinkClicked}) => {

    const [menuItems, setMenuItems] = useState([
        { title: 'Accueil', to: '/' },
        { title: 'SubMenu', to: '/pageWithOutlet/*', children: [
            { title: 'Sub 1', to: '/pageWithOutlet/sub1' },
            { title: 'Sub 2', to: '/pageWithOutlet/sub2' },
        ] },
        { title: 'A propos', to: '/about' },
    ]);

    return (
        <nav >
            <ul>
                { menuItems.map((menu, i) => 
                    menu.children 
                        ? <NavItemMenu key={i} {...menu} onClick={navLinkClicked} /> 
                        : <NavItem key={i} {...menu} onClick={navLinkClicked} />
                ) }
            </ul>
        </nav>
    );
};
export default Nav;