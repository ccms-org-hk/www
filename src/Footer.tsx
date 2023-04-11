import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'© '}
      {new Date().getFullYear()}
      {' '}
      <Link color="inherit" href="https://ccms.org.hk/" sx={{textDecoration:'none',}}>
      基督教芥菜種子堂
      </Link>
      {' 版權所有'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ 
      borderRadius:1,
      borderTopLeftRadius:1,          
      borderTopRightRadius:1,  
      bgcolor: '#968f7b',
      color: '#ffffff',
      py: 2,
      mt: '60px',
    }}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Box>
  );
}
