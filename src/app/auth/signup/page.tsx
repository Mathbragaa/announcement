"use client"

import { useFormik} from 'formik';
import {validationSchema, initialValues} from '@/app/auth/signup/formValues'  
import {FormValues} from '@/app/auth/signup/interface'

import {  
    Box,
    Button, 
    Typography, 
    Container,
    FormControl, 
    FormHelperText,
    InputLabel,
    Input,
  } from '@mui/material';

import styles from './styles.module.css'
import themeDefault from '@/components/Theme/theme';



export default function Signup (){

    const formik = useFormik<FormValues>({
        initialValues,  
        validationSchema: validationSchema,
        onSubmit: (values) => {
          // Lógica para lidar com o envio do formulário
          console.log('ok, form enviado', values);
        },
      });

    return(
        <>
            <Container maxWidth="sm" component="main"> 
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Crie sua conta
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    E anuncie para todo o Brasil
                </Typography>
            </Container>

            <Container maxWidth="md">
                <Box className={styles.box}>
                    <form onSubmit={formik.handleSubmit}>

                        <FormControl  
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            fullWidth
                            variant="outlined"
                            className={styles.formControl}
                        >
                            <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}>Nome</InputLabel>
                            <Input
                                id="name"
                                name="name"
                                type="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                                <FormHelperText>
                                {formik.touched.name && formik.errors.name}
                            </FormHelperText>
                        </FormControl> 

                        <FormControl  
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            fullWidth
                            variant="outlined"
                            className={styles.formControl}
                        >
                            <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}> E-mail</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                                <FormHelperText>
                                {formik.touched.email && formik.errors.email}
                            </FormHelperText>
                        </FormControl> 

                        <FormControl  
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            fullWidth
                            variant="outlined"
                            className={styles.formControl}
                        >
                            <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}>Senha</InputLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                                <FormHelperText>
                                {formik.touched.password && formik.errors.password}
                            </FormHelperText>
                        </FormControl> 
                        
                        <FormControl  
                            error={formik.touched.passwordConf && Boolean(formik.errors.passwordConf)}
                            fullWidth
                            variant="outlined"
                            className={styles.formControl}
                        >
                            <InputLabel sx={{fontWeigth:400, color:themeDefault.palette.primary.main}}> Confirmação de senha</InputLabel>
                            <Input
                                id="passwordConf"
                                name="passwordConf"
                                type="password"
                                value={formik.values.passwordConf}
                                onChange={formik.handleChange}
                            />
                                <FormHelperText>
                                {formik.touched.passwordConf && formik.errors.passwordConf}
                            </FormHelperText>
                        </FormControl> 

                        <Button 
                            type="submit" 
                            fullWidth
                            variant="contained" 
                            color="primary"
                            className={styles.submit}
                        >
                                Cadastrar
                        </Button>

                    </form>     
                </Box>                
            </Container>
        </>
    );
};