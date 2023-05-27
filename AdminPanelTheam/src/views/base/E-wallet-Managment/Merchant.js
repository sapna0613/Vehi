import React, { useState, useEffect } from "react";
import {
  CCard,CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell,CButton
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Button } from '@coreui/coreui'
import { useNavigate } from 'react-router-dom'



const Merchant=()=> {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/CreateMerchant").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  console.log(data);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:5000/CreateMerchant/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setData((prevData) => prevData.filter((item) => item._id !== id));
        } else {
          console.log("Failed to delete item");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
          <strong>Merchant</strong>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
<CButton
  onClick={() => navigate("/base/E-wallet-Managment/CreateMerchant")}
  color="primary"
  className="me-md-2"
>
  CreateMerchant
</CButton>
</div>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">CustomerName</CTableHeaderCell>
              <CTableHeaderCell scope="col">WalletBalance</CTableHeaderCell>
              <CTableHeaderCell scope="col">Country</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action(Edit, Delete)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
{data.map((item, index) => (
  <CTableRow key={index}>
    <CTableDataCell>{index + 1}</CTableDataCell>
  
    <CTableDataCell>{item.CustomerName}</CTableDataCell>
    <CTableDataCell>{item.WalletBalance}</CTableDataCell>
    <CTableDataCell>{item.Country}</CTableDataCell>
  
<CTableDataCell>
  <CButton
    onClick={() => handleDelete(item._id)}
    color="danger"
  >
    Delete
  </CButton>
</CTableDataCell>
<CTableDataCell>


<div className="d-grid gap-2 d-md-flex justify-content-md-end">
<CButton
onClick={() =>
  navigate("/base/E-wallet-Managment/UpdateMerchant/"+item._id)
}
color="primary"
className="me-md-2"
>
Edit
</CButton>

</div>


</CTableDataCell>
</CTableRow>
))}
</CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Merchant


