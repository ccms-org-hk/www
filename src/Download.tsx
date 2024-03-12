import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Banner from './Banner';
import DownloadItem from './DownloadItem';
import Footer from './Footer';
import bg from './assets/bg.png';
import Banner10th from './assets/CCMS-10th-anniversary-cover.jpg';

import { MENU_ITEMS } from './config';

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

const bannerContent = {
  id: 1,
  description: '下載',
};

const downloadItems = [
  {
    title: '基督教芥菜種子堂十週年特刊',
    date: '2022年8月',
    // description: '',
    image: `${Banner10th}`,
    link: `${process.env.PUBLIC_URL}/CCMS-10th-anniversary.pdf`,
  },
];

export default function Download() {

  React.useEffect(() => {
    document.title = "基督教芥菜種子堂 | 下載";  
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Home" sections={MENU_ITEMS} />
        <main>
          <Banner post={bannerContent} />

          <Grid container spacing={4} sx={{px:'30px',}}>
            {downloadItems.map((item) => (
              <DownloadItem 
              key={item.title} 
              item={item} />
            ))}
          </Grid>

        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
