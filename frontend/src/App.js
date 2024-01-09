import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductForm from './components/forms/ProductForm'
import Header from './Header'
import Footer from './Footer'
import Customer from './components/forms/Customer'
import InvoiceForm from './components/forms/InvoiceForm'
import InvoiceComponent from './components/Invoice'
import Homepage from './components/Homepage'
import ListAllInvoices from './components/ListAllInvoices'
import SignInComponent from './components/auth/Signin'
import SignOutComponent from './components/auth/SignOut'




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
          <Route path='/invoice/' element={<InvoiceComponent/>}/>
          <Route path='/invoice/:id/' element={<InvoiceComponent/>}/>
          <Route path='/invoice/all/' element={<ListAllInvoices/>}/>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signin/' element={<SignInComponent/>}/>
          <Route path='/signout/' element={<SignOutComponent/>}/>
      </Routes>
     </Box>
     <Footer/>
    </Router>
    
  )
}

export default App