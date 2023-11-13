import React, {useState} from 'react';
import styles from './styles.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        dateCompleted: '',
        rating: 1,
        notes: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            dateCompleted: '',
            rating: 1,
            notes: '',
        });
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
                </label>
                <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;