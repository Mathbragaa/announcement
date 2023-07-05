'use client'
import themeDefault from "@/components/Theme/theme";
import {
    Box,
    Container,
    Grid,
    Typography,
    Chip,
    Card,
    CardHeader,
    Avatar,
    CardMedia,
} from "@mui/material";

import Carousel from "react-material-ui-carousel";

export default function Product () {
    return(
        <>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box
                            sx={{
                                bgcolor: themeDefault.palette.background.default,
                                p:3,
                                mb:3,
                            }}
                        >
                            <Carousel
                                autoPlay={false}
                                animation="slide"

                            >
                                <Card sx={{height:'100%'}}>
                                    <CardMedia
                                        sx={{pt:'56%'}}
                                        image="https://source.unsplash.com/random?a=1"
                                        title="Titulo da imagem"
                                    />
                                </Card>

                                <Card sx={{height:'100%'}}>
                                    <CardMedia
                                        sx={{pt:'56%'}}
                                        image="https://source.unsplash.com/random?a=2"
                                        title="Titulo da imagem"
                                    />
                                </Card>
                            </Carousel>
                        </Box>

                        <Box
                            sx={{
                                bgcolor: themeDefault.palette.background.default,
                                p:3,
                                mb:3,
                            }}
                        >
                            <Typography component="span" variant="caption">Publicado em 05 de julho de 2023</Typography>
                            <Typography component="h4" variant="h4" sx={{margin:'15px 0'}}>Ford Ka 1.0 SE PLUS</Typography>
                            <Typography component="h4" variant="h4" sx={{fontWeight:'bold', marginBottom:'15px'}}>R$ 45.000,00</Typography>
                            <Chip label="Categoria"/>
                        
                        </Box>

                        <Box
                            sx={{
                                bgcolor: themeDefault.palette.background.default,
                                p:3,
                                mb:3,
                            }}
                        >
                            <Typography component="h6" variant="h6">
                                Descrição
                            </Typography>
                            <Typography component="p" variant="body2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque commodi autem officia distinctio tempore pariatur hic eveniet quisquam, cupiditate alias reiciendis omnis reprehenderit, sint non, est assumenda velit nobis eaque!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card 
                            elevation={0}
                            sx={{
                                bgcolor: themeDefault.palette.background.default,
                                p:3,
                                mb:3,
                            }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar>B</Avatar>
                                }
                                title="Matheus Braga"
                                subheader="braga@email.com"
                            />
                            <CardMedia
                                image="https://source.unsplash.com/random"
                                title="Matheus Braga"
                            />
                        </Card>

                        <Box
                            sx={{
                                bgcolor: themeDefault.palette.background.default,
                                p:3,
                                mb:3,
                            }}
                        >
                            <Typography component="h6" variant="h6">
                                Localização
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}