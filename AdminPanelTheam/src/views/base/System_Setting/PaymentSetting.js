import React, { useRef } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

const PaymentSetting = () => {
  const navigate = useNavigate();
  const paymayaSecretKeyRef = useRef(null);
  const paymayaPublishKeyRef = useRef(null);
  const gcashSecretKeyRef = useRef(null);
  const gcashPublishKeyRef = useRef(null);

  const handleClick = async () => {
    const formData = new FormData();
    formData.append('paymayaSecretKey', paymayaSecretKeyRef.current.value);
    formData.append('paymayaPublishKey', paymayaPublishKeyRef.current.value);
    formData.append('gcashSecretKey', gcashSecretKeyRef.current.value);
    formData.append('gcashPublishKey', gcashPublishKeyRef.current.value);

    try {
      const response = await fetch('http://localhost:5000/PaymentSetting', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful response
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network error
    }
  };
     
    return (  
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-12" >
            <CCardHeader>
              <strong>Payment Settings</strong>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">

<CButton onClick={()=>navigate('/base/System_Setting/General')} color="primary" className="me-md-2">
  General
</CButton>
<CButton onClick={()=>navigate('/base/System_Setting/HomePage')} color="primary" className="me-md-2">
Home Page
</CButton>

<CButton onClick={()=>navigate('/base/System_Setting/CompanyProfileLink')} color="primary" className="me-md-2">
Company Profile Link.js
</CButton>

<CButton onClick={()=>navigate('/base/System_Setting/SocialLinkConfig')} color="primary" className="me-md-2">
Social Link Config
</CButton>

<CButton onClick={()=>navigate('/base/System_Setting/MapAndSmsConfig')} color="primary" className="me-md-2">
Map And SMSConfig
</CButton>

<CButton onClick={()=>navigate('/base/System_Setting/PushNotificationConfig')} color="primary" className="me-md-2">
Push Notification Config
</CButton>

<CButton onClick={()=>navigate('/base/System_Setting/PaymentSetting')} color="primary" className="me-md-2">
Payment Setting
</CButton>

<CButton onClick={()=>navigate('/base/System_Setting/PolicyPage')} color="primary" className="me-md-2">
Policy Page
</CButton>

<CButton onClick={()=>navigate('/base/System_Setting/MailConfig')} color="primary" className="me-md-2">
Mail Config
</CButton>
</div>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={paymayaSecretKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Paymaya Secret Key"
                  placeholder="Paymaya Secret Key"
                />
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={paymayaPublishKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Paymaya Publish Key"
                  placeholder="Paymaya Publish Key"
                />
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={gcashSecretKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Gcash Secret Key"
                  placeholder="Gcash Secret Key"
                />
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={gcashPublishKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Gcash Publish Key"
                  placeholder="Gcash Publish Key"
                />
              </CCol>
            </CRow>
            <CRow>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton
                  color="primary"
                  className="me-md-2"
                  size="lg"
                  onClick={handleClick}
                >
                  Submit
                </CButton>
              </div>

            </CRow>      
            </CCardBody>
           
          </CCard>
        </CCol>
      </CRow>
 
      
    )
  }
  
export default PaymentSetting