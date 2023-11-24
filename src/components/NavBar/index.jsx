import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

const NavBar = ({user, setUser}) => {
    const _handleLogOut = () => {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/books">
                Books
            </Link>
           
            <span>
                Welcome, { user.name }
            </span>
            <Link to="" onClick={ _handleLogOut }>
                Log Out
            </Link>
        </nav>
    );
};

export default NavBar;