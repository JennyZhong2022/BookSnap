import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

const NavBar = ({ user, setUser }) => {
  const _handleLogOut = () => {
    userService.logOut();
    setUser(null);
  };

  return (
    <nav>
      {user && (
        <span>
          <Link to="/">Home</Link> {'   '}
          <Link to="/mybooks">MyBooks</Link> 
          <span>Welcome, {user.name}</span>
          <Link to="/" onClick={_handleLogOut}>
          Log-out
        </Link>
        </span>
      )}

      
      {!user && (
        <>
        <Link to="/">Home</Link>
        <Link to="/api/user">Login</Link>
        
        </>
      ) }
    </nav>
  );
};

export default NavBar;
