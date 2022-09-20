import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
// import Sidebar from './common/Sidebar';
import Navbar from './common/Navbar';

import Home from './Home';
import About from './About';
import Root from './theme/Root';
import NotFound from './NotFound';
import CounterFunctional from './theme/CounterFunctional';
import ShowHide from './theme/ShowHide';
import Loop from './theme/Loop';
import Input from './theme/Input';
import Form from './comp/Form';
import FormValidation from './comp/FormValidation';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Navbar />
        {/* <Sidebar/> */}
        
        
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/root' element={<Root />}/>
          <Route path='/counterfn' element={<CounterFunctional />}/>
          <Route path='/showhide' element={<ShowHide />}/>
          <Route path='/loop' element={<Loop />}/>
          <Route path='/input' element={<Input />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='/formvalidation' element={<FormValidation />}/>
          {/* pass data through url */}






          <Route path='/' element={<Root />}/>
          <Route path='/*' element={<NotFound />}/>

        </Routes>
        <Footer/>

      </div>
    </BrowserRouter>   
  );
}

export default App;
