import Typography from '@mui/material/Typography';

const Footer = () => {
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

export default Footer;