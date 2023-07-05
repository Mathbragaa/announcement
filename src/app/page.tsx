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

import Card from '@/layouts/Card/Card'

export default function Home() {
  return (

    <>
      <Container maxWidth="lg">
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Box 
          sx={{
            display:'flex',
            justifyContent:'center',
            mt:'20px',
            backgroundColor:'white',
            p: 2, 
            borderRadius: 4, 
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
      </Container>

      <Container maxWidth="lg" sx={{py:[8,6]}}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
            Destaques
        </Typography>
        <br/> 
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image = {"https://source.unsplash.com/random"}
              title = {"Produto A"}
              subtitle = "R$ 100,00"
              actions = {""}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image = {"https://source.unsplash.com/random"}
              title = {"Produto B"}
              subtitle = "R$ 130,00"
              actions = {""}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <Card
              image = {"https://source.unsplash.com/random"}
              title = {"Produto C"}
              subtitle = "R$ 150,00"
              actions = {""}
            />
          </Grid>

        </Grid>
      </Container>   
    </>
  )
}
