import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { LEGENDS } from './config';
// import WorkIcon from '@mui/icons-material/Work';

// Year 2026: A=全體 G=小組 I=兒童/少年 L=堂委/領袖 C=個人 F=社區/親子 S=其他
const data = [
  {id:1, type:'A', title:'預苦期/靈修分享', desc:'',},
  {id:2, type:'C', title:'探訪會友家庭', desc:'',},
  {id:3, type:'F', title:'15/3 童樂家庭主日', desc:'*故事人生協助',},
  {id:4, type:'I', title:'#每週六「我長大了」', desc:'',},
  {id:5, type:'I', title:'#每週日「少年團契」', desc:'',},
  {id:6, type:'I', title:'#每週日「兒童主日學」', desc:'',},
  {id:7, type:'L', title:'#約每月1次「領袖訓練」', desc:'',},
  {id:8, type:'L', title:'#約每月1次敬拜隊團契及練習', desc:'',},
  {id:9, type:'L', title:'1/3 堂委退修會', desc:'',},
  {id:10, type:'A', title:'3/4 受難節晚會', desc:'',},
  {id:11, type:'A', title:'5/4 復活節崇拜', desc:'',},
  {id:12, type:'G', title:'#預苦期後，同工每週發放一篇默想指引', desc:'鼓勵每次小組簡短分享當中的領受',},
  {id:13, type:'F', title:'19/4 童樂家庭主日', desc:'*馬鞍峰教會協助',},
  {id:14, type:'F', title:'25/4 老人院探訪', desc:'*故事人生及少年團契協助',},
  {id:15, type:'I', title:'1-2/4 少年團契歷奇營', desc:'',},
  {id:16, type:'S', title:'5/4 嬰孩奉獻禮', desc:'',},
  {id:17, type:'S', title:'12/4 第五屆浸禮', desc:'',},
  {id:18, type:'A', title:'31/5 兩堂祈禱交流會', desc:'*崇拜後30-40分鐘',},
  {id:19, type:'G', title:'21-25/5 台灣5天自在遊', desc:'',},
  {id:20, type:'C', title:'家庭聚會', desc:'',},
  {id:21, type:'F', title:'17/5 親子工作坊', desc:'*子博協助',},
  {id:22, type:'G', title:'27/6 退修日營', desc:'',},
  {id:23, type:'G', title:'探索恩澤堂會眾融入/開始小組的可能性', desc:'',},
  {id:24, type:'F', title:'21/6 童樂家庭主日', desc:'',},
  {id:25, type:'F', title:'6/6 端午節社區探訪', desc:'',},
  {id:26, type:'S', title:'圖書介紹', desc:'',},
  {id:27, type:'A', title:'12/7 十四週年堂慶感恩崇拜', desc:'',},
  {id:28, type:'F', title:'開心過暑假', desc:'',},
  {id:29, type:'I', title:'16-17/7 小學生福音營', desc:'',},
  {id:30, type:'C', title:'家庭聚會', desc:'',},
  {id:31, type:'F', title:'開心過暑假', desc:'',},
  {id:32, type:'L', title:'領袖訓練(四)開始', desc:'',},
  {id:33, type:'A', title:'27/9 兩堂祈禱交流會', desc:'*崇拜後30-40分鐘',},
  {id:34, type:'F', title:'童樂家庭主日', desc:'',},
  {id:35, type:'F', title:'12/9 老人院探訪', desc:'',},
  {id:36, type:'C', title:'家庭聚會', desc:'',},
  {id:37, type:'F', title:'社區親子同樂日', desc:'*深水埗教會協辦',},
  {id:38, type:'S', title:'崇拜司事交流會', desc:'',},
  {id:39, type:'A', title:'29/11 將臨期開始', desc:'',},  
  {id:40, type:'G', title:'退修日營', desc:'',}, 
  {id:41, type:'F', title:"童樂家庭主日", desc:'',},
  {id:42, type:'A', title:'13/12 戶外崇拜旅行', desc:'',},
  {id:43, type:'A', title:'聖誕節期聚會及崇拜', desc:'',},
  {id:44, type:'A', title:'除夕感恩分享會', desc:'',},
  {id:45, type:'F', title:'童樂家庭主日', desc:'',},
  {id:46, type:'F', title:'社區嘉年華', desc:'',},
  {id:47, type:'A', title:'10/1 兩堂祈禱交流會', desc:'',},
  {id:48, type:'C', title:'探訪會友家庭', desc:'',},
  {id:49, type:'F', title:'童樂家庭主日', desc:'',},
  {id:50, type:'F', title:'17/1 新春社區探訪/老人院探訪', desc:'',},
  {id:51, type:'S', title:'圖書介紹', desc:'',},
  {id:52, type:'A', title:'預苦期開始', desc:'',},
  {id:53, type:'C', title:'探訪會友家庭', desc:'',},
  {id:54, type:'F', title:'童樂家庭主日', desc:'',},
  {id:55, type:'C', title:'探訪會友家庭', desc:'',},
  {id:56, type:'F', title:'童樂家庭主日', desc:'',},
  {id:57, type:'L', title:'堂委退修', desc:'',},
];

interface EventProps {
  id: number;
}

export default function Event({id}: EventProps) {
  var index;
  var type = '';
  var title = '';
  var desc = '';
  var color = '';

  for (index in data) {
    if (data[index].id === id) {
      type = data[index].type;
      title = data[index].title;
      desc = data[index].desc;
      break;
    }
  }

  for (index in LEGENDS) {
    if (LEGENDS[index].type === type) {
      color = LEGENDS[index].color;
      break;
    }
  }

  return (
    <List dense sx={{mb:0, pb:0,}}>
      <ListItem disablePadding alignItems='flex-start'>
        <ListItemIcon sx={{minWidth:'22px', mt:'5px',}}>
            {type === 'A' && 
              <GroupsIcon fontSize='small' htmlColor={color} />
            }
            {type === 'G' && 
              <PeopleIcon fontSize='small' htmlColor={color} />
            }
            {type === 'I' && 
              <LocalFloristIcon fontSize='small' htmlColor={color} />
            }
            {type === 'L' && 
              <HomeIcon fontSize='small' htmlColor={color} />
            }
            {type === 'C' && 
              <PersonIcon fontSize='small' htmlColor={color} />
            }
            {type === 'F' && 
              <FavoriteIcon fontSize='small' htmlColor={color} />
            }
            {type === 'S' && 
              <FreeBreakfastIcon fontSize='small' htmlColor={color} />
            }
        </ListItemIcon>

        {desc !== '' &&
          <ListItemText 
            primary={title}
            secondary={desc}
            primaryTypographyProps={{ 
              // variant: 'subtitle1', 
              style: {
                  // whiteSpace: 'nowrap',
              }
            }}
            secondaryTypographyProps={{ 
              // variant: 'subtitle2', 
              style: {
                  // whiteSpace: 'nowrap',
                  fontSize: '0.8rem',
              }
            }}          
          />
        }

        {desc === '' &&
          <ListItemText 
            primary={title}
            primaryTypographyProps={{ 
              // variant: 'subtitle1', 
              style: {
                  // whiteSpace: 'nowrap',
              }
            }}       
          />
        }
      </ListItem>
    </List>
  );
}
