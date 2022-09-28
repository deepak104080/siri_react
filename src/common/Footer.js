import React, { useContext } from 'react';
import { GlobalContext } from '../App';

const Footer = () => {
  const localContext = useContext(GlobalContext);
  const {store, setStore} = localContext;
  return (
    <div className="row bg-info bg-opacity-50">
                    <div className="col-4">
                        <h3>Footer</h3>
                    </div>
                    <div className="col-8">
                        <div style={{background: '#EC7272'}} className="bg-box" onClick={() => setStore({...store, bgColor: '#EC7272'})}></div>
                        <div style={{background: '#F7A76C'}} className="bg-box" onClick={() => setStore({...store, bgColor: '#F7A76C'})}></div>
                        <div style={{background: '#E0D98C'}} className="bg-box" onClick={() => setStore({...store, bgColor: '#E0D98C'})}></div>
                        <div style={{background: '#C3FF99'}} className="bg-box" onClick={() => setStore({...store, bgColor: '#C3FF99'})}></div>
                    </div>
                </div>
  )
}

export default Footer
