import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { Box, Text, Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const ListAllInvoices = () => {
    const [allInvoicesDisplay, setAllInvoiceDisplay] = useState([])

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
         const invoices = await axiosInstance('invoice/list/')
         setAllInvoiceDisplay(invoices.data) 
        } catch (error) {
          console.log(error.message)
        }
      }
      fetchData()
    }, [])

   
  return (
    <Flex wrap={'wrap'}>
      {allInvoicesDisplay.map(invoice=>(
      <Box maxW={'300px'} padding={3} key={invoice.id} mt={10} ml={4} mb={2} w={'25%'} boxShadow={'md'}>
       <Text mx={4} fontWeight={'bold'}  >
          {invoice.invoice_number}
        </Text>
        <Text>
          Invoice Of {invoice.customer.customer_name}
        </Text>
        <Button m={2} as={Link}  to={`/invoice/${invoice.id}/`}>View</Button>
        
      </Box>
       
      ))}    
      
    </Flex>
  )
}

export default ListAllInvoices