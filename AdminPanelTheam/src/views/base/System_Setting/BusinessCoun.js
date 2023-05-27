import React, { useEffect, useState } from 'react';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormSelect,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import SystemSetting from './SystemSetting';
import './App.css'

const BusinessCoun = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:5000/AddBusinessCountry')
      .then((result) => {
        result.json().then((resp) => {
          // console.log("result",resp)
          setData(resp);
        });
      });
  }, []);

  
  console.log(data);

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(state);}

  return (
    <CRow>
       <form onSubmit={handleClick}>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Business Country</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton onClick={() => navigate('/base/System_Setting/AddBusinessCountry')} color="primary" className="me-md-2">
                Add Business Country
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
          <CTable className='custom-table'>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
      <CTableHeaderCell scope="col">Country Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Currency</CTableHeaderCell>
      <CTableHeaderCell scope="col">Currency Symbol</CTableHeaderCell>
      <CTableHeaderCell scope="col">Status</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

  <CTableBody>
    {data.map((item, index) => (
      <CTableRow key={index}>
        <CTableDataCell>{index + 1}</CTableDataCell>
        <CTableDataCell>{item.CountryName}</CTableDataCell>
        <CTableDataCell>{item.Currency}</CTableDataCell>
        <CTableDataCell>{item.CurrencySymbol}</CTableDataCell>
        <CTableDataCell>{item.Status}
        <CFormSelect size='lg' name="Status" aria-label="Large select example">
                    
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </CFormSelect>
                  </CTableDataCell>
      </CTableRow>
    ))}
  </CTableBody>
</CTable>

          </CCardBody>
        </CCard>
      </CCol>
      </form>
    </CRow>
  );
};

export default BusinessCoun;