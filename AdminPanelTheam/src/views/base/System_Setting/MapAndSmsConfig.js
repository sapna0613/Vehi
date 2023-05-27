
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

const MapAndSmsConfig = () => {
  const navigate = useNavigate();

  const searchRadiusRef = useRef(null);
  const browserMapKeyRef = useRef(null);
  const serverMapKeyRef = useRef(null);
  const smsProviderRef = useRef(null);
  const twilioAccountSIDRef = useRef(null);
  const twilioAutoTokenRef = useRef(null);
  const twilioFromNumberRef = useRef(null);
  const pubnubPublishKeyRef = useRef(null);
  const pubnubSubscribeKeyRef = useRef(null);
  const [dropdown, setDropDown] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
   

    const formData = new FormData();
    formData.append('searchRadius', searchRadiusRef.current.value);
    formData.append('browserMapKey', browserMapKeyRef.current.value);
    formData.append('serverMapKey', serverMapKeyRef.current.value);
    formData.append('smsProvider', smsProviderRef.current.value);
    formData.append('twilioAccountSID', twilioAccountSIDRef.current.value);
    formData.append('twilioAutoToken', twilioAutoTokenRef.current.value);
    formData.append('twilioFromNumber', twilioFromNumberRef.current.value);
    formData.append('pubnubPublishKey', pubnubPublishKeyRef.current.value);
    formData.append('pubnubSubscribeKey', pubnubSubscribeKeyRef.current.value);

    
    try {
      const response = await fetch('http://localhost:5000/MapAndSmsConfig', {
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
        <CCard className="mb-12">
          <CCardHeader>
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
            <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={searchRadiusRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Search Radius Configure"
                  placeholder="Search Radius Configure"
                />
              </CCol>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={browserMapKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Browser Map Key"
                  placeholder="Browser Map Key"
                />
              </CCol>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={serverMapKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Server Map Key"
                  placeholder="Server Map Key"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={4} md>

                
                <CFormSelect size="lg" aria-label="Works with selects" ref={smsProviderRef}>
                              
                  <option>SMS Provider</option>
                 <option value="1">VI</option>
                 <option value="2">Airtel</option>
             
         
                </CFormSelect>
              </CCol>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={twilioAccountSIDRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Twilio Account SID"
                  placeholder="Twilio Account SID"
                />
              </CCol>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={twilioAutoTokenRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Twilio Auto Token"
                  placeholder="Twilio Auto Token"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={twilioFromNumberRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Twilio From Number"
                  placeholder="Twilio Auto Token"
                />
              </CCol>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={pubnubPublishKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Pubnub Publish Key"
                  placeholder="Pubnub Publish Key"
                />
              </CCol>
              <CCol xs={4}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={pubnubSubscribeKeyRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Pubnub Subscribe Key"
                  placeholder="Pubnub Subscribe Key"
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

export default MapAndSmsConfig;
