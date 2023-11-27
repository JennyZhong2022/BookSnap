import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



 // set the theme of style.
 const defaultTheme = createTheme();

 export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
  });

  const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        error: ''
      });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const { name, email, password } = formData;
          const user = await signUp({ name, email, password });
          setUser(user);
      } catch (err) {
          console.error(err);
          setFormData({ ...formData, error: 'Sign up failed - try again' });
      }
  };

  const disable = formData.password !== formData.confirm;

  return (
 <ThemeProvider theme={defaultTheme}>
 <Container component="main" maxWidth="xs">
   <CssBaseline />
   <Box
     sx={{
       marginTop: 8,
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
     }}
   >
     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
       <LockOutlinedIcon />
     </Avatar>
     <Typography component="h1" variant="h5">
       Sign up
     </Typography>
     <Box component="form" utoComplete="off" onSubmit={handleSubmit} sx={{ mt: 3 }}>
       <Grid container spacing={2}>
         <Grid item xs={12} sm={12}>
             <TextField
             value={formData.name}
             onChange={handleChange}
             autoComplete="name"
             name="name"
             required
             fullWidth
             id="Name"
             label="Name"
             autoFocus
           />
         </Grid>
         <Grid item xs={12}>
             <TextField
             value={formData.email}
             onChange={handleChange}
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
           />
         </Grid>
         <Grid item xs={12}>
             <TextField
            value={formData.password}
            onChange={handleChange}
             required
             fullWidth
             name="password"
             label="Password"
             type="password"
             id="password"
             autoComplete="new-password"
           />
           </Grid>
           
           <Grid item xs={12}>
             <TextField
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
             required
             fullWidth
             label="Confirm Password"
             type="password"
             id="confirm"
             autoComplete="new-password"
           />
         </Grid>

        
       </Grid>
         <Button
        disabled={disable}
         type="submit"
         fullWidth
         variant="contained"
         sx={{ mt: 3, mb: 2 }}
       >
         Sign Up
       </Button>
       
     </Box>
   </Box>

 </Container>
</ThemeProvider>
)}
