import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
   Stack,
} from '@chakra-ui/react'
// import '../css/login.css'
import axiosInstance from '../../utils/axiosInstance';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';



function SignInComponent() {

    const [userLoginData, setUserLoginData] = useState({
        username: '',
        password: '',
      });
      const  Navigate = useNavigate()
      const {accessToken} = useAuth()



      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserLoginData({
          ...userLoginData,
          [name]: value,
        });
      };
      
    
      const signInForm = async (e) => {
        e.preventDefault();
        try {
          const response = await axiosInstance.post('token/', userLoginData);
    
          if (response.status === 200) {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            Navigate('/')
          } else {
            throw new Error('Invalid login details'); // Throw an error for incorrect credentials
          }
          Navigate(0)
        } catch (error) {
          console.error(error.message); // Log the error message
        }
      };
    
     

      useEffect(()=>{
       try {
        if(accessToken){
          Navigate('/')
        }
      } catch (error) {
        
      }
      }, [Navigate, accessToken])
      return (
       
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
         <Stack spacing="8">
           <Stack spacing="6">
             
             <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
               <Heading color={'blue.400'} size={{ base: 'xs', md: 'md', lg:'lg' }}>Log in to your account</Heading>
             </Stack>
           </Stack>
           <Box
             py={{ base: '0', sm: '8' }}
             px={{ base: '4', sm: '10' }}
             bg={{ base: 'transparent', sm: 'bg.surface' }}
             boxShadow={{ base: 'none', sm: 'lg' }}
             borderRadius={{ base: 'none', sm: 'xl' }}
           >
             <Stack spacing="6">
               <Stack spacing="5">
                 <FormControl >
                   <FormLabel htmlFor="email">Username</FormLabel>
                   <Input value={userLoginData.username} name='username' onChange={handleChange} id="email" type="email" />
                 </FormControl>
                 <FormControl>
                   <FormLabel htmlFor="email">Password</FormLabel>
                   <Input value={userLoginData.password} name='password' onChange={handleChange} id="email" type="password" />
                 </FormControl>
              
               </Stack>
               
               <Stack spacing="6">
                 <Button color={'white'} bg={'blue.300'} _hover={{bg:'blue.600'}} onClick={signInForm}>Sign in</Button>
               
               </Stack>
             </Stack>
           </Box>
         </Stack>
       </Container>
      );
    };
export default SignInComponent;