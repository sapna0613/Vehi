import React, { useRef, useState } from 'react';
import {
  CCard, CCardBody, CCardHeader,
  CCol, CButton, CRow,
  CFormInput, CFormSelect,
} from '@coreui/react';

import { useNavigate } from 'react-router-dom';

const CreateMerchant = () => {
  const navigate = useNavigate();

  const [CustomerName, SetCustomerName] = useState(''); // Set the default value of Name to '1'
  const [WalletBalance, SetWalletBalance] = useState('');
  const [Country, SetCountry] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('CustomerName', CustomerName);
    formData.append('WalletBalance', WalletBalance);
    formData.append('Country', Country);

    const res = await fetch('http://localhost:5000/CreateMerchant', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
        SetCustomerName('');
        SetWalletBalance('');
        SetCountry('');
   
      navigate('/base/E-wallet-Managment/Merchant');
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
          <label htmlFor="TradeNameInput">Customer Name </label>
          <input
            className="form-control"
            type="text"
            id="CustomerName"
            placeholder="CustomerName"
            value={CustomerName}
            onChange={(e) => SetCustomerName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="TradeNameInput">WalletBalance </label>
          <input
            className="form-control"
            type="text"
            id="WalletBalance"
            placeholder="WalletBalance"
            value={WalletBalance}
            onChange={(e) => SetWalletBalance(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="TradeNameInput">Country </label>
          <input
            className="form-control"
            type="text"
            id="Country"
            placeholder="Country"
            value={Country}
            onChange={(e) => SetCountry(e.target.value)}
          />
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

export default CreateMerchant;
