'use client'

import { 
  Grid, 
  Button, 
  Container, 
  Typography, 
} from "@mui/material";

import Card from '@/layouts/Card/Card'

export default function Dashboard() {

  return (
    <>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Meus Anúncios
        </Typography>
        <Button variant="contained" color="primary" sx={{my: '30px', mx: 'auto', display: 'block'}}>
          Publicar novo anuncio
        </Button>
      </Container>
      
      <Container maxWidth="md">
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image = {"https://source.unsplash.com/random"}
              title = {"Produto W"}
              subtitle = "R$ 100,00"
              actions = {
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button> 
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </> 
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card
              image = {"https://source.unsplash.com/random"}
              title = {"Produto X"}
              subtitle = "R$ 130,00"
              actions = {
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button> 
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </> 
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              image = {"https://source.unsplash.com/random"}
              title = {"Produto Y"}
              subtitle = "R$ 150,00"
              actions = {
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button> 
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </> 
              }
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
          <Card
              image = {"https://source.unsplash.com/random"}
              title = {"Produto Z"}
              subtitle = "R$ 180,00"
              actions = {
                <>
                  <Button size="small" color="primary">
                    Editar
                  </Button> 
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </> 
              }
            />
          </Grid>

        </Grid>
      </Container>
    </>

  )
}
