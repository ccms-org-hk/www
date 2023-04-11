import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={4}>
      {/* <CardActionArea component="a" href="#"> */}
        <Card sx={{ height:'100%',}}>
          <CardMedia
            component="img"
            sx={{ height: 180, 
              filter: 'brightness(90%)',
              // display: { xs: 'none', sm: 'block' } 
            }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent sx={{textAlign:'left',}}>
            <Typography component="h2" variant="h5" sx={{mb:1}}>
              {post.title}
            </Typography>

            {/* <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography> */}

            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>

            {/* <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography> */}
          </CardContent>
        </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
}
