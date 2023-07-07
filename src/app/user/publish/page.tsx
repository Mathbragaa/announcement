"use client"

import { useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {  
    Box,
    Button, 
    Typography, 
    Select,
    Container,
    IconButton,
    FormControl, 
    FormHelperText,
    InputLabel,
    InputAdornment,
    MenuItem,
    Input,
  } from '@mui/material';

import { useDropzone, FileWithPath} from 'react-dropzone';

interface FileWithPreview extends FileWithPath {
    preview: string;
    name: string;
}

interface FormValues {
    title: string;
    category: string;
    description: string;
    price: string;
    name: string;
    email: string;
    phone: string;
    images:FileWithPreview[];

}

const validationSchema = yup.object({
    title: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'O título deve ter pelo menos 6 caracteres')
      .max(80, 'O título deve ter no máximo 80 caracteres'),

      category: yup
      .string()
      .required('Campo obrigatório'),

      description: yup
      .string()
      .required('Campo obrigatório')
      .min(50, 'A descrição deve ter pelo menos 50 caracteres'),

      price: yup
      .number()
      .required('Campo obrigatório'),

      name: yup
      .string()
      .required('Campo obrigatório'),

      email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('Campo obrigatório'),

      phone: yup
      .number()
      .required('Campo obrigatório'),

      images: yup
      .array()
      .min(1,'Selecione pelo menos uma imagem')
      .required('Campo obrigatório'),

});  

import { DeleteForever } from '@mui/icons-material';

import themeDefault from '@/components/Theme/theme';


const Publish: React.FC = () => {
      
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: FileWithPath[]) => {
          const newImages: Partial<FileWithPreview>[] = acceptedFiles.map((file) => ({
            preview: URL.createObjectURL(file),
            name: file.name,
          }));
    
          formik.setFieldValue(
            'images',
            formik.values.images.concat(newImages) // Adiciona as novas imagens ao array existente
          );
        },
      });
    
      const handleRemoveImage = (fileName: string) => {
        formik.setFieldValue(
          'images',
          formik.values.images.filter((image) => image.name !== fileName) // Filtra as imagens com base no nome do arquivo
        );
      };
    
      

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
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                            <Typography component="h6" variant="h6" color={formik.errors.images ? 'error' : 'textPrimary'}>
                                Imagens
                            </Typography>
                            <Typography component="div" variant="body2" color={formik.errors.images ? 'error' : 'textPrimary'}>
                                A primeira imagem é a foto principal do seu anúncio.
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap:'wrap',
                                    marginTop:'15px',
                                }}
                            >
                                <Box
                                    {...getRootProps()}
                                    bgcolor={themeDefault.palette.background.paper}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        padding:'10px',
                                        width: 176,
                                        height: 126,
                                        margin:'0 15px 15px 0',
                                        border: '2px dashed black',
                                    }}
                                >
                                    <input name="images" {...getInputProps({ accept: 'image/*' })} />

                                    <Typography variant="body2" color={formik.errors.images ? 'error' : 'textPrimary'}>
                                        Clique para adicionar ou arraste para aqui
                                    </Typography>
                                </Box>

                                {Array.isArray(formik.values.images) &&
                                formik.values.images.map((image, index) => (
                                    <Box
                                        key={image.name}
                                        sx={{
                                            position: 'relative',
                                            width: 200,
                                            height: 150,
                                            backgroundSize: 'cover',
                                            margin:'0 15px 15px 0',
                                            backgroundPosition: 'center center',
                                            '&:hover': {
                                                '& .child-box': {
                                                    display: 'flex',
                                                },
                                            },
                                        }}
                                        style={{ backgroundImage: `url(${image.preview})` }}
                                    >
                                        {
                                            index === 0 ?
                                            <Box
                                                className="mainImage"
                                                sx={{
                                                    backgroundColor: 'blue',
                                                    padding: '6px 10px',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                }}
                                            >
                                                <Typography color="secondary">
                                                    Principal
                                                </Typography>
                                            </Box> 
                                            :null
                                        }
                                        <Box
                                            className="child-box"
                                            sx={{
                                                display: 'none',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                backgroundColor: 'rgba(0,0,0,0.7)',
                                                width: '100%',
                                                height: '100%',
                                                '&:hover': {
                                                    display: 'flex',
                                                },
                                            }}
                                        >
                                            <IconButton color='secondary' onClick={()=>handleRemoveImage(image.name)}>
                                                <DeleteForever fontSize='large' />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            {formik.touched.images && formik.errors.images && (
                                <Typography variant="body2" color="error">
                                     Campo obrigatório
                                </Typography>
                            )}
                        </Box>
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