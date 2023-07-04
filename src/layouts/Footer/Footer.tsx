import * as React from 'react';
import { ReactNode } from 'react'
import { 
    Container,
    Grid,
    Box,
    Typography,
} from '@mui/material';

import Link from 'next/link';
import themeDefault from '@/components/Theme/theme';

  
  export default function Footer () {


    return (
      <Container 
        maxWidth="lg" 
        component="footer" 
        sx={{
            borderTop:`1px solid ${themeDefault.palette.divider}`,
            mt:8,
            pt:3,
            pb:3,
            [themeDefault.breakpoints.up('sm')]:{
                pt:6,
                pb:6,
            }
        
        }}
        >
        <Grid container spacing={3} >
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="#"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        }}
                    >
                        <Typography color="textSecondary" variant="subtitle1">Ajuda e contato</Typography> 
                    </Link> 
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="#"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        }}
                    >
                        <Typography color="textSecondary" variant="subtitle1">Dicas de segurança</Typography> 
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="#"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        }}
                    >
                        <Typography color="textSecondary" variant="subtitle1">Anunciar e vender</Typography> 
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link 
                        href="#"
                        passHref 
                        style={{ 
                        color: 'inherit', 
                        textDecoration: 'inherit',
                        }}
                    >
                        <Typography color="textSecondary" variant="subtitle1">Plano profissional</Typography> 
                    </Link>
                </Box>
            </Grid>
        </Grid>
      </Container>
    );
  };
  
