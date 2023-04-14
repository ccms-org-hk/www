import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Banner from './Banner';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import bg from './assets/bg.png';
import ccmsName from './assets/mustard-seed.jpg';
import ccmsMission from './assets/spirituality-religion-hands-folded-prayer-holy-bible-church-concept-faith.jpg';
import ccmsModel from './assets/four-unrecognizable-people-sitting-around-table-holding-each-other-s-hands-middle.jpg';
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
  id: 0,
  title: '基督教芥菜種子堂',
  description: '十週年特刊',
  image: 'banner-10th.png',
  imageText: '基督教芥菜種子堂十週年特刊',
  linkText: '歡迎下載',
};

const featuredPosts = [
  {
    title: '名稱由來',
    date: '',
    description:
      '源於《馬太福音十三31-32》的啟發。耶穌以「芥菜種」比作「天國」，道出了「天國」由小而大的成長法則；另外，「種子」在聖經中又比作「神的道」這正突顯我們從神所領受的使命。基督教芥菜種子堂之命名，也就代表我們願意靠著神的恩典，致力活出使命，並盼望成為傳揚及擴展天國的教會群體。',
    image: `${ccmsName}`,
    imageLabel: 'Image Text',
  },
  {
    title: '教會使命',
    date: '',
    description:
      '我們是一間聽神的道、領受神的道、傳講神的道的教會！（參考：帖前 2:13）我們的期望，就是要塑造弟兄姊妹成為一個聽道而行道的基督徒，從認識、領受、以至傳講神的道為生命追求的方向，作一個知行合一的事奉者。（參考：太 7:24）',
    image: `${ccmsMission}`,
    imageLabel: 'Image Text',
  },
  {
    title: '教會理念',
    date: '',
    description:
      '本教會採納了艾力•蓋格《簡約教會》一書的理念來制定教會的事工。其重點在於設計一個簡單的培育門徒流程，它必須清晰，必須推動人們邁向成熟，必須與教會上下完全結合，並且必須清除周圍阻塞它的雜物。',
    image: `${ccmsModel}`,
    imageLabel: 'Image Text',
  },
];

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Home" sections={MENU_ITEMS} />
        <main>
          <Banner post={bannerContent} />

          <Grid container spacing={4} sx={{px:'30px',}}>
            {featuredPosts.map((post) => (
              <FeaturedPost 
              // key={post.title} 
              post={post} />
            ))}
          </Grid>

        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
