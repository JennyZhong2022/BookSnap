import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Footer = () => {
  return (
    <div className='footer'>
    <Typography variant="body2" color="white" align="center" component="footer">
      {'Copyright © '}
        Book Snap{' '}
        {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  );
}

export default Footer;