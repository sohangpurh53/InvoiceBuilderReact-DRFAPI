import React, { useState } from 'react'
import { Flex, Button, IconButton, HStack, Box, VStack, useDisclosure} from '@chakra-ui/react'

import InvoiceForm from './forms/InvoiceForm'
import Customer from './forms/Customer'
import CompanyForm from './forms/CompanyForm'
import PrdouctForm from './forms/ProductForm'
import { CloseIcon } from '@chakra-ui/icons';
import { CgMenuGridO } from "react-icons/cg";
import ListAllInvoices from './ListAllInvoices'

const Homepage = () => {
  const [activeComponent, setActiveComponent] = useState('InvoiceForm')
  const { isOpen, onToggle } = useDisclosure()
   
  const handleClick = (componentName) => {
    setActiveComponent(componentName);
    onToggle()
  };

  const renderComponent = ()=>{
    switch(activeComponent){
    case 'CustomerForm':
          return <Customer />;
    case 'CompanyForm':
          return <CompanyForm />;
    case 'PrdouctForm':
          return <PrdouctForm />;
    case 'InvoiceForm':
          return <InvoiceForm />;
    case 'ListAllInvoices':
          return <ListAllInvoices />;
    default:
         return <InvoiceForm/>
  }
  }
  

  return (
   <>
   <Flex  wrap={'wrap'}>
   <HStack  p="4"   bg={'gray.300'} color="white" w={{ base: '100%', md: '7.5%', lg:'5%' }}>
            <IconButton
            icon={isOpen ? <CloseIcon />: <CgMenuGridO  />
           }
           bg={'blackAlpha.400'}
           _hover={{bg:'blackAlpha.600'}}
           color={'white'}
              onClick={onToggle}
              aria-label="Toggle Navigation Bar"
              mx={'auto'}
            />
          </HStack>
   <VStack
            spacing={4}
            align="start"
            bg="gray.50"
            color="white"
            width={isOpen ? { base: '100%', md: '20%' } : '0'}
            p="4"
            transition="width 0.3s ease"
            overflow="hidden"
            visibility={isOpen ? 'visible' : 'hidden'}
            minH={'100vh'}
          >
   <Button bg={'blue.300'} color={'white'} _hover={{bg:'blue.500'}}  w={'100%'} onClick={() => handleClick('CustomerForm')}>Save Customer</Button>
   <Button bg={'blue.300'} color={'white'} _hover={{bg:'blue.500'}}  w={'100%'} onClick={() => handleClick('CompanyForm')}>Save Company</Button>
   <Button bg={'blue.300'} color={'white'} _hover={{bg:'blue.500'}}  w={'100%'} onClick={() => handleClick('PrdouctForm')}>Save Product</Button>
   <Button bg={'blue.300'} color={'white'} _hover={{bg:'blue.500'}}  w={'100%'} onClick={() => handleClick('InvoiceForm')}>Save Invoice</Button>
   <Button bg={'blue.300'} color={'white'} _hover={{bg:'blue.500'}}  w={'100%'} onClick={() => handleClick('ListAllInvoices')}>Invoices</Button>
      </VStack>
      <Box mt={5} mx={'auto'} flex="1" p={{ base: '4', md: '4' }}>
            {renderComponent()}
          </Box>
   </Flex>
   </>
  )
}

export default Homepage