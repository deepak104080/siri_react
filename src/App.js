import React, { useEffect, useState } from 'react';
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
import LiftState from './comp/LiftState';
import Parent from './context/Parent';
import ContextParent from './context/ContextParent';
import CountryList from './comp/CountryList';
import CountryDetail from './comp/CountryDetail';
import Login from './comp/Login';
import Dashboard from './comp/Dashboard';
import Country from './hoc/Country';
import City from './hoc/City';
import Ref_Fn from './ref/Ref_Fn';
import Ref_Class from './ref/Ref_Class';
import Ref_Parent from './ref/Ref_Parent';
import UseMemo from './hook/UseMemo';
import UseCallback from './hook/UseCallback';

export const GlobalContext = React.createContext();

function App() {

  const initialObj = {
    bgColor: '',
    loginStatus: false,
    userName: ''
  }

  const [store, setStore] = useState(initialObj);

  useEffect(() => {
    console.log(store);
  })

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{store, setStore}}>
        <div className='app-container' style={{background: store.bgColor}}>
        <div className="container" style={{background: store.bgColor}}>
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
          <Route path='/liftstate' element={<LiftState />}/>
          <Route path='/propsdrilling' element={<Parent />}/>
          <Route path='/context' element={<ContextParent />}/>
          <Route path='/countrylist' element={<CountryList />}/>
          <Route path='/countrydetail/:id' element={<CountryDetail />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/login' element={<Login />}/>
          
          <Route path='/apps'>
            <Route path='app1' element={<CounterFunctional />}/>
            <Route path='app2' element={<ShowHide />}/>
            <Route path='app3' element={<Loop />}/>
          </Route>
          <Route path='/country' element={<Country />}/>
          <Route path='/city' element={<City />}/>
          <Route path='/reffn' element={<Ref_Fn />}/>
          <Route path='/refclass' element={<Ref_Class />}/>
          <Route path='/refparent' element={<Ref_Parent />}/>
          <Route path='/usememo' element={<UseMemo />}/>
          <Route path='/usecallback' element={<UseCallback />}/>


          <Route path='/' element={<Root />}/>
          <Route path='/*' element={<NotFound />}/>

        </Routes>
        <Footer/>

      </div>
      </div>
      </GlobalContext.Provider>
    </BrowserRouter>   
  );
}

export default App;