import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
    const { isLoggedIn } = useSelector(selectAuth);

    return (
    <nav>
        <div className={css.header}>
            <div className={css.headerContainer}>
                <input className={css.checkbox} type="checkbox" name="" id="" />
                <div className={css.hamburgerLines}>
                <span className={css.line1}></span>
                <span className={css.line2}></span>
                <span className={css.line3}></span>
                </div>  
            <div className={css.logo}>
                <h1>Navbar</h1>
            </div>
            <div className={css.menuItems}>
                <NavLink to="/" className={buildLinkClass}>
                    Home
                </NavLink>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
            </div>
        </div>
    </nav>
    );
};

export default Navigation;