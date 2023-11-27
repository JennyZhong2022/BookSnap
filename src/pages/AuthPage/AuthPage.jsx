import { useState } from 'react';
import Grid from '@mui/material/Grid'; // Import Grid if not already imported
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Container from '@mui/material/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center" >
       
        <p color="inherit" >
        {'Copyright © '}
          Book Snap{' '}
          {new Date().getFullYear()}
        {'.'}
        </p>
        
      </Typography>
    );
  }

const AuthPage = ({ setUser }) => {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <Container component="main" maxWidth="xs">
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
            {showSignUp ? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="#" onClick={() => setShowSignUp(!showSignUp)} variant="body2">
                        {showSignUp ? 'Already have an account? Sign in' : 'No Account? Sign Up'}
                    </Link>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
            </Box>
            </Container>
    );
}

export default AuthPage;
