import React, { useRef, useState } from 'react';
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

const SocialLinkConfig = () => {
  const navigate = useNavigate();
  const googleClientIdRef = useRef(null);
  const facebookAppIdRef = useRef(null);
  const facebookAppSecretRef = useRef(null);
  const [socialLogin, setSocialLogin] = useState('');

  const handleClick = async () => {
    const googleClientId = googleClientIdRef.current.value;
    const facebookAppId = facebookAppIdRef.current.value;
    const facebookAppSecret = facebookAppSecretRef.current.value;
 

    // Create a JSON object with the form data
    const formData = {
      googleClientId,
      facebookAppId,
      facebookAppSecret,
      socialLogin
    };

    // Make a POST request to the server
    try {
      const response = await fetch('http://localhost:5000/SocialLinkConfig', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response
      if (response.ok) {
        console.log('Request sent successfully');
      } else {
        console.log('Failed to send request');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Social Link Config</strong>
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
                <CFormSelect
                  size="lg"
                  aria-label="Works with selects"
                  value={socialLogin}
                  onChange={(e) => setSocialLogin(e.target.value)}
                >
                  <option>Social Login</option>
                  <option value="AUS">AUS</option>
                  <option value="PHP">PHP</option>
                </CFormSelect>
              </CCol>

              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={googleClientIdRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Google Client Id"
                  placeholder="Google Client Id"
                />
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={facebookAppIdRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Facebook App Id"
                  placeholder="Facebook App Id"
                />
              </CCol>

              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={facebookAppSecretRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Facebook App Secret"
                  placeholder="Facebook App Secret"
                />
              </CCol>
            </CRow>
            <CRow>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="primary" className="me-md-2" size="lg" onClick={handleClick}>
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

export default SocialLinkConfig;
