import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import bg from './assets/bg.png';
import { MENU_ITEMS } from './config';
import { Typography } from '@mui/material';


// const theme = createTheme();
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E0E0E0',
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'repeat',
          // "& h1": {
          //   color: "black"
          // }
        }
      }
    }
  }
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Home" sections={MENU_ITEMS} />
        <main>
          <Stack direction='row' sx={{px:'30px',}}>
            <Typography variant='h3'>
            Oops! 這個頁面已經不存在了。
            </Typography>
          </Stack>
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
