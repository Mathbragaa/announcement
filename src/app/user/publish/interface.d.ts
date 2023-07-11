import {FileWithPath} from 'react-dropzone';

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
    password: string;
    passwordConf: string;
}


export{
 FormValues, FileWithPreview
}