import React from 'react';
import {
  CButton,CCard,CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';


const Subscription_Plan=()=> {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Subscription Plans</strong>
            
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Country</CTableHeaderCell>
              <CTableHeaderCell scope="col">Subscription Plan</CTableHeaderCell>
              <CTableHeaderCell scope="col">Commission</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status (Switch)</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action (Edit, Delete)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>USA </CTableDataCell>
              <CTableDataCell>Platinum</CTableDataCell>
              <CTableDataCell>10%</CTableDataCell>
              <CTableDataCell>Right Port</CTableDataCell>
              <CTableDataCell>Edit</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>USA </CTableDataCell>
              <CTableDataCell>Platinum</CTableDataCell>
              <CTableDataCell>10%</CTableDataCell>
              <CTableDataCell>Right Port</CTableDataCell>
              <CTableDataCell>Edit</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>USA </CTableDataCell>
            <CTableDataCell>Platinum</CTableDataCell>
            <CTableDataCell>10%</CTableDataCell>
            <CTableDataCell>Right Port</CTableDataCell>
            <CTableDataCell>Edit</CTableDataCell>
          </CTableRow>
          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default  Subscription_Plan
