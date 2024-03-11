import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// import BannerHome from './assets/banner-10th.png';
import BannerHome from './assets/ccms-banner-00.jpg';
import BannerNormal from './assets/ccms-banner-01.jpg';

interface BannerProps {
  post: {
    id: number;
    description?: string;
    image?: string;
    imageText?: string;
    linkText?: string;
    title?: string;
  };
}

export default function Banner(props: BannerProps) {
  const { post } = props;
  const url = (post.id === 0)? `url(${BannerHome})` : `url(${BannerNormal})`;
  const height = (post.id === 0)? '330px' : '160px';

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 7,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundImage: `url(${post.image})`,
        backgroundImage: `${url}`,
        borderRadius: 0,
        height: {height},
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
      {/* Preload images: */}
      <img style={{ display: 'none' }} src={BannerHome} alt={post.imageText} loading='eager' />
      <img style={{ display: 'none' }} src={BannerNormal} alt='' loading='eager' />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.1)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 2, md: 4 },
              pr: { md: 0 },
              textAlign: 'left',
            }}
          >
            <Typography variant="subtitle1" color="inherit" gutterBottom sx={{fontStyle: 'italic', textShadow:'2px 2px 4px rgba(0,0,0,0.25), -2px -2px 4px rgba(0,0,0,0.25)'}}>
              {post.title}
            </Typography>
            <Typography component="h1" variant="h3" color="inherit" paragraph sx={{fontStyle: 'italic', textShadow:'2px 2px 4px rgba(0,0,0,0.25), -2px -2px 4px rgba(0,0,0,0.25)'}}>
              {post.description}
            </Typography>
            {/* <Link variant="h6" target='_blank' href={`${process.env.PUBLIC_URL}/CCMS-10th-anniversary.pdf`} underline='hover' sx={{color:'#ffffff', fontStyle: 'italic'}}>
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
