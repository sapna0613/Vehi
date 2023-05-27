import React from 'react';
import {
  CButton,CCard,
  CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';


const DisputeReasons=()=> {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Dispute Reasons</strong>
                        
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Reason</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action (Edit, Delete)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Not working</CTableDataCell>
              <CTableDataCell>Pending</CTableDataCell>
              <CTableDataCell>Edit</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>working</CTableDataCell>
              <CTableDataCell>successful</CTableDataCell>
              <CTableDataCell>Edit</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>Working</CTableDataCell>
            <CTableDataCell>Done</CTableDataCell>
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

export default DisputeReasons
