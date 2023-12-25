import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Banner from './Banner';
// import SimpleMap from './Map';
import Footer from './Footer';
import bg from './assets/bg.png';
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
  description: '聯絡我們',
};

export default function Contact() {

  React.useEffect(() => {
    document.title = "基督教芥菜種子堂 | 聯絡我們";  
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Contact" sections={MENU_ITEMS} />
        <main>
          <Banner post={bannerContent} />

          <Grid container spacing={4} sx={{px:'30px',}}>
            <Grid item xs={12} md={12}>
              <Card variant='outlined' sx={{ height:'500px',border:0,}}>
                {/* <SimpleMap /> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1595.318852425338!2d114.1604458078638!3d22.331990637970765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404074cb1714001%3A0x61a8aa1d6ecfab6d!2z6I-v6IuR!5e0!3m2!1szh-TW!2shk!4v1681720325903!5m2!1szh-TW!2shk" 
                title="Our Location"
                width="100%" 
                height="100%" 
                // style="border:0;" 
                // allowfullscreen="" 
                loading="lazy" 
                // referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{px:'30px', mt:'20px',}}>
            {/* Column 1 */}
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height:'100%', border:0,}}>
                <CardContent sx={{textAlign:'left',}}>
                  <Typography component="h2" variant="h5" sx={{mb:1}}>
                  教牧同工
                  </Typography>

                  <Typography variant="subtitle1" color="text.secondary">
                    教會堂主任　：錢國偉 牧師<br/>
                    義務傳道　　：賀文亮 傳道<br/>
                    義務顧問　　：李潤洪 牧師<br/>
                    義務助理傳道：孔德承 傳道<br/>
                    半職福音幹事：賴康儀 小姐
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height:'100%', border:0,}}>
                <CardContent sx={{textAlign:'left',}}>
                  <Typography component="h2" variant="h5" sx={{mb:1}}>
                    地址
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    深水埗九江街140-142號華苑1/F<br/>（深水埗港鐵站D2出口）
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Column 3 */}
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{ height:'100%', border:0,}}>
                <CardContent sx={{textAlign:'left',}}>
                  <Typography component="h2" variant="h5" sx={{mb:1}}>
                    電郵
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    <Link
                      color="inherit"
                      noWrap
                      variant="subtitle1"
                      href="mailto:ccmustardseed@gmail.com"
                      sx={{textDecoration:'none', color:'#726d5f',}}
                    >
                    ccmustardseed@gmail.com
                    </Link>
                  </Typography>

                  <Typography component="h2" variant="h5" sx={{mb:1, mt:8,}}>
                    電話及傳真
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                  電話：          
                  <Link
                    color="inherit"
                    noWrap
                    variant="subtitle1"
                    href="tel:25914433"
                    sx={{textDecoration:'none', color:'#726d5f',}}
                  >2591 4433</Link>　或　
                  <Link
                    color="inherit"
                    noWrap
                    variant="subtitle1"
                    href="tel:22176372"
                    sx={{textDecoration:'none', color:'#726d5f',}}
                  >2217 6372</Link><br/>
                  傳真：2591 5551
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
