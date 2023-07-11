"use client"

import { useFormik } from 'formik';

import {  
    Box,
    Button, 
    Typography, 
    Select,
    Container,
    FormControl, 
    FormHelperText,
    InputLabel,
    InputAdornment,
    MenuItem,
    Input,
  } from '@mui/material';

import {validationSchema} from '@/app/user/publish/formValues'  

import {FormValues} from '@/app/user/publish/interface'
import FileUpload from '@/components/FileUpload/FileUpload';

import themeDefault from '@/components/Theme/theme';


const Publish: React.FC = () => {
    
    const formik = useFormik<FormValues>({
        initialValues: {
          title: '',
          category: '',
          description: '',
          price: '',
          name: '',
          email: '',
          phone: '',
          images:[],

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          // Lógica para lidar com o envio do formulário
          console.log(values);
        },
      });

    return (
        <>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado melhor!
                </Typography>
            </Container>

            <form onSubmit={formik.handleSubmit}>
                    <Container maxWidth="md" sx={{ pb: 0}}>
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}> 
                            <FormControl  
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}>Titulo do anúncio</InputLabel>
                                <Input
                                    id="title"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                />
                                 <FormHelperText>
                                    {formik.touched.title && formik.errors.title}
                                </FormHelperText>
                            </FormControl> 

                            <br /><br />

                            <FormControl 
                                error={formik.touched.category && Boolean(formik.errors.category)}
                                fullWidth
                                variant="outlined"
                            > 
                                <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}>Categoria</InputLabel>
                                <Select
                                    id="category"
                                    name="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    fullWidth
                                >
                                    <MenuItem value="Bebê e criança">Bebê e criança</MenuItem>
                                    <MenuItem value="Agricultura">Agricultura</MenuItem>
                                    <MenuItem value="Moda">Moda</MenuItem>
                                    <MenuItem value="Veículos">Veículos</MenuItem>
                                    <MenuItem value="Serviços">Serviços</MenuItem>
                                    <MenuItem value="Lazer">Lazer</MenuItem>
                                    <MenuItem value="Animais">Animais</MenuItem>
                                    <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                                    <MenuItem value="Imóveis">Imóveis</MenuItem>
                                    <MenuItem value="Equipamentos">Equipamentos</MenuItem>
                                    <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                    <MenuItem value="Esporte">Esporte</MenuItem>
                                    <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                    <MenuItem value="Outros">Outros</MenuItem>
                                </Select>
                                <FormHelperText>
                                    {formik.touched.category && formik.errors.category}
                                </FormHelperText>
                            </FormControl>

                        </Box>
                    </Container>

                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <FileUpload
                            images={formik.values.images}
                            errors={formik.errors.images}
                            touched={formik.touched.images}
                            setFieldValue={formik.setFieldValue}
                        />
                    </Container>

                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>

                            <FormControl  
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel sx={{fontWeigth:400, color: themeDefault.palette.primary.main}}>Escreva os detalhes do que está vendendo</InputLabel>
                                <Input
                                    id="description"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    multiline
                                    rows={6}
                                />
                                <FormHelperText>
                                    {formik.touched.description && formik.errors.description}
                                </FormHelperText>
                            </FormControl>

                        </Box>
                    </Container >

                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                            <br/>
                            <FormControl  
                                error={formik.touched.price && Boolean(formik.errors.price)}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel sx={{fontWeigth:400, color: themeDefault.palette.primary.main}}>Preço de venda</InputLabel>
                                <Input
                                    id="price"
                                    name="price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                />
                                <FormHelperText>
                                    {formik.touched.price && formik.errors.price}
                                </FormHelperText>
                            </FormControl>
                        </Box>
                    </Container>

                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                Dados de contato
                            </Typography>

                            <FormControl  
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}>Nome</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                 <FormHelperText>
                                    {formik.touched.name && formik.errors.name}
                                </FormHelperText>
                            </FormControl> 
                            <br /><br />

                            <FormControl  
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}> E-mail</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                 <FormHelperText>
                                    {formik.touched.email && formik.errors.email}
                                </FormHelperText>
                            </FormControl> 
                            <br /><br />

                          <FormControl  
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}>Telefone</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                                 <FormHelperText>
                                    {formik.touched.phone && formik.errors.phone}
                                </FormHelperText>
                            </FormControl> 
                            <br /><br />

                        </Box>
                    </Container>

                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Box textAlign={'right'}>
                            <Button type="submit" variant="contained" color="primary">
                                Publicar
                            </Button>
                        </Box>
                    </Container>   
            </form>                            
        </>
    );
}

export default Publish