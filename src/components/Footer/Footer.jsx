import './Footer.css'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


const Footer = () => {
  return (
    <Box className='footer'>
    <Typography variant="body2" color="white" align="center" component="footer">
      {'Copyright © '}
      BookSnap{''} by Annabelle Jenny Phuong Yonghee  {''}
        {new Date().getFullYear()}
      {''}
    </Typography>
    </Box>
  );
}

export default Footer;