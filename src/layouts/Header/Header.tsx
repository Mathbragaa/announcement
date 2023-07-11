'use client'
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Box,
  Container,
} from '@mui/material';

import { AccountCircle} from '@mui/icons-material';

export default function ButtonAppBar() {
  const [anchorUserMenu, SetAnchorUserMenu] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorUserMenu)
  return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" elevation={3}>
          <Container>
            <Toolbar>
              <Typography variant="h6" sx={{flexGrow: 1}}>
                Announcement
              </Typography>

              <Link href="/user/publish" passHref style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Button color="inherit" variant="outlined">
                  Anunciar e Vender
                </Button>
              </Link>
              <IconButton color="secondary" sx={{ml:"6px"}} onClick={(e)=>SetAnchorUserMenu(e.currentTarget)}>
                {
                  true === true 
                  ? <Avatar src=""/>
                  :<AccountCircle/>
                }
              <Typography variant="subtitle2" color="secondary" sx={{ml:"15px"}}>
                Matheus Braga
              </Typography>
              </IconButton>
              <Menu 
                anchorEl={anchorUserMenu}
                open={openUserMenu}
                onClose={()=>SetAnchorUserMenu(null)}
                anchorOrigin={{
                  vertical:'top',
                  horizontal:'right',
                }}
              >
              <Link href="/user/dashboard" passHref style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <MenuItem>Meus anúncios</MenuItem>  
              </Link> 

              <Link href="/user/publish" passHref style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
                <Divider sx={{my:"8px", mx:"0px"}}/>
                <MenuItem>Sair</MenuItem>
              </Menu>           
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
  );
}