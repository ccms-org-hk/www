import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface CollaborationProps {
  collaborator: {
    name: string;
    logo: string;
    link?: string;
  };
}

export default function Collaboration(props: CollaborationProps) {
  const { collaborator } = props;

  return (
    <Grid item xs={4} md={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <a href={collaborator.link} target="_blank" rel="noreferrer">  
          <img
          src={collaborator.logo}
          alt={collaborator.name}
          loading="lazy"
          />
        </a>
      </Box>
    </Grid>
  );
}
