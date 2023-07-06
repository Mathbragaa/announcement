"use client"

import { useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {  
    Box,
    Button, 
    Typography, 
    TextField,
    Select,
    Container,
    IconButton,
    FormControl, 
    FormHelperText,
    InputLabel,
    OutlinedInput,
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
});  

import { DeleteForever } from '@mui/icons-material';

import themeDefault from '@/components/Theme/theme';


const Publish: React.FC = () => {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
        },
        onDrop: (acceptedFiles: FileWithPath[]) => {

            const newFiles: FileWithPreview[] = acceptedFiles.map((file) => {
                const fileWithPreview: FileWithPreview = Object.assign(file, {
                    preview: URL.createObjectURL(file),
                });
                return fileWithPreview;
            });

            setFiles([
                ...files,
                ...newFiles,
            ]);
        },
    });

    const handleRemoveFile = (fileName:any) => {
        const newFileState:any= files.filter(file=>file.name !== fileName)
        setFiles(newFileState)
    }

    const formik = useFormik<FormValues>({
        initialValues: {
          title: '',
          category: '',
          description: '',
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
                            > 
                                <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}>Categoria</InputLabel>
                                <Select
                                    id="category"
                                    name="category"
                                    value={formik.values.category}
                                    fullWidth
                                    onChange={formik.handleChange}
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
                            <Typography component="h6" variant="h6" color="textPrimary">
                                Imagens
                            </Typography>
                            <Typography component="div" variant="body2" color="textPrimary">
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
                                    <input {...getInputProps()} />

                                    <Typography variant="body2" color="textPrimary">
                                        Clique para adicionar ou arraste para aqui
                                    </Typography>
                                </Box>

                                {files.map((file, index) => (
                                    <Box
                                        key={file.name}
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
                                        style={{ backgroundImage: `url(${file.preview})` }}
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
                                            <IconButton color='secondary' onClick={()=>handleRemoveFile(file.name)}>
                                                <DeleteForever fontSize='large' />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                ))}


                            </Box>
                        </Box>
                    </Container>

                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>

                            <FormControl  
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                fullWidth
                            >
                                <InputLabel sx={{fontWeigth:400, color: themeDefault.palette.primary.main}}>Escreva os detalhes do que está vendendo</InputLabel>
                                <Input
                                    id="description"
                                    name="description"
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
                        <Typography component="h6" variant="h6" color="textPrimary">
                                Preço
                            </Typography>
                            <br/>
                            <FormControl fullWidth variant="outlined">
                            <InputLabel variant="outlined">Valor</InputLabel>
                            <OutlinedInput
                                onChange={()=>{}}
                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                label={1000}
                            />
                            </FormControl>
                        </Box>
                    </Container>

                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                Dados de contato
                            </Typography>

                            <TextField
                                label="Nome"
                                variant="outlined"
                                size="small"
                                fullWidth />
                            <br /><br />

                            <TextField
                                label="E-mail"
                                variant="outlined"
                                size="small"
                                fullWidth />
                            <br /><br />
                            <TextField
                                label="Telefone"
                                variant="outlined"
                                size="small"
                                fullWidth />
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