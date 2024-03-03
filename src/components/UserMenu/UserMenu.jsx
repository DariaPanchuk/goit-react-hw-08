import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import clsx from 'clsx';
import css from './UserMenu.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth);

    return (
        <div className={css.nav}>
            <NavLink to="/contacts" className={buildLinkClass}>
                Contacts
            </NavLink>
            <p>Welcome, {user}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
        </button>
        </div>
    );
};

export default UserMenu;