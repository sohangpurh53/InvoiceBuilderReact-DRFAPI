import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    useToast,
    Input,
    Heading,
    Button,
    Flex,
  } from '@chakra-ui/react'
import axiosInstance from '../../utils/axiosInstance'

const CompanyForm = () => {
    const toast = useToast()
    const [sellerFormData, setSellerFormData] = useState({
        seller_name:'',
        mobile_no:'',
        email:'',
        seller_address:'',
    })

    const handleChange =  (e) => {
        const {name, value} = e.target;
        setSellerFormData({
            ...sellerFormData,
            [name]:value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
       const  data = {
        seller_name:sellerFormData.seller_name,
        mobile_no:sellerFormData.mobile_no,
        email:sellerFormData.email,
        seller_address:sellerFormData.seller_address,
        }
        
        
        try {
            const response = await axiosInstance.post('company/create/', data);
            if(response.data){
                toast({
                    title: 'Seller Entry created successfull.',
                    status: 'success',
                    position:'top-right',
                    duration: 5000,
                    isClosable: true,
                  })
                  setSellerFormData({
        seller_name:'',
        mobile_no:'',
        email:'',
        seller_address:'',
                  })

            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <Flex mx={'auto'} mt={'5%'} p={5} direction={'column'} justifyContent={'center'} boxShadow={'md'}  maxW={{md:'md', lg:'lg'}}>
         <Heading mx={'auto'} color={'blackAlpha.400'} size={'lg'}> Company Form</Heading>
<FormControl>
  <FormLabel>Seller Name</FormLabel>
  <Input type='text' name='seller_name' value={sellerFormData.seller_name} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Seller Address</FormLabel>
  <Input type='text' name='seller_address' value={sellerFormData.seller_address} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Mobile No</FormLabel>
  <Input type='text'  name='mobile_no' maxLength={10} value={sellerFormData.mobile_no} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Email</FormLabel>
  <Input type='email' name='email' value={sellerFormData.email} onChange={handleChange} />
</FormControl>
<Button onClick={handleSubmit} bg={'teal.400'} _hover={{bg:'teal.600'}} color={'white'}  mt={2}>Save Seller</Button>
    </Flex>
  )
}

export default CompanyForm