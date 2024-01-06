import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    useToast,
    Input,
    Heading,
    Button,
    Box,
    Flex,
  } from '@chakra-ui/react'
import axiosInstance from '../../utils/axiosInstance'

const CustomerForm = () => {
    const toast = useToast()
    const [customerFormData, setCustomerFormData] = useState({
        customer_name:'',
        customer_address:'',
        mobile_no:'',
        email:'',
    })

    const handleChange =  (e) => {
        const {name, value} = e.target;
        setCustomerFormData({
            ...customerFormData,
            [name]:value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
       const  data = {
        customer_name:customerFormData.customer_name,
        customer_address:customerFormData.customer_address,
        mobile_no:customerFormData.mobile_no,
        email:customerFormData.email,
        }
        
        
        try {
            const response = await axiosInstance.post('customer/create/', data);
            if(response.data){
                toast({
                    title: 'Customer Entry created successfull.',
                    status: 'success',
                    position:'top-right',
                    duration: 5000,
                    isClosable: true,
                  })
                  setCustomerFormData({
                    customer_name:'',
                    customer_address:'',
                    mobile_no:'',
                    email:'',
                  })

            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <Flex mx={'auto'} mt={'5%'} p={5} direction={'column'} justifyContent={'center'} boxShadow={'md'}  maxW={{md:'md', lg:'lg'}}>
         <Heading mx={'auto'} color={'blackAlpha.400'} size={'lg'}> Customer Form</Heading>
<FormControl>
  <FormLabel>Customer Name</FormLabel>
  <Input type='text' name='customer_name' value={customerFormData.customer_name} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Customer Address</FormLabel>
  <Input type='text' name='customer_address' value={customerFormData.customer_address} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Mobile No</FormLabel>
  <Input type='text'  name='mobile_no' maxLength={10} value={customerFormData.mobile_no} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Email</FormLabel>
  <Input type='email' name='email' value={customerFormData.email} onChange={handleChange} />
</FormControl>
<Button onClick={handleSubmit} bg={'teal.400'} _hover={{bg:'teal.600'}} color={'white'}  mt={2}>Save Customer</Button>
    </Flex>
  )
}

export default CustomerForm