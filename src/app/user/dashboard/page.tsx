'use client'

import { 
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid, 
  Button, 
  Container, 
  Typography, 
} from "@mui/material";

import TemplateDefault from "@/components/Templates/Default";

export default function Home() {

  return (

    <TemplateDefault>
      <Container maxWidth="sm" sx={{py:[8,6]}}>
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
            <Card>
              <CardMedia
                image = {"https://source.unsplash.com/random"}
                title = "titulo da imagem" 
                sx={{pt:10}}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Eu te amo julia raffin
                </Typography>
                <Typography>
                  R$ INIFITO E ALEM 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button> 
                <Button size="small" color="primary">
                  Remover
                </Button> 
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image = {"https://source.unsplash.com/random"}
                title = "titulo da imagem" 
                sx={{pt:10}}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto Y
                </Typography>
                <Typography>
                  R$ 70,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button> 
                <Button size="small" color="primary">
                  Remover
                </Button> 
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image = {"https://source.unsplash.com/random"}
                title = "titulo da imagem" 
                sx={{pt:10}}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Eu tambem te amo lo!!
                </Typography>
                <Typography>
                  R$ infinito tbm
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button> 
                <Button size="small" color="primary">
                  Remover
                </Button> 
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image = {"https://source.unsplash.com/random"}
                title = "titulo da imagem" 
                sx={{pt:10}}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto z
                </Typography>
                <Typography>
                  R$ 600,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button> 
                <Button size="small" color="primary">
                  Remover
                </Button> 
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>

  )
}
