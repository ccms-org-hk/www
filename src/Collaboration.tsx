import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface CollaborationProps {
  collaborator: {
    title: string;
    image: string;
    imageLabel: string;
  };
}

export default function Collaboration(props: CollaborationProps) {
  const { collaborator } = props;

  return (
    <Grid item xs={12} md={2}>
      {/* <CardActionArea component="a" href="#"> */}
        <Card sx={{ height:'100%',}}>
          <CardMedia
            component="img"
            sx={{ height: 128, 
              filter: 'brightness(90%)',
              // display: { xs: 'none', sm: 'block' } 
            }}
            image={collaborator.image}
            alt={collaborator.imageLabel}
          />
          <CardContent sx={{textAlign:'left',}}>
            <Typography component="h2" variant="h5" sx={{mb:1}}>
              {collaborator.title}
            </Typography>
          </CardContent>
        </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
}
