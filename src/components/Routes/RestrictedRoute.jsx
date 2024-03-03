import { Navigate } from 'react-router-dom';
import { selectAuth } from '../../redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = selectAuth;

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;