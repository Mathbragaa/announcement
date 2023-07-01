"use client"
import {  
    Button, 
    Container, 
    Typography, 
    Box,
    TextField,
    Select,
  } from "@mui/material";

import TemplateDefault from '@/components/Templates/Default';
import themeDefault from "@/components/Theme/theme";


const  Publish = () => (
    <TemplateDefault>

        <Container maxWidth="sm" sx={{ py: [8, 6] }}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary">
                Publicar Anúncio
            </Typography>
            <Typography component="h5" variant="h5" align="center" color="textPrimary">
                Quanto mais detalhado melhor!
            </Typography>
        </Container>

        <Container maxWidth="md" sx={{pb:3}}>
            <Box  bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Titulo do anúncio
                </Typography>
                <TextField
                    label="ex. : Bola de basquete "
                    size="small"
                    fullWidth
                />
                <br/><br/>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Categoria
                </Typography>
                <Select
                    native
                    value=""
                    fullWidth
                    onChange={() => {}}
                    inputProps={{
                        name: 'age',
                    }}
                >

                    <option value="">Selecione</option>
                    <option value={1}>Bebê e criança</option>
                    <option value={1}>Agricultura</option>
                    <option value={1}>Moda</option>
                    <option value={1}>Veículos</option>
                    <option value={1}>Serviços</option>
                    <option value={1}>Lazer</option>
                    <option value={1}>Animais</option>
                    <option value={1}>Moveis, Casa e Jardim</option>
                    <option value={1}>Imóveis</option>
                    <option value={1}>Equipamentos</option>
                    <option value={1}>Celulares e Tablets</option>
                    <option value={1}>Esporte</option>
                    <option value={1}>Tecnologia</option>
                    <option value={1}>Outros</option>


                </Select>
            </Box>
        </Container>

        <Container maxWidth="md" sx={{pb:3}}>
            <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Imagens
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary">
                    A primeira imagem é a foto principal do seu anúncio.
                </Typography>
            </Box>                    
        </Container>

        <Container maxWidth="md" sx={{pb:3}}>
            <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Descrição
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary">
                    Escreva os detalhes do que está vendendo 
                </Typography>
                <TextField
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                />
            </Box>                    
        </Container>

        <Container maxWidth="md" sx={{pb:3}}>
            <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                    Dados de contato
                </Typography>
            
                <TextField
                    label="Nome"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br/><br/>

                <TextField
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br/><br/>
                <TextField
                    label="Telefone"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br/><br/>
                
            </Box>                    
        </Container>
        
        <Container maxWidth="md" sx={{pb:3}}>
            <Box textAlign={'right'}>
                <Button variant="contained" color="primary">
                    Publicar
                </Button>
            </Box>
        </Container>

    </TemplateDefault>

)

export default Publish