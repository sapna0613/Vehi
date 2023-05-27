import React, { useState, useEffect } from "react";
import {
  CCard,CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell,CButton
} from '@coreui/react'

import { useNavigate } from 'react-router-dom'



const DisputeManager=()=> {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/CreateDisputeManager").then((result) => {
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
          `http://localhost:5000/CreateDisputeManager/${id}`,
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
          <strong>Affiliate</strong>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
<CButton
  onClick={() => navigate("/base/System_Roles/CreateDisputeManager")}
  color="primary"
  className="me-md-2"
>
  CreateDisputeManager
</CButton>
</div>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status(Edit, Delete)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
{data.map((item, index) => (
  <CTableRow key={index}>
    <CTableDataCell>{index + 1}</CTableDataCell>
  
    <CTableDataCell>{item.Name}</CTableDataCell>
    <CTableDataCell>{item.Email}</CTableDataCell>
    <CTableDataCell>{item.Phone}</CTableDataCell>
    <CTableDataCell>{item.Status}
    <select
    className="form-control"
    value={item.status}
    onChange={(e) => {
      const updatedData = data.map((d) => {
        if (d._id === item._id) {
          return { ...d, status: e.target.value };
        }
        return d;
      });
      setData(updatedData);
    }}
  >
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
</CTableDataCell>
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
  navigate("/base/System_Roles/UpdateAccountManager/"+item._id)
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

export default DisputeManager


