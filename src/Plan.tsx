import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Banner from './Banner';
import Event from './Event';
import Footer from './Footer';
import bg from './assets/bg.png';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsIcon from '@mui/icons-material/Groups';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
// import WorkIcon from '@mui/icons-material/Work';

const sections = [
  { title: '主頁', url: './home' },
  { title: '聚會時間', url: '#' },
  { title: '崇拜講道', url: './sermon' },
  { title: '行事曆', url: './plan' },
  { title: '聯絡我們', url: './contact' },
];

const mainBanner = {
  title: '基督教芥菜種子堂',
  description: '十週年特刊',
  image: 'banner-10th.png',
  imageText: 'main image description',
  linkText: '歡迎下載',
};

const legends = [
  { type:'A', name: '全體', color: '#9933ff' },
  { type:'I', name: '自由/有興趣', color: '#D9A98B' },
  { type:'Y', name: '年輕人', color: '#33cc33' },
  { type:'C', name:'兒童/婦女', color: '#F63A2B' },
  { type:'F', name: '家庭', color: '#ff99ff' },
  { type:'S' ,name: '個人/同工', color: '#007F66' },
];

const data = [
  {id:1, type:'I', title:'新年探訪', desc:'',},
  {id:2, type:'C', title:'婦女組', desc:'',},
  {id:3, type:'A', title:'預苦期開始', desc:'(每週畫中默想)',},
  {id:4, type:'C', title:'婦女組', desc:'(甜品製作)',},
  {id:5, type:'Y', title:'陽光芥菜家族', desc:'靜修營',},
  {id:6, type:'S', title:'圖書介紹', desc:'',},
  {id:7, type:'A', title:'受難節聚會', desc:'',},
  {id:8, type:'A', title:'復活節崇拜', desc:'',},
  {id:9, type:'Y', title:'星河同行', desc:'福音營',},
  {id:10, type:'C', title:'音樂親子活動', desc:'(23/4)',},
  {id:11, type:'I', title:'聖經神學一', desc:'',},
  {id:12, type:'I', title:'新約神學', desc:'',},
  {id:13, type:'A', title:'青年主日', desc:'(14/5)',},
  {id:14, type:'I', title:'端午探訪', desc:'',},
  {id:15, type:'I', title:'男士組', desc:'',},
  {id:16, type:'A', title:'十一週年堂慶', desc:'感恩崇拜',},
  {id:17, type:'C', title:'堂慶親子活動', desc:'',},
  {id:18, type:'C', title:'兒童興趣小組', desc:'',},
  {id:19, type:'A', title:'社區主日', desc:'(10/9)',},
  {id:20, type:'I', title:'中秋探訪', desc:'',},
  {id:21, type:'A', title:'退修會', desc:'(三日兩夜)',},
  {id:22, type:'Y', title:'高中團契', desc:'',},
  {id:23, type:'A', title:'將臨期開始', desc:'',},
  {id:24, type:'I', title:'實踐神學二', desc:'',},
  {id:25, type:'A', title:'聖誕節期聚會', desc:'',},
  {id:26, type:'A', title:'冬季大旅行', desc:'',},
  {id:27, type:'F', title:'每月最少1次探訪/家庭聚會', desc:'(以非信徒家人或少來聚會者為主)',},
  {id:28, type:'C', title:'招慕人手', desc:'協助週日兒童主日學',},
  {id:29, type:'C', title:'每週末早上', desc:'「我長大了」',},
  {id:30, type:'C', title:'每主日下午', desc:'「少年團契」',},
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#a49f8e',
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
}));

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

export default function Plan() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Sermon" sections={sections} />
        <main>
          <Banner post={mainBanner} />

          <Grid container spacing={4} direction="row" sx={{pl:'30px',}}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4" color="inherit">
              年題：堅勇飛躍　心靈壯固
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} sx={{border:'0px solid red',}} textAlign='right'>
              <List component={Stack} direction="row" spacing={2} width='560px' sx={{border:'0px solid blue',}}>
                {legends.map((legend) => (
                  <ListItem disablePadding>
                    <ListItemIcon sx={{minWidth:'22px',}}>
                        {legend.type === 'A' && 
                          <GroupsIcon fontSize='small' htmlColor={legend.color} />
                        }
                        {legend.type === 'I' && 
                          <FreeBreakfastIcon fontSize='small' htmlColor={legend.color} />
                        }
                        {legend.type === 'Y' && 
                          <LocalFloristIcon fontSize='small' htmlColor={legend.color} />
                        }
                        {legend.type === 'C' && 
                          <FavoriteIcon fontSize='small' htmlColor={legend.color} />
                        }
                        {legend.type === 'F' && 
                          <HomeIcon fontSize='small' htmlColor={legend.color} />
                        }
                        {legend.type === 'S' && 
                          <PersonIcon fontSize='small' htmlColor={legend.color} />
                        }
                    </ListItemIcon>
                    <ListItemText 
                      primary={legend.name}
                      primaryTypographyProps={{ 
                        variant: 'subtitle1', 
                        style: {
                            whiteSpace: 'nowrap',
                        }
                    }} 
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <TableContainer component={Paper} sx={{mx:'30px',}}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell rowSpan={2}>&nbsp;</StyledTableCell>
                    <StyledTableCell align='center'>聽神的道</StyledTableCell>
                    <StyledTableCell align='center'>領受神的道</StyledTableCell>
                    <StyledTableCell align='center' colSpan={4}>傳講神的道</StyledTableCell>
                    <StyledTableCell align='center' rowSpan={2}>兒童</StyledTableCell>
                    <StyledTableCell align='center' rowSpan={2}>培訓</StyledTableCell>
                    <StyledTableCell align='center' rowSpan={2}>其他</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell align='center'>崇拜聚會</StyledTableCell>
                    <StyledTableCell align='center'>小組聚會</StyledTableCell>
                    <StyledTableCell align='center'>家庭</StyledTableCell>
                    <StyledTableCell align='center'>學校</StyledTableCell>
                    <StyledTableCell align='center'>社區</StyledTableCell>
                    <StyledTableCell align='center'>宣教</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">1月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">2月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">3月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">4月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">5月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">6月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">7月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">8月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">9月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">10月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">11月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">12月</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
