import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Banner from './Banner';
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
import { MENU_ITEMS } from './config';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#d9edf7',
    // color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
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

function createData(
  date: string,
  topic: string,
  speaker: string,
  bible: string,
) {
  return { date, topic, speaker, bible};
}

const rows = [
  createData("2023-06-04","即或不然的忠貞","李潤洪 牧師","但 3:8-18"),
  createData("2023-05-28","逆境中","賀文亮 傳道","徒 4:9-21; 26-31"),
  createData("2023-05-21","被擄、流散、安身","麥子強 傳道","結 1:1-28"),
  createData("2023-05-14","你看我們！","孔德承 傳道","徒 3:11-26"),
  createData("2023-05-07","聖靈在今天的工作","錢國偉 牧師","徒 2:1-13"),
  createData("2023-04-30","第十三人","孔德承 傳道","徒 1:12-26"),
  createData("2023-04-23","重價的恩典","何歷同 先生","羅 6:1-14"),
  createData("2023-04-16","求聖靈充滿","錢國偉 牧師","徒 1:1-8"),
  createData("2023-04-09","復活","賀文亮 傳道","太 19:16-26"),
  createData("2023-04-02","當覺得「唔係好妥」時","錢國偉 牧師","可 14:32-42"),
  createData("2023-03-26","你們中間不可這樣","錢國偉 牧師","太 20:17-28"),
  createData("2023-03-19","神聖的碰觸","麥漢勳 牧師","可 1:40-45"),
  createData("2023-03-12","困苦中做人","孔德承 傳道","創 39:1-23"),
  createData("2023-03-05","活出屬神的生命","李潤洪 牧師","約 3:1-17"),
  createData("2023-02-26","預苦期","賀文亮 傳道","創 1:20-31, 3:17-19"),
  createData("2023-02-19","最美好的福氣","余學深 牧師","可 6:30-44"),
  createData("2023-02-12","天路微塵","錢國偉 牧師","王上 18:1-18"),
  createData("2023-02-05","Stand Firm for Freedom (為自由站穩)","朱幼成 牧師","加 5:1-14"),
  createData("2023-01-29","門徒的多重宇宙","孔德承 傳道","太 17:1-8"),
  createData("2023-01-22","新的國度","賀文亮 傳道","約 19:4-16"),
  createData("2023-01-15","亞伯拉罕伸張公義","周健文 先生","創 18:16-32"),
  createData("2023-01-08","放棄的理由有千百種；堅持的原因卻只需要一個…","孔德承 傳道","太 3:13-17"),
  createData("2023-01-01","耶穌是君王，常與我們同在","李潤洪 牧師","太 2:1-15"),
];

const bannerContent = {
  id: 1,
  description: '崇拜講道',
};

export default function Sermon() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Sermon" sections={MENU_ITEMS} />
        <main>
          <Banner post={bannerContent} />

          <Grid container spacing={4} sx={{pl:'30px',mt:'30px',}}>
            <TableContainer component={Paper} sx={{mx:'30px',}}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>日期</StyledTableCell>
                    <StyledTableCell>講題</StyledTableCell>
                    <StyledTableCell>講員</StyledTableCell>
                    <StyledTableCell>經文</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.date}>
                      <StyledTableCell component="th" scope="row">
                        {row.date}
                      </StyledTableCell>
                      <StyledTableCell>{row.topic}</StyledTableCell>
                      <StyledTableCell>{row.speaker}</StyledTableCell>
                      <StyledTableCell>{row.bible}</StyledTableCell>
                    </StyledTableRow>
                  ))}
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