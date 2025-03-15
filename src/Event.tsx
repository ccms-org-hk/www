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

// A=全體 G=小組 I=兒童/少年 C=個人 S=同工 F=堂委/司事
const data = [
  {id:1, type:'C', title:'家長座談會', desc:'19/1',},
  {id:2, type:'F', title:'領袖培訓', desc:'*每月進行',},
  {id:3, type:'C', title:'童樂家庭主日', desc:'16/2',},
  {id:4, type:'F', title:'堂委退修會', desc:'',},
  {id:5, type:'A', title:'預苦期開始', desc:'',},
  {id:6, type:'C', title:'童樂家庭主日', desc:'16/3',},
  {id:7, type:'G', title:'嘉年華', desc:'22/3',},
  {id:8, type:'A', title:'受難節晚會', desc:'',},
  {id:9, type:'A', title:'復活節崇拜', desc:'',},
  {id:10, type:'C', title:'義工服務', desc:'12/4',},
  {id:11, type:'C', title:'家長座談會', desc:'18/5',},
  {id:12, type:'C', title:'端午探訪', desc:'',},
  {id:13, type:'C', title:'童樂家庭主日', desc:'15/6',},
  {id:14, type:'C', title:'戶外慶祝活動', desc:'21/6',},
  {id:15, type:'F', title:'崇拜司事交流會', desc:'',},
  {id:16, type:'A', title:'十三週年堂慶', desc:'感恩崇拜',},
  {id:17, type:'C', title:'開心過暑假', desc:'(招募至15人)',},
  {id:18, type:'S', title:'圖書介紹', desc:'',},
  {id:19, type:'C', title:'開心過暑假', desc:'(招募至15人)',},
  {id:20, type:'F', title:'敬拜事奉交流會', desc:'',},
  {id:21, type:'G', title:'小組退修', desc:'(成人)',},
  {id:22, type:'C', title:'童樂家庭主日', desc:'',},
  {id:23, type:'G', title:'小組退修', desc:'(職青/大專)',},
  {id:24, type:'C', title:'童樂家庭主日', desc:'',},
  {id:25, type:'C', title:'中秋探訪', desc:'',},
  {id:26, type:'A', title:'將臨期開始', desc:'',},
  {id:27, type:'C', title:'童樂家庭主日', desc:'',},
  {id:28, type:'A', title:'聖誕節期聚會及崇拜', desc:'',},
  {id:29, type:'A', title:'除夕感恩分享會', desc:'',},
  {id:30, type:'C', title:'童樂家庭主日', desc:'',},
  {id:31, type:'C', title:'升學及福音營', desc:'(小五小六)',},
  {id:32, type:'A', title:'社區報佳音', desc:'',},
  {id:33, type:'C', title:'聖誕節浸禮', desc:'',},
  {id:34, type:'C', title:'嬰孩奉獻禮', desc:'',},
  {id:35, type:'C', title:'童樂家庭主日', desc:'',},
  {id:36, type:'A', title:'冬季大旅行', desc:'(教會及社區)',},
  {id:37, type:'S', title:'圖書介紹', desc:'',},  
  {id:38, type:'A', title:'預苦期開始', desc:'',},
  {id:39, type:'C', title:'童樂家庭主日', desc:'',},  
  {id:40, type:'C', title:'童樂家庭主日', desc:'',}, 
  //
  {id:41, type:'S', title:"1年最少6次探訪", desc:'',},
  {id:42, type:'I', title:'平日:補習活動', desc:'',},
  {id:43, type:'I', title:'逢週六:我長大了', desc:'',},
  {id:44, type:'I', title:'逢週日:兒童主日學', desc:'',},
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
              <FreeBreakfastIcon fontSize='small' htmlColor={color} />
            }
            {type === 'Y' && 
              <LocalFloristIcon fontSize='small' htmlColor={color} />
            }
            {type === 'C' && 
              <FavoriteIcon fontSize='small' htmlColor={color} />
            }
            {type === 'F' && 
              <HomeIcon fontSize='small' htmlColor={color} />
            }
            {type === 'S' && 
              <PersonIcon fontSize='small' htmlColor={color} />
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
