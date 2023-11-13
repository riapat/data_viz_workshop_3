// UpdateRecord/index.js
import React, { useState } from 'react';
import './styles.css'; // Import your styles.css file

const UpdateRecord = ({ record, onCancel, onSave }) => {
  const [updatedRecord, setUpdatedRecord] = useState({
    id: record.id,
    name: record.name,
    dateCompleted: record.dateCompleted,
    rating: record.rating,
    notes: record.notes,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleSave = () => {
    onSave(updatedRecord);
  };

  return (
    <div className="update-record-container">
      <h2>Edit Record</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={updatedRecord.name}
          onChange={handleInputChange}
        />

        <label htmlFor="dateCompleted">Date Completed:</label>
        <input
          type="date"
          id="dateCompleted"
          name="dateCompleted"
          value={updatedRecord.dateCompleted}
          onChange={handleInputChange}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={updatedRecord.rating}
          onChange={handleInputChange}
        />

        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={updatedRecord.notes}
          onChange={handleInputChange}
        ></textarea>

        <div className="button-container">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRecord;
