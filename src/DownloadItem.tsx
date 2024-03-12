import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface DownloadItemProps {
  item: {
    title: string;
    image: string;
    link: string;
    date?: string;
    description?: string;
  };
}

export default function DownloadItem(props: DownloadItemProps) {
  const { item } = props;

  return (
    <Grid item xs={12} md={4}>
      <CardActionArea component="a" target='_blank' href={item.link} >
        <Card sx={{ height:'100%',}}>
          <CardMedia
            component="img"
            sx={{ height: 180, 
              filter: 'brightness(90%)',
              // display: { xs: 'none', sm: 'block' } 
            }}
            image={item.image}
            alt={item.title}
          />
          <CardContent sx={{textAlign:'left',}}>
            <Typography component="h2" variant="h5" sx={{mb:1}}>
              {item.title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary">
              {item.date}
            </Typography>

            <Typography variant="subtitle1" paragraph>
              {item.description}
            </Typography>

            {/* <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography> */}
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
