import React, { useRef } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow,
  CFormInput,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const CreateCustomer = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const profilePicRef = useRef(null);
  const handleClick = async (e) => {
    e.preventDefault();

    const Name = nameRef.current.value;
    const EmailId = emailRef.current.value;
    const MobileNumber = mobileRef.current.value;
    const profilePic = profilePicRef.current.files[0];

    const formData = new FormData();
    formData.append('Name', Name);
    formData.append('EmailId', EmailId);
    formData.append('MobileNumber', MobileNumber);
    formData.append('profilePic', profilePic);

    const dropdown = {
      name: Name,
      EmailId: EmailId,
      MobileNumber: MobileNumber,
      profilePic: profilePic
    }
    const res = await fetch('http://localhost:5000/CreateCustomer', {
      method: 'POST',
      body: formData,
      
    });

    if (res.ok) {
      navigate('/base/SystemReference/Customer');
    } else {
      console.error('Failed to create customer');
    }
  };

  return (
    <CRow>
      <form onSubmit={handleClick}>
        <CCol xs={12}>
          <CCard className="mb-12">
            <CCardHeader>
              <strong>Create Customer</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
              <CRow>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={nameRef}
                  type="text"
                  id="floatingInput"
                  name="Name"
                  floatingLabel="Name"
                  placeholder="Name "
                />

                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={emailRef}
                  type="text"
                  id="floatingInput"
                  name="EmailId"
                  floatingLabel="EmailId"
                  placeholder="Email "
                />

                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={mobileRef}
                  type="text"
                  id="floatingInput"
                  name="MobileNumber"
                  floatingLabel="Mobile Number"
                  placeholder="Mobile Number "
                />

                <CFormInput
                  type="file"
                  size="lg"
                  id="profilePic"
                  name="profilePic"
                  label="Select Profile Pic"
                  placeholder="Select Profile Pic"
                  ref={profilePicRef}
                />



                <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </form>
    
    </CRow>
  )
}

export default CreateCustomer
