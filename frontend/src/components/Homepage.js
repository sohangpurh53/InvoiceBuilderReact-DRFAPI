import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Homepage = () => {
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
console.log(allInvoicesDisplay)
  return (
    <Box>
      {allInvoicesDisplay.map(invoice=>(<>
       <Text mx={4} fontWeight={'bold'}  key={invoice.id}>
          {invoice.id}
        </Text>
        <Link to={`invoice/${invoice.id}/`}>Invoice</Link>
      </>
       
      ))}    
      
    </Box>
  )
}

export default Homepage