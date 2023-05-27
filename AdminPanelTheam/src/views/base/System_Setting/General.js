import React, { useRef,useEffect } from 'react';
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

const General = () => {
  const navigate = useNavigate();
  const SiteName = useRef(null);
  const SiteIcon = useRef(null);
  const FavIcon = useRef(null);
  const SiteLogo = useRef(null);
  const Number = useRef(null);
  const Email = useRef(null);
  const Copyrightcontent = useRef(null);
  const DefaultCountry = useRef(null);
  const Currency = useRef(null);
  const UnitMeasurement = useRef(null);
  const LoyaltyPoint = useRef(null);
  
  useEffect(() => {
    // Fetch the existing data from the server
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/General');
      const data = await response.json();

      // Populate the form fields with the fetched data
      SiteName.current.value = data.SiteName;
      // Set the values for other fields accordingly
    };

    fetchData();
  }, []);
 

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('SiteName', SiteName.current.value);
    formData.append('SiteIcon', SiteIcon.current.files[0]);
    formData.append('FavIcon', FavIcon.current.files[0]);
    formData.append('SiteLogo', SiteLogo.current.files[0]);
    formData.append('Number', Number.current.value);
    formData.append('Email', Email.current.value);
    formData.append('Copyrightcontent', Copyrightcontent.current.value);
    formData.append('DefaultCountry', DefaultCountry.current.value);
    formData.append('Currency', Currency.current.value);
    formData.append('UnitMeasurement', UnitMeasurement.current.value);
    formData.append('LoyaltyPoint', LoyaltyPoint.current.value);

    const res = await fetch('http://localhost:5000/General', {
      method: 'POST',
      body: formData,
    });
        // if (res.ok) {
    //   navigate('/base/SystemReference/GlobalSetup');
    // } else {
    //   console.error('Failed to create customer');
    // }


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
                    

                      <CFormInput
                        className="mb-3"
                        size="lg"
                        ref={SiteName}
                        type="text"
                        id="floatingInput"
                        name="SiteName"
                        floatingLabel="SiteName"
                        placeholder="SiteName"
                      />

                      <CFormInput
                        type="file"
                        size="lg"
                        id="SiteIcon"
                        name="SiteIcon"
                        label="SiteIcon"
                        placeholder="Select Site Icon"
                        ref={SiteIcon}
                      />

                      <CFormInput
                        type="file"
                        size="lg"
                        id="FavIcon"
                        name="FavIcon"
                        label="Fav Icon"
                        placeholder="Select Fav Icon"
                        ref={FavIcon}
                      />

                      <CFormInput
                        type="file"
                        size="lg"
                        id="SiteLogo"
                        name="SiteLogo"
                        label="Site Logo"
                        placeholder="Select Fav Icon"
                        ref={SiteLogo}
                      />

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

               <CCol xs={4}>
                        <CFormSelect size='lg' aria-label="Works with selects" ref={DefaultCountry}>
                          <option>DefaultCountry</option>
                          <option value="1">A</option>
                          <option value="2">P</option>
                        </CFormSelect>
                      </CCol>

                      

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

<CCol xs={4}>
                        <CFormSelect size='lg' aria-label="Works with selects" ref={Currency}>
                          <option>Currency</option>
                          <option value="1">A</option>
                          <option value="2">P</option>
                        </CFormSelect>
                      </CCol>

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


                      <CCol xs={3}>
                        <CButton color="primary" className="me-md-2" size="lg" type="submit">
                          Submit
                        </CButton>
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

export default General;
