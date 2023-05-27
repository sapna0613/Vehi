import React, { useRef, useState } from 'react';
import {
  CCard,CCardBody,CCardHeader,
  CCol,CButton,CRow,CTimePicker,
  CFormInput,CFormSelect,
} from '@coreui/react';

import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import './App.css'
import { useNavigate } from 'react-router-dom';


const CreateMerchants = () => {
   
  const navigate = useNavigate();
  const [CompanyName, setCompanyName] = useState('');
  const [TradeName, setTradeName] = useState('');
  const [StoreAddress, setStoreAddress] = useState('');
  const [MerchantCategory, setMerchantCategory] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [CoverageState, setCoverageState] = useState('');
  const [Country, setCountry] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [Commission, setCommission] = useState('');
  const [DeliveryOptions, setDeliveryOptions] = useState('');
  const [Status, setStatus] = useState('');
   const profilePicRef = useRef(null);

    const handleClick = async(e)=>{
        e.preventDefault()
        
        const formData = new FormData();
        formData.append('profilePic', profilePicRef.current.files[0]);
        formData.append('CompanyName', CompanyName);
        formData.append('TradeName', TradeName);
        formData.append('StoreAddress', StoreAddress);
        formData.append('MerchantCategory', MerchantCategory);
        formData.append('EmailId', EmailId);
        formData.append('MobileNumber', MobileNumber);
        formData.append('CoverageState', CoverageState);
        formData.append('Country', Country);
        formData.append('State', State);
        formData.append('City', City);
        formData.append('Commission', Commission);
        formData.append('DeliveryOptions', DeliveryOptions);
        formData.append('Status', Status);
    

        const res = await fetch('http://localhost:5000/CreateMerchants', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
    if (res.ok) {
      setCompanyName('');
      setTradeName('');
      setStoreAddress('');
      setMerchantCategory('');
      setEmailId('');
      setMobileNumber('');
      setCoverageState('');
      setCountry('')
      setState('')
      setCity('')
      setCommission('')
      setDeliveryOptions('')
      setStatus('')

      
      navigate('/base/SystemReference/Merchants');

    }
     else {
      console.log('Error:', data.message);
    }
  };


    
     
    return (  
  
      <CRow>
            
           
          
              <CCardHeader>
        <strong>Create Customer</strong>
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
    <label htmlFor="CompanyNameInput">Company Name</label>
    <input
      className="form-control"
      type="text"
      id="CompanyNameInput"
      placeholder="Company Name"
      value={CompanyName}
      onChange={(e) => setCompanyName(e.target.value)}
    />
  </div>
          <div className="form-group">
    <label htmlFor="TradeNameInput">Trade Name</label>
    <input
      className="form-control"
      type="text"
      id="TradeNameInput"
      placeholder="Trade Name"
      value={TradeName}
      onChange={(e) => setTradeName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="StoreAddressInput">Store Address</label>
    <input
      className="form-control"
      type="text"
      id="StoreAddressInput"
      placeholder="Store Address"
      value={StoreAddress}
      onChange={(e) => setStoreAddress(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="MerchantCategoryInput">Merchant Category</label>
    <select
      className="form-control"
      id="MerchantCategoryInput"
      value={MerchantCategory}
      onChange={(e) => setMerchantCategory(e.target.value)}
    >
      <option value="">Select Merchant Category</option>
      <option value="1">A</option>
      <option value="2">P</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="EmailInput">Email Address</label>
    <input
      className="form-control"
      type="text"
      id="EmailAddressInput"
      placeholder="Email Address"
      value={EmailId}
      onChange={(e) => setEmailId(e.target.value)}
    />
  </div>  

  <div className="form-group">
    <label htmlFor="MobileNumberInput">MobileNumber</label>
    <input
      className="form-control"
      type="text"
      id="MobileInput"
      placeholder="Mobile Number"
      value={MobileNumber}
      onChange={(e) => setMobileNumber(e.target.value)}
    />
  </div> 

  <div className="form-group">
    <label htmlFor="CoverageStateInput">CoverageState </label>
    <select
      className="form-control"
      id="CoverageStateInput"
      value={CoverageState}
      onChange={(e) => setCoverageState(e.target.value)}
    >
      <option value="">Select CoverageState</option>
      <option value="A">A</option>
      <option value="P">P</option>
    </select>
  </div>
  
  <div className="form-group">
    <label htmlFor="CountryInput">Country </label>
    <select
      className="form-control"
      id="CountryInput"
      value={Country}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value="">Country</option>
      <option value="Japan">Japan</option>
      <option value="Canada">Canada</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="StateInput">State </label>
    <select
      className="form-control"
      id="StateInput"
      value={State}
      onChange={(e) => setState(e.target.value)}
    >
      <option value="">State</option>
      <option value="Tokyo">Tokyo</option>
      <option value="Toronto">Toronto</option>
    </select>
  </div>
  
  <div className="form-group">
    <label htmlFor="CityInput">City </label>
    <select
      className="form-control"
      id="CityInput"
      value={City}
      onChange={(e) => setCity(e.target.value)}
    >
      <option value="">City</option>
      <option value="Tokyo">Tokyo</option>
      <option value="Toronto">Toronto</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="ComissionInput">Comission </label>
    <select
      className="form-control"
      id="ComissionInput"
      value={Commission}
      onChange={(e) => setCommission(e.target.value)}
    >
      <option value="">Comission</option>
      <option value="20">20%</option>
      <option value="30%">30%</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="DeliveryOptionsInput">DeliveryOptions </label>
    <select
      className="form-control"
      id="DeliveryOptionsInput"
      value={DeliveryOptions}
      onChange={(e) => setDeliveryOptions(e.target.value)}
    >
      <option value="">DeliveryOptions</option>
      <option value="1">Deliver</option>
      <option value="2">Pending</option>
    </select>
  </div>
 
  
  <div className="form-group">
    <label htmlFor="StatusInput">Status </label>
    <select
      className="form-control"
      id="StatusInput"
      value={Status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="">Status</option>
      <option value="1">Active</option>
      <option value="2">Inactive</option>
    </select>
  </div>
          <CCol xs={3}>
            <CFormInput
              type="color"
              id="brandPrimaryColorInput"
              defaultValue="#563d7c"
              label="Brand Primary Color"
            />
          </CCol>
          <CCol xs={3}>
            <CFormInput
              type="color"
              id="brandSecondaryColorInput"
              defaultValue="#000000"
              label="Brand Secondary Color"
            />
          </CCol>
        <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
           
           
            </form>
            
            </CRow>
           
    );
  }
  
export default CreateMerchants;