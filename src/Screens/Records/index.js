// Records/index.js
import React, { useEffect } from 'react';
import './styles.css'; // Import your styles.css file
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Records = () => {
  const navigate = useNavigate();
  const recordSelector = useSelector((state) => state);
  const handleEdit = (record, index) => {
    // Implement edit functionality, e.g., navigate to an edit page or open a modal
    navigate(`/records/${index + 1}`, { state: { record, index } });
  };

  return (
    <div className="records-container">
      <div className="records-header">
        <h1 className="records-title">Records</h1>
      </div>
      <div className="records-list">
        {recordSelector.record.records.length > 0 ? (recordSelector.record.records).map((record, index) => (
          <div key={index} className="record-item">
            <div className="record-number">{index + 1}</div>
            <div className="record-details">
              <p>Name: {record.name}</p>
              <p>Date Completed: {record.dateCompleted}</p>
              <p>Rating: {record.rating}</p>
              <p>Notes: {record.notes}</p>
            </div>
            <button className="edit-button" onClick={() => handleEdit(record, index)}>Edit</button>
          </div>
        )): <p>No records logged yet!</p>}
      </div>
    </div>
  );
};

export default Records;
