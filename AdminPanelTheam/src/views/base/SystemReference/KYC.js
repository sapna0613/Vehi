import React, { useRef } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow,
  CFormInput,
  CFormSelect,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const KYC = () => {
  const navigate = useNavigate();
  const currentAddress = useRef(null);
  const permanentAddress = useRef(null);
  const state = useRef(null);
  const city = useRef(null);
  const aadharFrontRef = useRef(null);
  const aadharBackRef = useRef(null);
  const policeVerification = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('currentAddress', currentAddress.current.value);
    formData.append('aadharFront', aadharFrontRef.current.files[0]);
    formData.append('aadharBack', aadharBackRef.current.files[0]);
    formData.append('permanentAddress', permanentAddress.current.value);
    formData.append('state', state.current.value);
    formData.append('city', city.current.value);
    formData.append('policeVerification', policeVerification.current.value);
 
    try {
        const response = await fetch('http://localhost:5000/KYC', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          // Redirect to the same page
          navigate('base/SystemReference/KYC');
        } else {
          console.error('Request failed:', response.status);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
  };

  return (
   <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong> KYC Details</strong>
          </CCardHeader>
          <CCardBody className="mb-12" size="sm">
           
            <CCol xs={12}>
              <CCard className="mb-12">
              
                <CCardBody className="mb-12" size="sm">
                  <CRow>
                    <form onSubmit={handleClick}>
                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={currentAddress}
                          type="text"
                          id="floatingInput"
                          name="currentAddress"
                          placeholder="currentAddress"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={permanentAddress}
                          type="text"
                          id="floatingInput"
                          name="permanentAddress"
                          floatingLabel="permanentAddress"
                          placeholder="permanentAddress"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={state}
                          type="text"
                          id="floatingInput"
                          name="state"
                          floatingLabel="state"
                          placeholder="state"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={city}
                          type="text"
                          id="floatingInput"
                          name="city"
                          floatingLabel="city"
                          placeholder="city"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
  <CFormInput
    type="file"
    size="lg"
    id="aadharFront"
    name="aadharFront" // Add the name attribute
    label="aadharFront"
    placeholder="Select AadharFront"
    ref={aadharFrontRef}
  />
</CCol>

<CCol xs={12} md={6}>
  <CFormInput
    type="file"
    size="lg"
    id="aadharBack"
    name="aadharBack" // Add the name attribute
    label="aadharBack "
    placeholder="Select aadharBack"
    ref={aadharBackRef}
  />
</CCol>



                     

                      

                   

                      <CCol xs={12} md={6}>
                        <CFormSelect size="lg" aria-label="Default Country" ref={policeVerification}>
                          <option>policeVerification</option>
                          <option value="1">D</option>
                          <option value="2">P</option>
                        </CFormSelect>
                      </CCol>

                     

                      <CCol xs={12}>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <CButton color="primary" className="me-md-2" size="lg" type="submit">
                            Submit
                          </CButton>
                        </div>
                      </CCol>
                    </form>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  
  );
};

export default KYC;
