import React from 'react';
import { Box, IconButton } from '@mui/material';
import { WhatsApp, Email, Facebook, Instagram } from '@mui/icons-material';
import '../../css/css.css'
function Footer() {
  return (
    <Box
      sx={{
        position: 'static',
        left: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgb(10, 18, 89)',
      }}
    >
      <div className='w'>
        <IconButton sx={{ marginRight: '0.5rem' }}>
          <WhatsApp />
        </IconButton>
      </div>
      <div className='e'>
        <IconButton sx={{ marginRight: '0.5rem' }}>
          <Email />
        </IconButton>
      </div>
      <div className='f'>
        <IconButton sx={{ marginRight: '0.5rem' }}>
          <Facebook />
        </IconButton>
      </div>
      <div className='i'>
        <IconButton>
          <Instagram />
        </IconButton>
      </div>
    </Box>
  );
}
export default Footer;