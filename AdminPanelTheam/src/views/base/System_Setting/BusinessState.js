import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const BusinessState = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/AddBusinessState').then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  const navigate = useNavigate();

  const sortedData = data.sort((a, b) => {
    return a.BusinessState.localeCompare(b.BusinessState);
  });

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Business State</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton
                onClick={() => navigate('/base/System_Setting/AddBusinessState')}
                color="primary"
                className="me-md-2"
              >
                Add Business State
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable className="custom-table">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Business State</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Country</CTableHeaderCell>
                  <CTableHeaderCell scope="col">State</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {sortedData.map((item, index) => (
                  <CTableRow key={index + 1}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableHeaderCell>{item.BusinessState}</CTableHeaderCell>
                    <CTableHeaderCell>{item.Country}</CTableHeaderCell>
                    <CTableHeaderCell>{item.State}</CTableHeaderCell>
                    <CTableHeaderCell>{item.Status}</CTableHeaderCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default BusinessState;
