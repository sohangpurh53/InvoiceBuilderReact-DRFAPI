import { Box, Heading, Table, Thead, Tbody, Tfoot, Tr, Th, Td, VStack, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function InvoiceComponent() {
    const {id} = useParams()
    const [invoiceData, setInvoiceData] = useState([])
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
    console.log(invoiceData)
  return (
    <Box>
      {/* <Heading>Invoice</Heading>
      <VStack spacing={6}>
        <Box>
          <Heading size="md">Customer Details</Heading>
          <Table variant="simple">
            <Tbody>
              {inform.map((data, index) => (
                <Tr key={index}>
                 <Td>Name:</Td>
                 <Td>{data.customer_name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box>
          <Heading size="md">Company Details</Heading>
          <Table variant="simple">
            <Tbody>
              {companyform.map((data, index) => (
                <Tr key={index}>
                 <Td>Name:</Td>
                 <Td>{data.company_name}</Td>
                </Tr>
              ))}
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
              </Tr>
            </Thead>
            <Tbody>
              {inform.map((data, index) => (
                <Tr key={index}>
                 <Td>{data.item_name}</Td>
                 <Td><Text as="span" fontWeight="bold">₹{data.item_price}/-</Text></Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td colSpan={2}>
                 <Text textAlign="right" fontWeight="bold">Total Amount: ₹{total_amount}/-</Text>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      </VStack> */}
    </Box>
  );
}

export default InvoiceComponent;
