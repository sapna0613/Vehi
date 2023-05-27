import React, { useRef, useState } from 'react';
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

const CompanyProfileLink = () => {
const navigate = useNavigate();
const facebookLinkRef = useRef(null);
const twitterLinkRef = useRef(null);
const instagramLinkRef = useRef(null);
const pinterestLinkRef = useRef(null);

const handleClick = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('facebookLink', facebookLinkRef.current.value);
  formData.append('twitterLink', twitterLinkRef.current.value);
  formData.append('instagramLink', instagramLinkRef.current.value);
  formData.append('pinterestLink', pinterestLinkRef.current.value);

  navigate('/base/System_Setting/CompanyProfileLink');

  const res = await fetch('http://localhost:5000/CompanyProfileLink', {
    method: 'POST',
    body: formData,
  });
};


return (
<CRow>
<CCol xs={12}>
<CCard className="mb-12">
<CCardHeader>
<strong>Company Profile Link</strong>
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
<CCol xs={3}>
<CFormInput
               className="mb-3"
               size="lg"
               ref={facebookLinkRef}
               type="text"
               id="floatingInput"
               floatingLabel="Facebook Link"
               placeholder="Facebook Link"
             />
</CCol>
<CCol xs={3}>
<CFormInput
               className="mb-3"
               size="lg"
               ref={twitterLinkRef}
               type="text"
               id="floatingInput"
               floatingLabel="Twitter Link"
               placeholder="Twitter Link"
             />
</CCol>
<CCol xs={3}>
<CFormInput
               className="mb-3"
               size="lg"
               ref={instagramLinkRef}
               type="text"
               id="floatingInput"
               floatingLabel="Instagram Link"
               placeholder="Instagram Link"
             />
</CCol>
<CCol xs={3}>
<CFormInput
               className="mb-3"
               size="lg"
               ref={pinterestLinkRef}
               type="text"
               id="floatingInput"
               floatingLabel="Pinterest Link"
               placeholder="Pinterest Link"
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

export default CompanyProfileLink;

