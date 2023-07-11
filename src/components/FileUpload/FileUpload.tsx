import {  
    Box,
    Typography, 
    IconButton,
  } from '@mui/material';

import { FormikErrors, FormikTouched} from 'formik';

import { useDropzone, FileWithPath} from 'react-dropzone';
import { DeleteForever } from '@mui/icons-material';

import themeDefault from '@/components/Theme/theme';
import {FileWithPreview} from '@/app/user/publish/interface'

interface FileUploadProps {
    images: Partial<FileWithPreview>[]; // Adicione o tipo do array de imagens
    errors: string | string[] | FormikErrors<FileWithPreview>[];
    touched: FormikTouched<FileWithPreview>[];
    setFieldValue: (field: string, value: Partial<FileWithPreview>[]) => void; // Adicione o tipo do valor de 'images' em setFieldValue
  }

export default function FileUpload ({
    images,
    errors,
    touched, 
    setFieldValue,
}: FileUploadProps) {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: FileWithPath[]) => {
          const newImages: Partial<FileWithPreview>[] = acceptedFiles.map((file) => ({
            preview: URL.createObjectURL(file),
            name: file.name,
          }));
    
          setFieldValue(
            'images',
            images ? images.concat(newImages) : newImages// Adiciona as novas imagens ao array existente
          );
        },
      });
    
      const handleRemoveImage = (fileName: string) => {
        setFieldValue(
          'images',
            images.filter((image) => image.name !== fileName) // Filtra as imagens com base no nome do arquivo
        );
      };

    return(
        <>
            <Box bgcolor={themeDefault.palette.background.default} sx={{ p: 3 }}>
                <Typography component="h6" variant="h6" color={errors ? 'error' : 'textPrimary'}>
                    Imagens
                </Typography>
                <Typography component="div" variant="body2" color={errors ? 'error' : 'textPrimary'}>
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

                        <Typography variant="body2" color={errors ? 'error' : 'textPrimary'}>
                            Clique para adicionar ou arraste para aqui
                        </Typography>
                    </Box>

                    {Array.isArray(images) &&
                    images.map((image, index) => (
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
                {touched && errors && (
                    <Typography variant="body2" color="error">
                            Campo obrigatório
                    </Typography>
                )}
            </Box>
        </>
    );
};