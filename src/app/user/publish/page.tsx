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
    InputLabel,
    OutlinedInput,
    InputAdornment,
  } from '@mui/material';

import { useDropzone, FileWithPath} from 'react-dropzone';

interface FileWithPreview extends FileWithPath {
    preview: string;
    name: string;
}
interface FormValues {
    title: string;
}

const validationSchema = yup.object({
    title: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'O título deve ter pelo menos 6 caracteres')
      .max(80, 'O título deve ter no máximo 80 caracteres'),
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
                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                            <Typography component="h6" variant="h6" color="textPrimary">
                                Titulo do anúncio
                            </Typography>
                            <TextField
                                id="title"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                                label="ex. : Bola de basquete "
                                size="small"
                                fullWidth />
                            <br /><br />
                            <Typography component="h6" variant="h6" color="textPrimary">
                                Categoria
                            </Typography>
                            <Select
                                native
                                value=""
                                fullWidth
                                onChange={() => { } }
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
                                fullWidth />
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