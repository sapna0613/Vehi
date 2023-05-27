import React from 'react'
import {
  CButton,CImage,CCard,
  CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Button } from '@coreui/coreui'
import { useNavigate } from 'react-router-dom'

const Client = () => {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Customer</strong>
            
            
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Profile Pic</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status (Switch)</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action (Edit, Delete)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>
              <CImage rounded fluid src="https://th.bing.com/th?q=Black+Man+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" width={50} height={50} />
              </CTableDataCell>
              <CTableDataCell>Thomas ALwa </CTableDataCell>
              <CTableDataCell>ThomasAlwa123@gmail.com</CTableDataCell>
              <CTableDataCell>+1789789563</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>Edit</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>
            <CImage rounded fluid src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7" width={50} height={50} />
            </CTableDataCell>
            <CTableDataCell>Johanthan </CTableDataCell>
            <CTableDataCell>Johanthan123@gmail.com</CTableDataCell>
            <CTableDataCell>+1789789555</CTableDataCell>
            <CTableDataCell>Active</CTableDataCell>
            <CTableDataCell>Edit</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>
            <CImage rounded fluid src="https://th.bing.com/th/id/OIP.hREHWzNlE4f-u1G6M6s9aAHaFj?w=281&h=211&c=7&r=0&o=5&pid=1.7" width={50} height={50} />
            </CTableDataCell>
            <CTableDataCell>Jason Statam</CTableDataCell>
            <CTableDataCell>Jason.Statam456@gmail.com</CTableDataCell>
            <CTableDataCell>+1789780000</CTableDataCell>
            <CTableDataCell>Active</CTableDataCell>
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

export default Client
