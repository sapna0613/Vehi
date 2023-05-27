import React, { useRef, useState } from 'react';
import {
  CCard, CCardBody, CCardHeader,
  CCol, CButton, CRow,
  CFormInput, CFormSelect,
} from '@coreui/react';

import { useNavigate } from 'react-router-dom';

const CreateOperationManager = () => {
  const navigate = useNavigate();

  const [Name, SetName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Phone, SetPhone] = useState(''); 
  const [Status, SetStatus] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('Name', Name);
    formData.append('Email', Email);
    formData.append('Phone', Phone);
    formData.append('Status', Status);

    const res = await fetch('http://localhost:5000/CreateOperationManager', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      SetName('');
      SetEmail('');
      SetPhone('');
      SetStatus('');
      navigate('/base/System_Roles/OperationManager');
    } else {
      console.log('Error:', data.message);
    }
  };

  return (
    <CRow>
      <CCardHeader>
        <strong>Create</strong>
      </CCardHeader>
      <form className="form-container" onSubmit={handleClick}>
      <div className="form-group">
          <label htmlFor="TradeNameInput">Name </label>
          <input
            className="form-control"
            type="text"
            id="Name"
            placeholder="Name"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="TradeNameInput">Email </label>
          <input
            className="form-control"
            type="text"
            id="Email"
            placeholder="Email"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="TradeNameInput">Phone </label>
          <input
            className="form-control"
            type="text"
            id="Phone"
            placeholder="Phone"
            value={Phone}
            onChange={(e) => SetPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="StatusInput">Status </label>
          <select
            className="form-control"
            id="StatusInput"
            value={Status}
            onChange={(e) => SetStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <CCol xs={3}>
          <CButton color="primary" className="me-md-2" size="lg" type="submit">
            Submit
          </CButton>
        </CCol>
      </form>
    </CRow>
  );
};

export default CreateOperationManager;
