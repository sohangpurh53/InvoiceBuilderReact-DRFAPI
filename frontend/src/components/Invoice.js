import { Box, Heading, Table, Thead, Tbody, Tfoot, Tr, Th, Td, VStack, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function InvoiceComponent() {
    const {id} = useParams()
    const [invoiceData, setInvoiceData] = useState({products:{},
    customer:{}, 
    company_name:{},
  })
  const [totalAmount, setTotalAmount] = useState(0);    
    useEffect(()=>{
        const fetchInvoice = async()=>{
            try {
                const invoice = await axiosInstance(`invoice/${id}`)
                setInvoiceData(invoice.data)
               
            } catch (error) {
                console.log(error)
            }
        }
        fetchInvoice()
        
    },[id])

useEffect(() => {
          // Check if invoiceData.products is an array before using reduce
          if (Array.isArray(invoiceData.products)) {
            const calculatedTotal = invoiceData.products.reduce((total, product) => {
              const productTotal = product.product_price * product.product_quantity;
              return total + productTotal;
            }, 0);
      
            setTotalAmount(calculatedTotal);
          }
        }, [invoiceData.products]);
    
console.log(totalAmount)
    
    // if (Array.isArray(invoiceData.products)) {
    //   const total_Amount = invoiceData.products.reduce((total, product) => {
    //     const productTotal = product.product_price * product.product_quantity;
    //     return total + productTotal;
    //   }, 0);
    
    //   setInvoiceTotal(total_Amount);
    // } else {
    //   console.log("invoiceData.products is not an array");
    // }
   
     
   
   
  return (
    <Box >
      <Heading>Invoice</Heading>
      <VStack  spacing={6}>
        <Box>
          <Heading size="md">Customer Details</Heading>
          <Table variant="simple">
            <Tbody>
              
                <Tr>
                 <Td>Name:</Td>
                 <Td>{invoiceData.customer.customer_name}</Td>
                </Tr>

                <Tr>
                <Td>Email:</Td>
                 <Td>{invoiceData.customer.email}</Td>
                </Tr>

                <Tr>
                <Td>Address:</Td>
                 <Td>{invoiceData.customer.customer_address}</Td>
                </Tr>

                <Tr>
                <Td>Mobile No:</Td>
                 <Td>{invoiceData.customer.mobile_no}</Td>
                </Tr>
          
            </Tbody>
          </Table>
        </Box>
        <Box>
          <Heading size="md">Company Details</Heading>
          <Table variant="simple">
            <Tbody>
             
            <Tr>
                 <Td>Name:</Td>
                 <Td>{invoiceData.company_name.seller_name}</Td>
                </Tr>

                <Tr>
                <Td>Email:</Td>
                 <Td>{invoiceData.company_name.email}</Td>
                </Tr>

                <Tr>
                <Td>Address:</Td>
                 <Td>{invoiceData.company_name.seller_address}</Td>
                </Tr>

                <Tr>
                <Td>Mobile No:</Td>
                 <Td>{invoiceData.company_name.mobile_no}</Td>
                </Tr>
            
            </Tbody>
          </Table>
        </Box>
        <Box>
          <Heading size="md">Invoice Items</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Amount</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
            {Array.isArray(invoiceData.products) && invoiceData.products.map((product, index) => (
  <Tr key={index}>
    <Td>{product.product_name}</Td>
    <Td>
      <Text as="span" fontWeight="bold">
        ₹{product.product_price}/-
      </Text>
    </Td>
    <Td>
      <Text as="span" fontWeight="bold">
        {product.product_quantity}
      </Text>
    </Td>
  </Tr>
))}
               
          
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={2}>
                 <Text textAlign="right" fontWeight="bold">Total Amount: ₹{totalAmount}/-</Text>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      </VStack>
    
    </Box>
  );
}

export default InvoiceComponent;
