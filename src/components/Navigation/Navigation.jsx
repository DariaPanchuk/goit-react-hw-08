import { NavLink } from 'react-router-dom';
import { selectAuth } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
    const { isLoggedIn } = selectAuth;

    return (
        <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass}>
                Home
            </NavLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
    );
};

export default Navigation;