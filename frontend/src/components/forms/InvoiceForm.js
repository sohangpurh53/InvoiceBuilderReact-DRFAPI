import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    useToast,
    Select,
    Heading,
    Button,
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
        
        console.log(data)
        try {
            const response = await axiosInstance.post('invoice/create/', data,
          {  headers: {
              'Content-Type': 'multipart/form-data',
            },}
            );
            if(response.data){
                toast({
                    title: 'Invoice Entry created successfull.',
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
        <Heading mx={'auto'} color={'blackAlpha.400'} size={'lg'}> Invoice Form</Heading>
<FormControl>
  <FormLabel>Product Name</FormLabel>
  <Select  name='product_name'  value={invoiceFormData.product_name} onChange={handleChange}>
  <option default>Select Product</option>
  {productOption.map(product=>(
     <option key={product.id} value={product.id}>{product.product_name}</option>
  ))}
    </Select> 
</FormControl>

<FormControl>
  <FormLabel>Customer Name</FormLabel>
  <Select name='customer'  onChange={handleChange} value={invoiceFormData.customer}>
  <option default>Select Customer</option>
  {customerOption.map(customer=>(
     <option key={customer.id} value={customer.id} >{customer.customer_name}</option>
  ))}
    </Select> 
</FormControl>

<FormControl>
  <FormLabel>Company Name</FormLabel>
  <Select name='company_name' onChange={handleChange} value={invoiceFormData.company_name}>
  <option default>Select Company</option>
  {companyOption.map(company=>(
     <option key={company.id} value={company.id} >{company.seller_name}</option>
  ))}
    </Select> 
</FormControl>




<Button onClick={handleSubmit} bg={'teal.400'} _hover={{bg:'teal.600'}} color={'white'}  mt={2}>Save Invoice</Button>
    </Flex>
  )
}

export default InvoiceForm