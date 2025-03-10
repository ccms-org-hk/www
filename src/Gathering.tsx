import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import bg from './assets/bg.png';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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
  col1: string,
  col2: string,
  col3: string,
) {
  return { col1, col2, col3};
}

const rows = [
  createData("每月第１週","星期日 10:30am – 12:00pm","聖餐主日"),
  createData("每月第２週","星期日 10:30am – 12:00pm",""),
  createData("每月第３週","星期日 3:00pm – 4:30pm",""),
  createData("每月第４週","星期日 10:30am – 12:00pm",""),
  createData("每月第５週","星期日 10:30am – 12:00pm",""),
];

const bannerContent = {
  id: 1,
  description: '聚會時間',
};

export default function Gathering() {

  React.useEffect(() => {
    document.title = "基督教芥菜種子堂 | 聚會時間";  
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Gathering" sections={MENU_ITEMS} />
        <main>
          <Banner post={bannerContent} />

          <Stack direction='row' sx={{px:'30px',}}>
            <Typography variant='h4'>
            崇拜
            </Typography>
          </Stack>

          <Grid container spacing={4} sx={{pl:'30px',mt:'30px',}}>
            <TableContainer component={Paper} sx={{mx:'30px',}}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>主日崇拜</StyledTableCell>
                    <StyledTableCell>時間</StyledTableCell>
                    <StyledTableCell>備註</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.col1}>
                      {/* <StyledTableCell component="th" scope="row">
                        {row.date}
                      </StyledTableCell> */}
                      <StyledTableCell>{row.col1}</StyledTableCell>
                      <StyledTableCell>{row.col2}</StyledTableCell>
                      <StyledTableCell>{row.col3}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Stack direction='row' sx={{px:'30px', mt:'60px'}}>
            <Typography variant='h4'>
            團契小組
            </Typography>
          </Stack>

          <Grid container spacing={4} sx={{pl:'30px',mt:'30px'}}>
            <TableContainer component={Paper} sx={{mx:'30px', mb:'60px'}}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>對象</StyledTableCell>
                    <StyledTableCell>團契／小組名稱</StyledTableCell>
                    <StyledTableCell>時間</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow key={1}>
                    <StyledTableCell>成人</StyledTableCell>
                    <StyledTableCell>成人組</StyledTableCell>
                    <StyledTableCell>每月第2及第4週之星期六，6:00pm - 8:00pm</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={2}>
                    <StyledTableCell>有孩家庭</StyledTableCell>
                    <StyledTableCell>有孩家庭</StyledTableCell>
                    <StyledTableCell>每2個月1次，日期及時間不定</StyledTableCell>
                  </StyledTableRow>
                  {/* <StyledTableRow key={1}>
                    <StyledTableCell>退休男士</StyledTableCell>
                    <StyledTableCell>男士小組</StyledTableCell>
                    <StyledTableCell>每月第4週之星期四，2:00pm - 3:15pm</StyledTableCell>
                  </StyledTableRow> */}
                  <StyledTableRow key={1}>
                    <StyledTableCell>職青</StyledTableCell>
                    <StyledTableCell>陽光芥菜家族</StyledTableCell>
                    <StyledTableCell>逢星期六，2:00pm – 4:30pm</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={2}>
                    <StyledTableCell>初職</StyledTableCell>
                    <StyledTableCell>山頂兒女</StyledTableCell>
                    <StyledTableCell>每月第3週之星期四，7:00pm - 8:30pm</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={1}>
                    <StyledTableCell>大專及初職</StyledTableCell>
                    <StyledTableCell>星河同行</StyledTableCell>
                    <StyledTableCell>逢星期三，8:15pm - 9:45pm</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={2}>
                    <StyledTableCell>高小及初中</StyledTableCell>
                    <StyledTableCell>少年團契</StyledTableCell>
                    <StyledTableCell>逢星期日，12:45pm - 2:15pm</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={1}>
                    <StyledTableCell>小學生</StyledTableCell>
                    <StyledTableCell>我長大了</StyledTableCell>
                    <StyledTableCell>逢星期六，10:15am - 12:00pm</StyledTableCell>
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
