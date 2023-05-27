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
const CreateItemCategory = () => {
   
  const navigate = useNavigate();
  const [CategoryName, SetCategoryName] = useState('');

  const [Status,SetStatus ] = useState('Status');


  const profilePicRef = useRef(null);

  const handleClick = async(e)=>{
        e.preventDefault()

         const formData = new FormData();
        formData.append('profilePic', profilePicRef.current.files[0]);
        formData.append('CategoryName', CategoryName);
        
        formData.append('Status', Status);

        const res = await fetch('http://localhost:5000/CreateCategory', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        if (res.ok) {
          SetCategoryName('');
         
          SetStatus('')
      navigate('/base/SystemReference/MerchantCategory');
        } 
       
        else {
            console.log('Error:', data.message);
          }
    }
     
    return (  
      <CRow>

        
<CCardHeader>
        <strong>Create Category</strong>
      </CCardHeader>
    
            <form className="form-container" onSubmit={handleClick}>
            <CRow>
        <CFormInput
                  type="file"
                  size="lg"
                  id="profilePic"
                  name="profilePic"
                  label="Select Profile Pic"
                  placeholder="Select Profile Pic"
                  ref={profilePicRef}
                />
        </CRow>
        <div className="form-group">
    <label htmlFor="CompanyNameInput">Category Name</label>
    <input
      className="form-control"
      type="text"
      id="CategoryName"
      placeholder="Company Name"
      value={CategoryName}
      onChange={(e) => SetCategoryName(e.target.value)}
    />
  </div>

         

  
<CTableDataCell>
                  {item.status}
                  <select
                    className="form-control"
                    value={item.status}
                    onChange={(e) => {
                      const updatedData = data.map((d) => {
                        if (d._id === item._id) {
                          return { ...d, status: e.target.value };
                        }
                        return d;
                      });
                      setData(updatedData);
                    }}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </CTableDataCell>
  <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
            
           
       </form>
            </CRow>
    );
  }
  
export default CreateItemCategory;