import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
import { LEGENDS, MENU_ITEMS } from './config';

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
    paddingLeft: '6px',
    paddingRight: '6px',
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

const bannerContent = {
  id: 1,
  title: '年題',
  description: '堅勇飛躍　心靈壯固',
};

export default function Plan() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters sx={{backgroundColor:'#ffffff', mt:'25px', mb:'25px', pt:'25px', borderRadius:1, }}>
        <Header title="Plan" sections={MENU_ITEMS} />
        <main>
          <Banner post={bannerContent} />

          <Stack direction='row' sx={{px:'30px',}}>
            <Typography variant='h4'>
              2023年 行事曆
            </Typography>
          </Stack>

          <Stack direction='row' justifyContent='flex-end' sx={{px:'30px',}}>
              <List component={Stack} direction='row' spacing={2} width='560px' sx={{overflowX: 'scroll'}}>
                {LEGENDS.map((legend) => (
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
            </Stack>

            <Stack direction='row' sx={{px:'30px',}}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="customized table" sx={{ minWidth:'650', }} >
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
                        <StyledTableCell rowSpan={12} sx={{maxWidth:'100px',}}><Event id={27} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={1} /><Event id={2} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell rowSpan={12} sx={{maxWidth:'100px',}}><Event id={28} /><Event id={29} /><Event id={30} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">2月</StyledTableCell>
                        <StyledTableCell><Event id={3} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={2} /><Event id={4} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">3月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={5} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={6} /></StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">4月</StyledTableCell>
                        <StyledTableCell><Event id={7} /><Event id={8} /></StyledTableCell>
                        <StyledTableCell><Event id={9} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={10} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={11} /><Event id={12} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">5月</StyledTableCell>
                        <StyledTableCell><Event id={13} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={2} /><Event id={14} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">6月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={15} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">7月</StyledTableCell>
                        <StyledTableCell><Event id={16} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={17} /><Event id={18} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">8月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={18} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">9月</StyledTableCell>
                        <StyledTableCell><Event id={19} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={20} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={6} /></StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">10月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={21} /></StyledTableCell>
                        <StyledTableCell><Event id={22} /></StyledTableCell>
                        <StyledTableCell><Event id={2} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">11月</StyledTableCell>
                        <StyledTableCell><Event id={23} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={2} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={24} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">12月</StyledTableCell>
                        <StyledTableCell><Event id={25} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={26} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>

        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
