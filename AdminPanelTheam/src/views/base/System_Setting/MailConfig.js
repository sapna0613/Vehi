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

const MailConfig = () => {
  const navigate = useNavigate();
  const driverRef = useRef(null);
  const hostRef = useRef(null);
  const portRef = useRef(null);
  const fromAddressRef = useRef(null);
  const passwordRef = useRef(null);
  const encryptionRef = useRef(null);
  const domain1Ref = useRef(null);
  const domain2Ref = useRef(null);

  const handleSubmit = async () => {
    const formData = {
      driver: driverRef.current.value,
      host: hostRef.current.value,
      port: portRef.current.value,
      fromAddress: fromAddressRef.current.value,
      password: passwordRef.current.value,
      encryption: encryptionRef.current.value,
      domain1: domain1Ref.current.value,
      domain2: domain2Ref.current.value,
    };

    try {
      const response = await fetch('http://localhost:5000/MailConfig', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission
        console.log('Form submitted successfully');
      } else {
        // Handle form submission error
        console.log('Form submission error');
      }
    } catch (error) {
      // Handle fetch error
      console.log('Fetch error:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Mail Config</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton onClick={() => navigate('/base/System_Setting/General')} color="primary" className="me-md-2">
                General
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/HomePage')} color="primary" className="me-md-2">
                Home Page
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/CompanyProfileLink')} color="primary" className="me-md-2">
                Company Profile Link.js
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/SocialLinkConfig')} color="primary" className="me-md-2">
                Social Link Config
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/MapAndSmsConfig')} color="primary" className="me-md-2">
                Map And SMSConfig
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/PushNotificationConfig')} color="primary" className="me-md-2">
                Push Notification Config
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/PaymentSetting')} color="primary" className="me-md-2">
                Payment Setting
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/PolicyPage')} color="primary" className="me-md-2">
                Policy Page
              </CButton>
              <CButton onClick={() => navigate('/base/System_Setting/MailConfig')} color="primary" className="me-md-2">
                Mail Config
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody className="mb-12" size="sm">
            <CRow>
              <CCol xs={3} md>
                <CFormSelect size="lg" aria-label="Works with selects" ref={driverRef}>
                  <option>Driver</option>
                  <option value="1">VI</option>
                  <option value="2">Airtel</option>
                </CFormSelect>
              </CCol>

              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={hostRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Host"
                  placeholder="Host"
                />
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={portRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Port"
                  placeholder="Port"
                />
              </CCol>
              <CCol>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={fromAddressRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="From Address"
                  placeholder="From Address"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={passwordRef}
                  type="password"
                  id="floatingInput"
                  floatingLabel="Password"
                  placeholder="Password"
                />
              </CCol>

              <CCol xs={3} md>
                <CFormSelect size="lg" aria-label="Works with selects" ref={encryptionRef}>
                  <option>Encryption</option>
                  <option value="1">VI</option>
                  <option value="2">Airtel</option>
                </CFormSelect>
              </CCol>

              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={domain1Ref}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Domain 1"
                  placeholder="Domain 1"
                />
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={domain2Ref}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Domain 2"
                  placeholder="Domain 2"
                />
              </CCol>
            </CRow>

            <CRow>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="primary" className="me-md-2" size="lg" onClick={handleSubmit}>
                  Submit
                </CButton>
              </div>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MailConfig;
