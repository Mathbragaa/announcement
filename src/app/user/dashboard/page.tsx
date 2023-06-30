'use client'

import { Button, Container, Typography } from "@mui/material"
import TemplateDefault from "@/components/Templates/Default"

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
    </TemplateDefault>

  )
}
