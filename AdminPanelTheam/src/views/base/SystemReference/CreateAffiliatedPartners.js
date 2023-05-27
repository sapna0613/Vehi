import React, { useRef, useState } from 'react';
import {
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CFormSelect,
  CButton
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
const CreateAffiliatedPartners = () => {
  const navigate = useNavigate();
  const [partnerName, setPartnerName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [coverageState, setCoverageState] = useState('');
  const [commission, setCommission] = useState('');
  const [status, setStatus] = useState('');
  
 
  const profilePicRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profilePic', profilePicRef.current.files[0]);
    formData.append('partnerName', partnerName);
    formData.append('email', email);
    formData.append('mobileNumber', mobileNumber);
    formData.append('address', address);
    formData.append('coverageState', coverageState);
    formData.append('commission', commission);
    formData.append('status', status);

    const res = await fetch('http://localhost:5000/CreateAffiliatedPartners', {
      method: 'POST',
      body: formData,
    });
    
    const data = await res.json();
    if (res.ok) {
      setPartnerName('');
      setEmail('');
      setMobileNumber('');
      setAddress('');
      setCoverageState('');
      setCommission('');
      setStatus('');
      navigate('/base/SystemReference/AffiliatedPartners');

     
    } else {
      console.log('Error:', data.message);
    }
  };

  return (
    <CRow>
      <CCardHeader>
        <strong>Create Customer</strong>
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
              id="partnerNameInput"
              placeholder="Partner Name"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={3}>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="partnerNameInput"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={3}>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="partnerNameInput"
              placeholder="mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={3}>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="partnerNameInput"
              placeholder=" Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={3}>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="partnerNameInput"
              placeholder=" Coverage State"
              value={coverageState}
              onChange={(e) => setCoverageState(e.target.value)}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={3}>
            <CFormInput
              className="mb-1"
              size="lg"
              type="text"
              id="partnerNameInput"
              placeholder=" Comission"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
          </CCol>
          <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
        </CRow>
    </form>
        </CRow>

  )}
  export default CreateAffiliatedPartners