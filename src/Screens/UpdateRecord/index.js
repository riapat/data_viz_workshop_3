// UpdateRecord/index.js
import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your styles.css file

import { useParams, useNavigate, useLocation } from "react-router-dom";

const UpdateRecord = ({ onCancel, onSave }) => {
  const navigate = useNavigate();
  //location is used to get the state passed from the previous page
  const location = useLocation();
  const { record } = location.state || {};
  // params is used to get the id from the url
  const { id } = useParams();

  const [updatedRecord, setUpdatedRecord] = useState({
    id: record.id,
    name: record.name,
    dateCompleted: record.dateCompleted,
    rating: record.rating,
    notes: record.notes,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    dateCompleted: '',
    rating: '',
    notes: '',
  });

  useEffect(() => {
    if (record) {
      setUpdatedRecord({
        id: record.id,
        name: record.name,
        dateCompleted: record.dateCompleted,
        rating: record.rating,
        notes: record.notes,
      });
    }
  }, [record]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Basic validation, you can add more specific checks based on your requirements
    if (!updatedRecord.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!updatedRecord.dateCompleted) {
      newErrors.dateCompleted = 'Date Completed is required';
      valid = false;
    }

    if (updatedRecord.rating < 1 || updatedRecord.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
      valid = false;
    }

    if (!updatedRecord.notes.trim()) {
      newErrors.notes = 'Notes are required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleCancel = () => {
    // onCancel();
    navigate('/records');
  };

  const handleSave = () => {
    if (validateForm()) {
        // onSave(updatedRecord);
      }
    navigate('/records');
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
        <span className="error-message">{formErrors.name}</span>
        <label htmlFor="dateCompleted">Date Completed:</label>
        <input
          type="date"
          id="dateCompleted"
          name="dateCompleted"
          value={updatedRecord.dateCompleted}
          onChange={handleInputChange}
        />
        <span className="error-message">{formErrors.dateCompleted}</span>

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={updatedRecord.rating}
          onChange={handleInputChange}
        />
        <span className="error-message">{formErrors.rating}</span>

        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={updatedRecord.notes}
          onChange={handleInputChange}
        ></textarea>
        <span className="error-message">{formErrors.notes}</span>

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
