import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
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
import ClassComp from './ClassComp';
import EffectFunctional from './EffectFunctional';
import API_Functional from './API_Functional';
import API_Class from './API_Class';
import UseReducer from './hook/UseReducer';

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
          <Route path='/classcomp' element={<ClassComp />}/>
          <Route path='/effectFn' element={<EffectFunctional />}/>
          <Route path='/apifn' element={<API_Functional />}/>
          <Route path='/apiclass' element={<API_Class />}/>
          <Route path='/usereducer' element={<UseReducer />}/>
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
