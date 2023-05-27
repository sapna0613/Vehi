import React from 'react';
import {
  CButton,CCard,CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell,CImage,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';
import CreateTicket from './CreateTicket';

const Ticket=()=> {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Ticket</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/SystemReference/CreateTicket')} color="primary" className="me-md-2">
              Create Tickets
            </CButton>
            
          </div>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Ticket Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">Dispute Type</CTableHeaderCell>
              <CTableHeaderCell scope="col">Ticket Description</CTableHeaderCell>
              <CTableHeaderCell scope="col">Marchant Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Order Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status(Switch)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>0000015</CTableDataCell>
              <CTableDataCell>Successful</CTableDataCell>
              <CTableDataCell>Musium Entry</CTableDataCell>
              <CTableDataCell>Jurry</CTableDataCell>
              <CTableDataCell>AS42135</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>0000018</CTableDataCell>
            <CTableDataCell>Successful</CTableDataCell>
            <CTableDataCell>Musium Entry</CTableDataCell>
            <CTableDataCell>Hurry</CTableDataCell>
            <CTableDataCell>AS42078</CTableDataCell>
            <CTableDataCell>Active</CTableDataCell>
          </CTableRow>
          <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell>0000020</CTableDataCell>
          <CTableDataCell>Successful</CTableDataCell>
          <CTableDataCell>Musium Entry</CTableDataCell>
          <CTableDataCell>Herry</CTableDataCell>
          <CTableDataCell>AS42140</CTableDataCell>
          <CTableDataCell>Active</CTableDataCell>
        </CTableRow>

          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Ticket
