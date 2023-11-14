import React, {useState} from 'react';
import styles from './styles.css';
import { setRecord, setRecords } from '../../Redux/recordSlice';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const recordSelector = useSelector((state) => state);

    const [formData, setFormData] = useState({
        name: '',
        dateCompleted: '',
        rating: 1,
        notes: '',
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        dateCompleted: '',
        rating: '',
        notes: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
          }));
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...formErrors };
    
        // Basic validation, you can add more specific checks based on your requirements
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        }
    
        if (!formData.dateCompleted) {
          newErrors.dateCompleted = 'Date Completed is required';
          valid = false;
        }

        if (!formData.notes.trim()) {
            newErrors.notes = 'Notes are required';
            valid = false;
          }
    
        setFormErrors(newErrors);
        return valid;
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // preventDefault prevents the form from refreshing the page

        if (validateForm()) {
            // Updates the Redux store with the new record using the setRecord action creator
            dispatch(setRecord(formData));
            dispatch(setRecords(formData));
            console.log(recordSelector);

            setFormData({
              name: '',
              dateCompleted: '',
              rating: 1,
              notes: '',
            });
            alert('Information logged in Records!');
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Log your day!</h1>
            <div className="form-header">
                <p>Enter your information below:</p>
            </div>
            <form style={styles} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <span className="error-message">{formErrors.name}</span>
                </label>
                <br />

                <label>
                    Date Completed:
                    <input
                        type='date'
                        name='dateCompleted'
                        value={formData.dateCompleted}
                        onChange={handleChange}
                    />
                    <span className="error-message">{formErrors.dateCompleted}</span>
                </label>
                <br />

                <label>
                    Rating:
                    <select name="rating" value={formData.rating} onChange={handleChange}>
                        {[1, 2, 3, 4, 5].map((number) => (
                    <option key={number} value={number}>
                        {number}
                    </option>
                    ))}
                    </select>
                </label>
                <br />

                <label>
                    Notes:
                    <textarea
                        name='notes'
                        value={formData.notes}
                        onChange={handleChange}
                    />
                    <span className="error-message">{formErrors.notes}</span>
                </label>
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;