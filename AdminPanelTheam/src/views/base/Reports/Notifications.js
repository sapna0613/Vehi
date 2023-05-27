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

const Notifications=()=> {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Notification</strong>
            
            
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Title</CTableHeaderCell>
              <CTableHeaderCell scope="col">Description</CTableHeaderCell>
              <CTableHeaderCell scope="col">image</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Thomas</CTableDataCell>
              <CTableDataCell>Good</CTableDataCell>
              <CTableDataCell>
              <CImage rounded fluid src="https://th.bing.com/th?q=Black+Man+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" width={50} height={50} />
              </CTableDataCell>
              
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>B</CTableDataCell>
            <CTableDataCell>pic</CTableDataCell>
            <CTableDataCell>
            <CImage rounded fluid src="https://th.bing.com/th?q=Black+Man+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" width={50} height={50} />
            </CTableDataCell>
            
          </CTableRow>
          <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>C</CTableDataCell>
          <CTableDataCell>pic</CTableDataCell>
          <CTableDataCell>
          <CImage rounded fluid src="https://th.bing.com/th?q=Black+Man+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" width={50} height={50} />
          </CTableDataCell>
        </CTableRow>
          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Notifications
