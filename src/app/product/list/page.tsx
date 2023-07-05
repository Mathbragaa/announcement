'use client'

import {
    Container,
    InputBase,
    Typography,
    IconButton,
    Grid,
  } from "@mui/material"
  
import { Box } from "@mui/system"

import { Search } from "@mui/icons-material"

import themeDefault from "@/components/Theme/theme"
import Card from '@/layouts/Card/Card'

export default function List(){
    return (
        <>
            <Container maxWidth="lg">

                <Box 
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        backgroundColor: themeDefault.palette.background.default,
                        py: 0.5,
                        px:'20px',
                        borderRadius: 1, 
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                    >
                    <InputBase
                        placeholder="Ex.: Bola de basquete nova"
                        fullWidth
                    />
                    <IconButton>
                        <Search/>
                    </IconButton>
                </Box>

                <Grid item xs={12} sm={12} md={12}>
                    <Box 
                        sx={{
                            bgcolor: themeDefault.palette.background.default,
                            p:3,
                            my:3,
                        }}
                    >
                        <Typography component="h6" variant="h6">
                            Anúncios
                        </Typography>
                        <Typography component="span" variant="subtitle2">
                            Encontrados 200 anuncios
                        </Typography>

                        <Grid container spacing={4}>
                            
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image = {"https://source.unsplash.com/random?a=1"}
                                    title = {"Produto A"}
                                    subtitle = "R$ 100,00"
                                    actions = {""}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image = {"https://source.unsplash.com/random?a=2"}
                                    title = {"Produto B"}
                                    subtitle = "R$ 120,00"
                                    actions = {""}
                                />
                            </Grid>
                            
                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image = {"https://source.unsplash.com/random?a=3"}
                                    title = {"Produto C"}
                                    subtitle = "R$ 140,00"
                                    actions = {""}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image = {"https://source.unsplash.com/random?a=4"}
                                    title = {"Produto D"}
                                    subtitle = "R$ 160,00"
                                    actions = {""}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image = {"https://source.unsplash.com/random?a=5"}
                                    title = {"Produto E"}
                                    subtitle = "R$ 180,00"
                                    actions = {""}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Card
                                    image = {"https://source.unsplash.com/random?a=6"}
                                    title = {"Produto F"}
                                    subtitle = "R$ 200,00"
                                    actions = {""}
                                />
                            </Grid>
                            
                        </Grid>
                    </Box>
                </Grid>
                
            </Container>
        </>
    )
}