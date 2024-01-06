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

const ProductForm = () => {
    const toast = useToast()
    const [productFormData, setProductFormData] = useState({
        product_name:'',
        product_price:'',
        product_quantity:'',
    })

    const handleChange =  (e) => {
        const {name, value} = e.target;
        setProductFormData({
            ...productFormData,
            [name]:value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
       const  data = {
            product_name:productFormData.product_name,
            product_price:productFormData.product_price,
            product_quantity:productFormData.product_quantity,
        }
        console.log(data)
        
        try {
            const response = await axiosInstance.post('product/create/', data);
            if(response.data){
                toast({
                    title: 'Product Entry created successfull.',
                    status: 'success',
                    position:'top-right',
                    duration: 5000,
                    isClosable: true,
                  })
                  setProductFormData({
                product_name:'',
                product_price:'',
                product_quantity:'',
                  })

            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <Flex mx={'auto'} mt={'5%'} p={5} direction={'column'} justifyContent={'center'} boxShadow={'md'}  maxW={{md:'md', lg:'lg'}}>
         <Heading mx={'auto'} color={'blackAlpha.400'} size={'lg'}> Product Form</Heading>
<FormControl>
  <FormLabel>Product Name</FormLabel>
  <Input type='text' name='product_name' value={productFormData.product_name} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Product Price</FormLabel>
  <Input type='number' name='product_price' value={productFormData.product_price} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Product Quantity</FormLabel>
  <Input type='number' name='product_quantity' value={productFormData.product_quantity} onChange={handleChange} />
</FormControl>
<Button onClick={handleSubmit} bg={'teal.400'} _hover={{bg:'teal.600'}} color={'white'}  mt={2}>Save Product</Button>
    </Flex>
  )
}

export default ProductForm