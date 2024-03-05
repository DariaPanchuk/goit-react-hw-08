import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import clsx from 'clsx';
import css from './UserMenu.module.css';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
        backgroundColor: blue[800],
    },
}));

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth);

    return (
        <div className={css.nav}>
            <p className={css.text}>Welcome, {user.name}</p>
            <NavLink to="/contacts" className={buildLinkClass}>
                Your Contacts
            </NavLink>
            <ColorButton variant="contained" onClick={() => dispatch(logOut())}>
                Logout
            </ColorButton>
        </div>
    );
};

export default UserMenu;