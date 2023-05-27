import React, { useRef, useState } from 'react';
import {
  CCard,
  CCardBody,
  CTable,
  CTableHead,
  CCardHeader,
  CTableRow,
  CCol,
  CButton,
  CRow,
  CFormInput,
  CTableHeaderCell,
  CFormSelect,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';

const CreateSubscriptionCategory = () => {
  const navigate = useNavigate();
  const countryRef = useRef(null);
  const subscriptionPlanRef = useRef(null);
  const commissionRef = useRef(null);
  const statusRef = useRef(null);
  const [dropdown, setDropDown] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    const country = countryRef.current.value;
    const subscriptionPlan = subscriptionPlanRef.current.value;
    const commission = commissionRef.current.value;
    const status = statusRef.current.value;

    const dropdown = {
      country: country,
      subscriptionPlan: subscriptionPlan,
      commission: commission,
      status: status,
    };

    const res = await fetch('http://localhost:5000/CreateSubscriptionCategory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dropdown),
    });
    const data = await res.json();

    if (res.ok) {
      setDropDown(data);
       navigate('/base/SystemReference/Subscription_Plans')
    } else {
      console.log('Error:', data.message);
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
            <CCol xs={3}>
                <CFormSelect size="lg" aria-label="Works with selects" ref={countryRef}>
                  <option>Country</option>
                  <option value="1">Retailer</option>
                  <option value="2">Wholesaler</option>
                </CFormSelect>
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={subscriptionPlanRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Subscriptions Plan"
                  placeholder="Subscription Plan"
                />
              </CCol>
              <CCol xs={3}>
                <CFormInput
                  className="mb-3"
                  size="lg"
                  ref={commissionRef}
                  type="text"
                  id="floatingInput"
                  floatingLabel="Commission"
                  placeholder="Commission"
                />
              </CCol>
              <CCol xs={3}>
                <CFormSelect size="lg" aria-label="Works with selects" ref={statusRef}>
                <option>Status</option>
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                </CFormSelect>
                </CCol>

                 <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
                </CRow>
                </CCardBody>
                </CCard>
                </CCol>
                </form>
                </CRow>

  )}

  export default CreateSubscriptionCategory