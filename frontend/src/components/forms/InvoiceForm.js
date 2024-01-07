import React, { useEffect, useState } from 'react'
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

const InvoiceForm = () => {
    const toast = useToast()
    const [invoiceFormData, setInvoiceFormData] = useState({
        product_name:'',
        company_name:'',
        customer:'',
    })
    const [productOption, setProductOption] = useState([])
    const [companyOption, setCompanyOption] = useState([])
    const [customerOption, setCustomerOption] = useState([])


    useEffect(()=>{
    const fetchData = async ()=>{

        try {
            const [product, company, customer] = await Promise.all([
            axiosInstance('product/list/'),
            axiosInstance('company/list/'),
            axiosInstance('customer/list/'),
        ])
        setProductOption(product.data)
        setCompanyOption(company.data)
        setCustomerOption(customer.data)

        
        } catch (error) {
            console.log(error)
        }

    }
    fetchData()

    },[])

        console.log(customerOption)
        console.log(companyOption)
        console.log(productOption)
    const handleChange =  (e) => {
        const {name, value} = e.target;
        setInvoiceFormData({
            ...invoiceFormData,
            [name]:value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
       const  data = {
        product_name:invoiceFormData.product_name,
        company_name:invoiceFormData.company_name,
        customer:invoiceFormData.customer,
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
                  setInvoiceFormData({
                    product_name:'',
                    company_name:'',
                    customer:'',
                  })

            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <Flex mx={'auto'} mt={'5%'} p={5} direction={'column'} justifyContent={'center'} boxShadow={'md'}  maxW={{md:'md', lg:'lg'}}>
         {/* <Heading mx={'auto'} color={'blackAlpha.400'} size={'lg'}> Seller Form</Heading>
<FormControl>
  <FormLabel>Seller Name</FormLabel>
  <Input type='text' name='seller_name' value={} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Seller Address</FormLabel>
  <Input type='text' name='seller_address' value={} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Mobile No</FormLabel>
  <Input type='text'  name='mobile_no' maxLength={10} value={} onChange={handleChange} />
</FormControl>

<FormControl>
  <FormLabel>Email</FormLabel>
  <Input type='email' name='email' value={} onChange={handleChange} />
</FormControl>
<Button onClick={handleSubmit} bg={'teal.400'} _hover={{bg:'teal.600'}} color={'white'}  mt={2}>Save Seller</Button> */}
    </Flex>
  )
}

export default InvoiceForm