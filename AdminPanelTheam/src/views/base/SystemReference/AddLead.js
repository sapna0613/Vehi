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

const AddLead = () => {
  const navigate = useNavigate();

  const [CustomerName, setCustomerName] = useState('');
  const [Societyname, setSocietyname] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [Status, setStatus] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('CustomerName', CustomerName);
    formData.append('Societyname', Societyname);
    formData.append('mobilenumber', mobilenumber);
    formData.append('Status', Status);

    try {
      const res = await fetch('http://localhost:5000/AddLead', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setCustomerName('');
        setSocietyname('');
        setMobilenumber('');
        setStatus('');
        navigate('/base/SystemReference/AddLead');
      } else {
        console.log('Error:', res.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Add Leads</strong>
          </CCardHeader>
          <CCardBody>
            <form onSubmit={handleClick}>
              <div className="mb-3">
                <label htmlFor="customerName" className="form-label">
                  Customer Name
                </label>
                <CFormInput
                  type="text"
                  id="customerName"
                  value={CustomerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="societyName" className="form-label">
                  Society Name
                </label>
                <CFormInput
                  type="text"
                  id="societyName"
                  value={Societyname}
                  onChange={(e) => setSocietyname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <CFormInput
                  type="tel"
                  id="mobileNumber"
                  value={mobilenumber}
                  onChange={(e) => setMobilenumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <CFormSelect
                  id="status"
                  value={Status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="">Select status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              </div>
              <CButton color="primary" type="submit">
                Submit
              </CButton>
            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AddLead;
