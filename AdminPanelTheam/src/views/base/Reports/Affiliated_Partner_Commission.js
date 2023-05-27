import React from 'react'
import {
  CCard,CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Button } from '@coreui/coreui'
import { useNavigate } from 'react-router-dom'


const Affiliated_Partner_Commission=() => {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Affiliated Partners Commission</strong>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Wallet Balance</CTableHeaderCell>
              <CTableHeaderCell scope="col">Country</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action (Edit, Delete)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Manager</CTableDataCell>
              <CTableDataCell>Edit</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>SM</CTableDataCell>
            <CTableDataCell>Delete</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>RM</CTableDataCell>
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

export default Affiliated_Partner_Commission
