// Records/index.js
import React, { useState } from 'react';
import './styles.css'; // Import your styles.css file

const Records = () => {
  const [records, setRecords] = useState([
    // Sample records, replace with your data
    { id: 1, name: 'John Doe', dateCompleted: '2023-01-01', rating: 4, notes: 'Lorem ipsum', },
    { id: 2, name: 'Jane Doe', dateCompleted: '2023-02-15', rating: 5, notes: 'Dolor sit amet', },
    // Add more records as needed
  ]);

  const handleEdit = (id) => {
    // Implement edit functionality, e.g., navigate to an edit page or open a modal
    console.log(`Edit record with id: ${id}`);
  };

  return (
    <div className="records-container">
      <div className="records-header">
        <h1 className="records-title">Records</h1>
        <div className="spacer"></div>
        <button className="back-button"> Back </button>
      </div>
      <div className="records-list">
        {records.map((record) => (
          <div key={record.id} className="record-item">
            <div className="record-number">{record.id}</div>
            <div className="record-details">
              <p>Name: {record.name}</p>
              <p>Date Completed: {record.dateCompleted}</p>
              <p>Rating: {record.rating}</p>
              <p>Notes: {record.notes}</p>
            </div>
            <button className="edit-button" onClick={() => handleEdit(record.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Records;
