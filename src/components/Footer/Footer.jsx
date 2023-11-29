import Typography from '@mui/material/Typography';


const Footer = () => {
  return (
    <div className='footer'>
    <Typography variant="body2" color="white" align="center" component="footer">
      {'Copyright © '}
      BookSnap{''} by Annabelle Jenny Phuong Yonghee  {''}
        {new Date().getFullYear()}
      {''}
    </Typography>
    </div>
  );
}

export default Footer;