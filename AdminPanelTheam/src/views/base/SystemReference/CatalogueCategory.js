import React, { useRef, useState } from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,CButton,
  CRow,CFormInput,CFormSelect,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui'
import { useNavigate } from 'react-router-dom';

const CatalogueCategory=()=>{
   
  const navigate = useNavigate();
  const [ItemCategory , SetItemCategory] = useState('');
  const [ DisputeReason,SetDisputeReason ] = useState('');
  const [ ItemDescription,SetItemDescription ] = useState('');
  const [Status , setStatus] = useState('');
  
  const profilePicRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profilePic', profilePicRef.current.files[0]);
    formData.append('ItemCategory', ItemCategory);
    formData.append('DisputeReason', DisputeReason);
    formData.append('ItemDescription', ItemDescription);
    formData.append('Status', Status);

    const res = await fetch('http://localhost:5000/CatalogueCategory', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      SetItemCategory('');
      SetDisputeReason('');
      SetItemDescription('');
      setStatus('');
      navigate('/base/SystemReference/ItemCatalogue');
    } else {
      console.log('Error:', data.message);
    }

    }
     
    return (
      <CRow>
        <CCardHeader>
          <strong>Create Catalogue</strong>
        </CCardHeader>
        <form onSubmit={handleClick}>
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
        
          
          <CRow>
            <CCol xs={3}>
              <CFormInput
                className="mb-1"
                size="lg"
                type="text"
                id="DisputeReasonInput"
                placeholder="Dispute Reason"
                value={DisputeReason}
                onChange={(e) => SetDisputeReason(e.target.value)}
              />
            </CCol>
          </CRow>
         
          <CRow>
            <CCol xs={3}>
              <CFormInput
                className="mb-1"
                size="lg"
                type="text"
                id="ItemDescriptionInput"
                placeholder=" ItemDescription "
                value={ItemDescription}
                onChange={(e) => SetItemDescription(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
          <label htmlFor="CountryInput"> ItemCategory</label>
    <select
      className="form-control"
      id="ItemCategory"
      value={ItemCategory}
      onChange={(e) => SetItemCategory(e.target.value)}
    >
      <option value="">ItemCategory</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>

    <label htmlFor="CountryInput">Status </label>
    <select
      className="form-control"
      id="CountryInput"
      value={Status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="">status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
            <CCol xs={3}>
                    <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                  </CCol>
          </CRow>
      </form>
          </CRow>
  
    )}
    export default CatalogueCategory