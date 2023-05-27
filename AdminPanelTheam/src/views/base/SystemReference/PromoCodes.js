import React, { useState, useEffect } from "react";
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
  CImage,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import CreatePromoCode from "./CreatePromoCode";

const PromoCodes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/CreatePromoCode").then((result) => {
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
          `http://localhost:5000/CreatePromoCode/${id}`,
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
            <strong>Promo Codes</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton
                onClick={() => navigate("/base/SystemReference/CreatePromoCode")}
                color="primary"
                className="me-md-2"
              >
                Create Promo Codes
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable striped responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Profile Pic</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Country</CTableHeaderCell>
                  <CTableHeaderCell scope="col">State</CTableHeaderCell>
                  <CTableHeaderCell scope="col">City</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Promo Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Promo Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Percentage</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Max Amount</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Expiration Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status (Switch)</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>
                      <CImage rounded fluid src={item.profilePic} width={50} height={50} />
                    </CTableDataCell>
                    <CTableDataCell>{item.Country}</CTableDataCell>
                    <CTableDataCell>{item.State}</CTableDataCell>
                    <CTableDataCell>{item.City}</CTableDataCell>
                    <CTableDataCell>{item.PromoCode}</CTableDataCell>
                    <CTableDataCell>{item.PromoDescription}</CTableDataCell>
                    <CTableDataCell>{item.Percentage}</CTableDataCell>
                    <CTableDataCell>{item.MaxAmount}</CTableDataCell>
                    <CTableDataCell>{item.ExpirationDate}</CTableDataCell>
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
                  navigate("/base/SystemReference/UpdatePromoCode/"+item._id)
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

export default PromoCodes
