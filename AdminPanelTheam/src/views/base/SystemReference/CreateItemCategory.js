


import React, { useRef, useState } from 'react';
import {
  CCard,CCardBody,CCardHeader,
  CCol,CButton,CRow,
  CFormInput,CFormSelect,
} from '@coreui/react';

import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import './App.css'
import { useNavigate } from 'react-router-dom';
const CreateCategory = () => {
   
  const navigate = useNavigate();
  
  const [MerchantCategory,SetMerchantCategory ] = useState('');
  const [ItemCategoryName,SetItemCategoryName ] = useState('');
const [Status,SetStatus]= useState('')

  const handleClick = async(e)=>{
        e.preventDefault()

         const formData = new FormData();
        
        
        formData.append('MerchantCategory', MerchantCategory);
        formData.append('ItemCategoryName', ItemCategoryName);

        const res = await fetch('http://localhost:5000/CreateItemCategory', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        if (res.ok) {
          SetMerchantCategory('');
          SetItemCategoryName('');
          SetStatus(''); 
          navigate('/base/SystemReference/ItemCategory');

        } else {
            console.log('Error:', data.message);
          }
    }
     
    return (  
      <CRow>

        
<CCardHeader>
        <strong>Create Category</strong>
      </CCardHeader>
    
            <form className="form-container" onSubmit={handleClick}>

            <div className="form-group">
    <label htmlFor="StatusInput">MerchantCategory </label>
    <select
      className="form-control"
      id="StatusInput"
      value={MerchantCategory}
      onChange={(e) => SetMerchantCategory(e.target.value)}
    >
      <option value="">Merchant Category</option>
      <option value="Active">0</option>
      <option value="Inactive">1</option>
    </select>
  </div>

          <div className="form-group">
    <label htmlFor="TradeNameInput">ItemCategory </label>
    <input
      className="form-control"
      type="text"
      id="ItemCategoryName"
      placeholder="ItemCategoryName"
      value={ItemCategoryName}
      onChange={(e) => SetItemCategoryName(e.target.value)}
    />
  </div>




  <div className="form-group">
    <label htmlFor="StatusInput">Status </label>
    <select
      className="form-control"
      id="StatusInput"
      value={Status}
      onChange={(e) => SetStatus(e.target.value)}
    >
      <option value="">Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  </div>
  <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
            
           
       </form>
            </CRow>
    );
  }
  
export default CreateCategory;