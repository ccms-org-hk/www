import * as React from 'react';
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
import { LEGENDS } from './config';
// import WorkIcon from '@mui/icons-material/Work';

const data = [
  {id:1, type:'I', title:'新年探訪', desc:'',},
  {id:2, type:'C', title:'婦女組', desc:'',},
  {id:3, type:'A', title:'預苦期開始', desc:'(每週畫中默想)',},
  {id:4, type:'C', title:'親子聚會', desc:'(甜品製作)',},
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
  {id:27, type:'F', title:"每月最少1次探訪 / 家庭聚會", desc:'(以非信徒家人或少來聚會者為主)',},
  {id:28, type:'C', title:'招慕人手', desc:'協助週日兒童主日學',},
  {id:29, type:'C', title:'每週末早上', desc:'「我長大了」',},
  {id:30, type:'C', title:'每主日下午', desc:'「少年團契」',},
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
