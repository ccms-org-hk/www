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
  createData("2026-02-08","重整旗鼓 - 愛神愛人","錢國偉 牧師","約 2:13-25"),
  createData("2026-02-01","新生命的三重認證","錢國偉 牧師","約 2:1-11"),
  createData("2026-01-25","奇特的洗禮","黃曜恆 先生","太 3:13-17"),
  createData("2026-01-18","誰是主角","賀文亮 傳道","太 2:1-12"),
  createData("2026-01-04","悔改信耶穌後的人生","李潤洪 牧師","腓 2:5-9; 羅 12:1-2"),
  createData("2025-12-28","大難不死的男孩","黃曜恆 先生","太 2:13-23"),
  createData("2025-12-21","以馬內利","余學深 牧師","太 1:18-25"),
  createData("2025-12-14","黑暗中的喜樂","趙敏華 女士","路 1:39-45"),
  createData("2025-12-07","黑暗中撒播平安的光芒","錢國偉 牧師","賽 9:6; 路 2:11-14"),
  createData("2025-11-30","主裡盼望","賀文亮 傳道","路 21:25-28,34-36"),
  createData("2025-11-23","今生所盼","黃曜恆 先生","耶 23:1-8"), 
  createData("2025-11-16","天國福音的奧秘","麥漢勳 牧師","可 4:1-20"), 
  createData("2025-11-09","教會得造就","賀文亮 傳道","林前 14:1-40"), 
  createData("2025-11-02","對神對人對己都要謙卑","李潤洪 牧師","路 18:9-14"), 
  // createData("2025-10-26","愛不簡單","錢國偉 牧師","林前 13:1-8"), 
  // createData("2025-10-19","在碎片化時代中成為一個身體","余學深 牧師","林前 12:12-26"), 
  // createData("2025-10-12","重塑新時代的我們","朱幼成 牧師","徒 1:8, 2:1-8,12-14,37-47"),
  // createData("2025-10-05","為你設想","趙竹子 師母","耶 32:17-20,38-41, 33:3; 加 6:9-10"),
  // createData("2025-09-28","真心跟隨主","賀文亮 傳道","林前 10:1-33, 11:1"),
  // createData("2025-09-21","寫給沒有看見就信的人","關浩然 牧師","約 20:19-31; 約一 1:1-6"),
  // createData("2025-09-14","一切是為福音的好處","錢國偉 牧師","林前 9:16-27"),
  // createData("2025-09-07","以信靠順服上帝來確立人生方向","李潤洪 牧師","來 11:4-16"),
  // createData("2025-08-31","永不放棄","張志平 傳道","來 12:1-3"),
  // createData("2025-08-24","活出「慎思明辨」的信仰","錢國偉 牧師","林前 8:1-13"),
  // createData("2025-08-17","關係的三重奏 - 結婚、獨身、離婚","錢國偉 牧師","林前 7:1-16"),
  // createData("2025-08-10","人的身子","賀文亮 傳道","林前 6:12-20"),
  // createData("2025-08-03","「情願吃虧」的屬靈操練","錢國偉 牧師","林前 6:1-11"),
  // createData("2025-07-27","大愛不包容?","孔德承 先生","林前 5:1-13"),
  // createData("2025-07-20","擁抱召命的人生","麥漢勳 牧師","創 12:1-9"),
  // createData("2025-07-13","天國在人間","錢國偉 牧師","太 13:31-32"),
  // createData("2025-07-06","傳講主耶穌為我們作了何等大的事","李潤洪 牧師","路 8:26-39"),
  // createData("2025-06-29","用福音生了你們的父親","樊樂軒 先生","林前 4:6-21"),
  // createData("2025-06-22","做個屬靈人","賀文亮 傳道","林前 3:1-4:5"),
  // createData("2025-06-15","在聖靈光照中學習屬靈分辨的智慧","余學深 牧師","林前 2:6-16"),
  // createData("2025-06-08","在亂世中作主工","孫國鈞 牧師","太 13:17-46"),
  // createData("2025-06-01","人的愚拙 vs 神的智慧","錢國偉 牧師","林前 1:21-31"),
  // createData("2025-05-25","唯獨基督","賀文亮 傳道","林前 1:1-17"),
  // createData("2025-05-18","Be Water 的生命","吉中鳴 牧師","詩 24:3-4; 約 7:37"),
  // createData("2025-05-11","生命的標誌","梁錦華 先生","約 13:33-35, 15:9-12"),
  // createData("2025-05-04","基督復活、活好五道人生","李潤洪 牧師","徒 2:22-42"),
  // createData("2025-04-27","一杯涼水","張志平 傳道","太 10:40-42"),
  // createData("2025-04-20","封不住的真理 — 從十架黑夜到復活清晨","余學深 牧師","太 27:57-28:15"),
  // createData("2025-04-13","協作服侍 之 彼此相愛的重要性","梁毓榮 長老","約一 4:7-21"),
  // createData("2025-04-06","面對軟弱的三部曲","錢國偉 牧師","太 26:36-46"),
  // createData("2025-03-30","建立新國度","賀文亮 傳道","太 26:14-30"),
  // createData("2025-03-23","流離中的安身立命","趙敏華 女士","結 2:1-3:3, 11:16-20"),
  // createData("2025-03-16","傳承、見證、持守","宋軍 牧師","提後 1:3-14"),
  // createData("2025-03-09","珍惜是福","賀文亮 傳道","太 22:1-14"),
  // createData("2025-03-02","誰配得進天國?","錢國偉 牧師","太 18:1-11"),
  // createData("2025-02-23","興起群體、迎向復興","梁國全 傳道","該 1:2,4-7,12,14, 2:3-5,14-15,18-19"),
  // createData("2025-02-16","從心出發","余學深 牧師","太 15:1-20"),
  // createData("2025-02-09","以靈以真理敬拜上主","錢國偉 牧師","約 4:23-24; 賽 8:1-8; 尼 8:1-8"),
  // createData("2025-02-02","學效主耶穌的樣式展開使命","李潤洪 牧師","路 4:16-24"),
  // createData("2025-01-26","作安息日的控訴","賀文亮 傳道","太 12:1-14"),
  // createData("2025-01-19","作門徒的考驗 - 忠心","錢國偉 牧師","太 10:17-23, 27-31"),
  // createData("2025-01-12","學習超維度接納任何際遇","關浩然 牧師","創 50:18-21; 腓 2:5-11"),
  // createData("2025-01-05","立志一生愛主跟隨主","李潤洪 牧師","約 21:15-19"),
  // createData("2024-12-29","信徒三問","錢國偉 牧師","瑪 3:13-4:6"),
  // createData("2024-12-25","聖誕福音頌","錢國偉 牧師","路 2:1-20"),
  // createData("2024-12-22","神是愛","賀文亮 傳道","可 10:23-27"),
  // createData("2024-12-15","常常喜樂，從容應對挑戰","余學深 牧師","番 3:14-20; 腓 4:4-7"),
  // createData("2024-12-08","將你身上最貴重的拿出來!","朱幼成 牧師","林後 4:5-12"),
  // createData("2024-12-01","快樂的秘訣","賀文亮 傳道","路 23:13-14, 47"),
  // createData("2024-11-24","我們需要奉獻","錢國偉 牧師","瑪 3:7-12"),
  // createData("2024-11-17","活在上帝的時間表裡","麥漢勳 牧師","約 4:27-42"),
  // createData("2024-11-10","不變的信實和慈愛","賀文亮 傳道","瑪 2:17, 3:1-6"),
  // createData("2024-11-03","平平安安地迎見家人及自己的死亡臨到","李潤洪 牧師","路 2:25-31; 摩 4:12-13"),
  // createData("2024-10-27","選擇詭詐，還是專心跟隨主","余學深 牧師","瑪 2:10-16"),
  // createData("2024-10-20","事奉全視角","錢國偉 牧師","瑪 1:6-2:9"),
  // createData("2024-10-13","瓦器般的人生","梁錦華 先生","林後 4:7-12, 16-18"),
  // createData("2024-10-06","點解我日日都唔想返工?","林保照 先生","創 1:26-2:3"),
  // createData("2024-09-29","重新認識愛","錢國偉 牧師","瑪 1:1-5"),
  // createData("2024-09-22","神的忠僕","賀文亮 傳道","但 12:1-3, 7-13"),
  // createData("2024-09-15","從哥林多後書認識保羅","關浩然 牧師","林後 4:5, 7-11; 11:13-15; 12:7-10"),
  // createData("2024-09-08","悔改更新之路","錢國偉 牧師","但 9:1-11, 18-27"),
  // createData("2024-09-01","求智慧，更要求敬畏上帝的心","李潤洪 牧師","代下 1:7-13; 林前 2:6-13; 箴 9:10"),
  // createData("2024-08-25","國權更替","賀文亮 傳道","但 8:1-27"),
  // createData("2024-08-18","同心合意 興旺福音","李志雄 傳道","腓 1:3-8"),
  // createData("2024-08-11","克服困難、堅持使命","錢國偉 牧師","但 7:1-3, 17-28"),
  // createData("2024-08-04","哈娜之歌","何歷同 先生","撒上 2:1-10"),
  // createData("2024-07-28","合一同行 火熱服侍","梁毓榮 長老","西 1:1-29"),
  // createData("2024-07-21","無事生非","賀文亮 傳道","但 6:16-28"),
  // createData("2024-07-14","在恩典中長大成人","錢國偉 牧師","弗 4:7-13"),
  // createData("2024-07-07","數算主恩，為主作美事","李潤洪 牧師","太 26:6-13"),
  // createData("2024-06-30","您是您本身的傳奇","趙敏華 女士","路 24:13-35"),
  // createData("2024-06-23","驕傲在敗壞以先","錢國偉 牧師","但 5:1-6, 22-31"),
  // createData("2024-06-16","瘋王畢露","孔德承 傳道","但 4:1-37"),
  // createData("2024-06-09","即或不然","賀文亮 傳道","但 3:1-30"),
  // createData("2024-06-02","「人類歷史的終局」帶來盼望?!","錢國偉 牧師","但 2:1-6, 31-44"),
  // createData("2024-05-26","嘗試、成就","賀文亮 傳道","但 1:1-21"),
  // createData("2024-05-19","這是什麽世代","吉中鳴 牧師","路 7:18-35"),
  // createData("2024-05-12","新舊觀念的爭戰","錢國偉 牧師","耶 42:1-6, 9-17; 43:2-4"),
  // createData("2024-05-05","復活的耶穌是我的主我的上帝","李潤洪 牧師","約 20:24-29"),
  // createData("2024-04-28","改變人生的「然而」","錢國偉 牧師","哈 3:1-11, 16-19"),
  // createData("2024-04-21","復興的遠象","麥漢勳 牧師","詩 126:1-6"),
  // createData("2024-04-14","神掌管","賀文亮 傳道","哈 1:12-2:20"),
  // createData("2024-04-07","黑暗迷霧中的堅持","錢國偉 牧師","哈 1:1-11"),
  // createData("2024-03-31","Move On","何歷同 先生","約 20:11-18"),
  // createData("2024-03-24","深信不疑的人有福了","賀文亮 傳道","路 7:36-50"),
  // createData("2024-03-17","神對教會的忠告","錢國偉 牧師","太 21:12-17"),
  // createData("2024-03-10","在愛中過冬","宋軍 牧師","彼前 4:7-11"),
  // createData("2024-03-03","靠著上帝，凡事都能面對及勝過","李潤洪 牧師","創 18:9-15、腓 4:11-14"),
  // createData("2024-02-25","信仰抗疫的生活日常","朱幼成 牧師","帖前 5:16-24"),
  // createData("2024-02-18","一切從肚餓開始","孔德承 傳道","太 4:1-11"),
  // createData("2024-02-11","赦罪的主","賀文亮 傳道","可 2:1-12"),
  // createData("2024-02-04","神的榮耀","錢國偉 牧師","約 11:1-46"),
  // createData("2024-01-28","道理上是明白的，但......","孔德承 傳道","路 5:1-10"),
  // createData("2024-01-21","秘密計劃","周健文 先生","羅 16:25-27"),
  // createData("2024-01-14","尋找教會失落的焦點","錢國偉 牧師","約 5:2-16"),
  // createData("2024-01-07","情願接受上帝的使命","李潤洪 牧師","路 1:26-38"),
  // createData("2023-12-31","總結、前瞻","賀文亮 傳道","提前 6:6-12"),
  // createData("2023-12-25","耶穌基督福音的「開始」","孔德承 傳道","太 2:1-15"),
  // createData("2023-12-17","喜樂人生","賀文亮 傳道","腓 3:7-12"),
  // createData("2023-12-10","快樂的秘訣","錢國偉 牧師","傳 5:18-19"),
  // createData("2023-12-03","紛亂時代中的盼望","錢國偉 牧師","約 6:1-15"),
  // createData("2023-11-25","神定意要賜福人","錢國偉 牧師","創 21:14-21"),
  // createData("2023-11-19","「正確地」回應","何歷同 先生","徒 24:22-27"),
  // createData("2023-11-12","報告神悅納人的禧年","梁毓榮 長老","路 4:16-21"),
  // createData("2023-11-05","遵行上帝的誡命於我有益","李潤洪 牧師","太 22:34-40"),
  // createData("2023-10-29","重疊的身影","孔德承 傳道","徒 21:27-22:1"),
  // createData("2023-10-22","幻變中的石頭","朱幼成 牧師","彼前 2:1-17"),
  // createData("2023-10-15","無我的保羅","賀文亮 傳道","徒 18:23-21:26"),
  // createData("2023-10-08","因為堅持，看見榮耀","錢國偉 牧師","徒 16:16-31"),
  // createData("2023-10-01","耶穌滿有權柄做合神心意的事","李潤洪 牧師","太 21:12-17, 23-27"),
  // createData("2023-09-24","從他們到我們","孔德承 傳道","徒 15:1-2, 4-21"),
  // createData("2023-09-17","不一樣的你","麥漢勳 牧師","瑪 3:13-4:3"),
  // createData("2023-09-10","篤信力行","賀文亮 傳道","徒 14:1-7"),
  // createData("2023-09-03","迷惘驚慌中，定晴仰望耶穌","李潤洪 牧師","太 14:22-33"),
  // createData("2023-08-27","在聖靈裡跨越","錢國偉 牧師","徒 11:19-30"),
  // createData("2023-08-20","當上帝做了件新事","余學深 牧師","徒 11:1-18"),
  // createData("2023-08-13","擇善固執","賀文亮 傳道","徒 9:1-31"),
  // createData("2023-08-06","生命中幾個重要的學習","錢國偉 牧師","民 20:1-13"),
  // createData("2023-07-30","沒有神蹟的神蹟","梁錦華 先生","約 4:1-42"),
  // createData("2023-07-23","Everything is Wrong!?","孔德承 傳道","徒 8:4-8, 26-40"),
  // createData("2023-07-16","我們的未來 ─ 是好是歹?!","錢國偉 牧師","民 13:17-20, 25-33, 14:6-9"),
  // createData("2023-07-09","願為主用","賀文亮 傳道","徒 6:8-15, 7:54-60"),
  // createData("2023-07-02","面對問題的視野","錢國偉 牧師","徒 6:1-7"),
  // createData("2023-06-25","獻你年青的力量","何歷同 先生","可 12:41-44"),
  // createData("2023-06-18","風浪中活出教會","余學深 牧師","徒 5:12-20, 25-32"),
  // createData("2023-06-11","做個斤斤計較的基督徒","樊樂軒 宣教士","路 14:25-35"),
  // createData("2023-06-04","即或不然的忠貞","李潤洪 牧師","但 3:8-18"),
  // createData("2023-05-28","逆境中","賀文亮 傳道","徒 4:9-21; 26-31"),
  // createData("2023-05-21","被擄、流散、安身","麥子強 傳道","結 1:1-28"),
  // createData("2023-05-14","你看我們！","孔德承 傳道","徒 3:11-26"),
  // createData("2023-05-07","聖靈在今天的工作","錢國偉 牧師","徒 2:1-13"),
  // createData("2023-04-30","第十三人","孔德承 傳道","徒 1:12-26"),
  // createData("2023-04-23","重價的恩典","何歷同 先生","羅 6:1-14"),
  // createData("2023-04-16","求聖靈充滿","錢國偉 牧師","徒 1:1-8"),
  // createData("2023-04-09","復活","賀文亮 傳道","太 19:16-26"),
  // createData("2023-04-02","當覺得「唔係好妥」時","錢國偉 牧師","可 14:32-42"),
  // createData("2023-03-26","你們中間不可這樣","錢國偉 牧師","太 20:17-28"),
  // createData("2023-03-19","神聖的碰觸","麥漢勳 牧師","可 1:40-45"),
  // createData("2023-03-12","困苦中做人","孔德承 傳道","創 39:1-23"),
  // createData("2023-03-05","活出屬神的生命","李潤洪 牧師","約 3:1-17"),
  // createData("2023-02-26","預苦期","賀文亮 傳道","創 1:20-31, 3:17-19"),
  // createData("2023-02-19","最美好的福氣","余學深 牧師","可 6:30-44"),
  // createData("2023-02-12","天路微塵","錢國偉 牧師","王上 18:1-18"),
  // createData("2023-02-05","Stand Firm for Freedom (為自由站穩)","朱幼成 牧師","加 5:1-14"),
  // createData("2023-01-29","門徒的多重宇宙","孔德承 傳道","太 17:1-8"),
  // createData("2023-01-22","新的國度","賀文亮 傳道","約 19:4-16"),
  // createData("2023-01-15","亞伯拉罕伸張公義","周健文 先生","創 18:16-32"),
  // createData("2023-01-08","放棄的理由有千百種；堅持的原因卻只需要一個…","孔德承 傳道","太 3:13-17"),
  // createData("2023-01-01","耶穌是君王，常與我們同在","李潤洪 牧師","太 2:1-15"),
];

const bannerContent = {
  id: 1,
  description: '崇拜講道',
};

export default function Sermon() {

  React.useEffect(() => {
    document.title = "基督教芥菜種子堂 | 崇拜講道";  
  }, []);

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
