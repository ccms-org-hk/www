import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Logo from './assets/ccms-logo-330.jpg';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { 
    sections, 
    // title, 
  } = props;

  return (
    <React.Fragment>
  
      <Toolbar sx={{ 
        // borderBottom: 1, 
        // borderColor: 'divider' 
      }}>
        <Link href={`${process.env.PUBLIC_URL}/`}><img src={Logo} alt='' /></Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ 
          justifyContent: {
            xs:'center', 
            sm:'center',
            md:'flex-end',
            lg:'flex-end',
          }, 
          overflowX: 'auto',
        }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ 
              py:2, 
              px: {
                xs: 1,
                sm: 1,
                md: 1.5,
                lg: 1.5,
              }, 
              flexShrink:0, 
              textDecoration:'none', 
              color:'#726d5f', 
              fontWeight:'700', 
              fontSize: {
                xs:'1.08rem',
                sm:'1.08rem', 
                md:'1.15rem', 
                lg:'1.15rem'
              },
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
