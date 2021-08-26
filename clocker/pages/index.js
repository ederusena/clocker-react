import { Logo } from '../components/Logo/';
import {
  Box,
  Text,
  Input,
  Button,
  Container,
  FormLabel,
  FormControl,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento obrigatório'),
  password: yup.string().required('Preenchimento obrigatório'),
  email: yup.string().required('Preenchimento obrigatório'),

});

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
  } = useFormik({
    onSubmit: (values, form) =>  {
      console.log('onSubmit', values, form);
    },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: '',
    }
  });

  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
          {touched.email && <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText> }
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
          {touched.password && <FormHelperText textColor="#e74c3c">{errors.password}</FormHelperText> }
        </FormControl>

        <FormControl id="username" p={4} isRequired>
          
          <FormControl id="username" p={4} isRequired>
            <InputGroup size='lg'>
              <InputLeftAddon children='clocker.work'/>
              <Input type="username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
            </InputGroup>
            {touched.username && <FormHelperText textColor="#e74c3c">{errors.username}</FormHelperText> }
          </FormControl>
        </FormControl>

        <Box p={4}>
          <Button colorScheme="blue" width="100%" onClick={handleSubmit} isLoading={isSubmitting}>Entrar</Button>
        </Box>
      </Box>

    </Container>
  )
}
