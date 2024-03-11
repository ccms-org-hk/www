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

const data = [
  {id:1, type:'C', title:'新年探訪', desc:'',},
  {id:2, type:'C', title:'童樂家庭主日', desc:'',},
  {id:3, type:'A', title:'預苦期開始', desc:'(14/2)',},
  {id:4, type:'A', title:'受難節聚會', desc:'',},
  {id:5, type:'A', title:'復活節崇拜', desc:'',},
  {id:6, type:'C', title:'嘉年華', desc:'(16/3)',},
  {id:7, type:'C', title:'童樂家庭主日', desc:'',},
  {id:8, type:'S', title:'領袖培訓開始', desc:'',},
  {id:9, type:'C', title:'童樂家庭主日', desc:'',},
  {id:10, type:'C', title:'端午探訪', desc:'',},
  {id:11, type:'S', title:'圖書介紹', desc:'',},
  {id:12, type:'A', title:'十二週年堂慶', desc:'感恩崇拜',},
  {id:13, type:'C', title:'童樂家庭主日', desc:'',},
  {id:14, type:'C', title:'開心過暑假', desc:'',},
  {id:15, type:'G', title:'各組營會', desc:'自行安排',},
  {id:16, type:'C', title:'童樂家庭主日', desc:'',},
  {id:17, type:'C', title:'中秋探訪', desc:'',},
  {id:18, type:'Y', title:'各組營會', desc:'自行安排',},
  {id:19, type:'S', title:'會友大會', desc:'執事選舉',},
  {id:20, type:'A', title:'將臨期開始', desc:'',},
  {id:21, type:'C', title:'童樂家庭主日', desc:'',},
  {id:22, type:'A', title:'聖誕節期聚會及崇拜', desc:'',},
  {id:23, type:'A', title:'冬季大旅行', desc:'(教會及社區)',},
  {id:24, type:'S', title:'圖書介紹', desc:'',},
  {id:25, type:'F', title:"每月約一次探訪/家庭聚會", desc:'',},
  {id:26, type:'G', title:"每年至少一次個別見面關心會友", desc:'',},
  {id:27, type:'C', title:"每月1次", desc:'「男士小組」',},
  {id:28, type:'C', title:"4-9月", desc:'「婦女興趣班」',},
  {id:29, type:'I', title:'每主日', desc:'「兒童主日學」',},
  {id:30, type:'I', title:'每週末早上', desc:'「我長大了」',},
  {id:31, type:'I', title:'每主日下午', desc:'「少年團契」',},
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
