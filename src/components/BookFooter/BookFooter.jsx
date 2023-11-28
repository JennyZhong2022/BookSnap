import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Footer = () => {
  return (
    <Box  sx={{ mt: 3 }}>
    <Typography variant="body2" color="text.secondary" align="center" component="footer">
    
        BookSnap  {'©'} by Annabelle Jenny Phuong Yonghee {' '}
        {new Date().getFullYear()}
      {'.'}
      </Typography>
    </Box>
  );
}

export default Footer;