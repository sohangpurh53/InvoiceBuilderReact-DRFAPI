import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductForm from './components/forms/ProductForm'
import Header from './Header'
import Footer from './Footer'
import Customer from './components/forms/Customer'
import InvoiceForm from './components/forms/InvoiceForm'

const App = () => {
  return (
    <Router>
      <Header/>
       <Box minH={'100vh'}>
      <Routes>
          <Route path='/product/form/' element={<ProductForm/>}/>
          <Route path='/product/form/' element={<Customer/>}/>
          <Route path='/product/form/' element={<ProductForm/>}/>
          <Route path='/invoice/form/' element={<InvoiceForm/>}/>
      </Routes>
     </Box>
     <Footer/>
    </Router>
    
  )
}

export default App