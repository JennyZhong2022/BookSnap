import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" component="footer">
      {'Copyright © '}
        Book Snap{' '}
        {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;