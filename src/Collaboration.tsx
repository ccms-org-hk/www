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
    <Grid item md={3} xs={6}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <a href={collaborator.link} target="_blank" rel="noreferrer">  
          <img
          src={collaborator.logo}
          alt={collaborator.name}
          title={collaborator.name}
          loading="lazy"
          />
        </a>
      </Box>
    </Grid>
  );
}
