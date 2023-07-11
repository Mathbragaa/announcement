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

import Card from '@/components/Card/Card'

export default function ProductList() {
  return (

    <>
      <Container maxWidth="lg">
        <Box 
          sx={{
            display:'flex',
            justifyContent:'center',
            my:'20px',
            backgroundColor:'white',
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
      </Container>

      <Container maxWidth="lg">
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
            Destaques
        </Typography>
        <br/> <br/>
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
      </Container>   
    </>
  )
}
