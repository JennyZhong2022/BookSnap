import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as userService from '../../utilities/users-service';
import './NavBar.css';


export default function NavBar({ user, setUser }) {
  const _handleLogOut = () => {
    userService.logOut();
    setUser(null);
  };

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#113946',
      },
      secondary: {
        main: '#ead7bb',
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          {user && (
            <Toolbar>
              <Link to="/" className="link" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginRight: 4 }}
                  color="white"
                >
                  📚 BookSnap
                </Typography>
              </Link>
              <Link to="/mybooks" className="link" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginRight: 4 }}
                  color="white"
                >
                  MyBooks
                </Typography>
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, marginRight: 4 }}
                color="lightBlue"
              >
                Welcome, {user.name}
              </Typography>
              <Link to="/" onClick={_handleLogOut} className="link" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginRight: 4 }}
                  color="white"
                >
                  Log-out
                </Typography>
              </Link>
            </Toolbar>
          )}

          {!user && (
            <Toolbar>
              <Link to="/" className="link" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginRight: 4 }}
                  color="white"
                >
                  📚 BookSnap
                </Typography>
              </Link>
              <Link to="/api/user" className="link" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginRight: 4 }}
                  color="white"
                >
                  Login
                </Typography>
              </Link>
            </Toolbar>
          )}
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
