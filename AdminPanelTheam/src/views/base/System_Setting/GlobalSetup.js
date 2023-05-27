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

const GlobalSetup = () => {
  const navigate = useNavigate();
  const SiteName = useRef(null);
  const Number = useRef(null);
  const Email = useRef(null);
  const Copyrightcontent = useRef(null);
  const DefaultCountry = useRef(null);
  const Currency = useRef(null);
  const UnitMeasurement = useRef(null);
  const LoyaltyPoint = useRef(null);
  const SiteIconRef = useRef(null);
  const FavIconRef = useRef(null);
  const SiteLogoRef = useRef(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('SiteName', SiteName.current.value);
    formData.append('SiteIcon', SiteIconRef.current.files[0]);
    formData.append('FavIcon', FavIconRef.current.files[0]);
    formData.append('SiteLogo', SiteLogoRef.current.files[0]);
    formData.append('Number', Number.current.value);
    formData.append('Email', Email.current.value);
    formData.append('Copyrightcontent', Copyrightcontent.current.value);
    formData.append('DefaultCountry', DefaultCountry.current.value);
    formData.append('Currency', Currency.current.value);
    formData.append('UnitMeasurement', UnitMeasurement.current.value);
    formData.append('LoyaltyPoint', LoyaltyPoint.current.value);
 
    try {
      const response = await fetch('http://localhost:5000/GlobalSetup', {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
   <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Global Setup</strong>
          </CCardHeader>
          <CCardBody className="mb-12" size="sm">
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
            <CCol xs={12}>
              <CCard className="mb-12">
                <CCardHeader>
                  <strong>Create Customer</strong>
                </CCardHeader>
                <CCardBody className="mb-12" size="sm">
                  <CRow>
                    <form onSubmit={handleClick}>
                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={SiteName}
                          type="text"
                          id="floatingInput"
                          name="SiteName"
                          placeholder="SiteName"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
  <CFormInput
    type="file"
    size="lg"
    id="SiteIcon"
    name="SiteIcon" // Add the name attribute
    label="SiteIcon"
    placeholder="Select Site Icon"
    ref={SiteIconRef}
  />
</CCol>

<CCol xs={12} md={6}>
  <CFormInput
    type="file"
    size="lg"
    id="FavIcon"
    name="FavIcon" // Add the name attribute
    label="Fav Icon"
    placeholder="Select Fav Icon"
    ref={FavIconRef}
  />
</CCol>

<CCol xs={12} md={6}>
  <CFormInput
    type="file"
    size="lg"
    id="SiteLogo"
    name="SiteLogo" // Add the name attribute
    label="Site Logo"
    placeholder="Select Site Logo"
    ref={SiteLogoRef}
  />
</CCol>


                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={Number}
                          type="text"
                          id="floatingInput"
                          name="Number"
                          floatingLabel="Number"
                          placeholder="Number"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={Email}
                          type="text"
                          id="floatingInput"
                          name="Email"
                          floatingLabel="Email"
                          placeholder="Email"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={Copyrightcontent}
                          type="text"
                          id="floatingInput"
                          name="Copyrightcontent"
                          floatingLabel="Copyrightcontent"
                          placeholder="Copyright Content"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormSelect size="lg" aria-label="Default Country" ref={DefaultCountry}>
                          <option>Default Country</option>
                          <option value="1">A</option>
                          <option value="2">P</option>
                        </CFormSelect>
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={UnitMeasurement}
                          type="text"
                          id="floatingInput"
                          name="UnitMeasurement"
                          floatingLabel="UnitMeasurement"
                          placeholder="UnitMeasurement"
                        />
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormSelect size="lg" aria-label="Currency" ref={Currency}>
                          <option>Currency</option>
                          <option value="1">A</option>
                          <option value="2">P</option>
                        </CFormSelect>
                      </CCol>

                      <CCol xs={12} md={6}>
                        <CFormInput
                          className="mb-3"
                          size="lg"
                          ref={LoyaltyPoint}
                          type="text"
                          id="floatingInput"
                          name="LoyaltyPoint"
                          floatingLabel="LoyaltyPoint"
                          placeholder="LoyaltyPoint"
                        />
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

export default GlobalSetup;
