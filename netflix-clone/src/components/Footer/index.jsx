import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Divider } from '@mui/material';
export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>
        <Divider  sx={{backgroundColor: 'white'}}/>
      <AppBar position="static" sx={{backgroundColor: 'black' }}>
        <Toolbar>
        <GitHubIcon/><u>Github</u>
        </Toolbar>
      </AppBar>
    </Box>
  );
}