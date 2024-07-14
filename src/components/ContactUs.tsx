import React, { useState } from 'react';
import './ContactUs.css'; // 예시로 ContactUs.css 파일을 import

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        description: ''
    });

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {
            first_name: '',
            last_name: '',
            email: '',
            description: ''
        };
        if (!formData.first_name) newErrors.first_name = 'Please enter your first name.';
        if (!formData.last_name) newErrors.last_name = 'Please enter your last name.';
        if (!formData.email) newErrors.email = 'Please enter your email.';
        if (!formData.description) newErrors.description = 'Please enter a description.';
        if (formData.description && formData.description.length < 30) newErrors.description = 'Description must be at least 30 characters long.';
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).every(key => newErrors[key as keyof typeof newErrors] === '')) {
            // 유효성 검사를 통과한 경우 서버에 데이터 전송
            try {
                const response = await fetch('http://localhost:8081/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstName: formData.first_name,
                        lastName: formData.last_name,
                        email: formData.email,
                        phoneNumber: formData.phone,
                        description: formData.description
                    })
                });

                if (response.ok) {
                    alert('Your inquiry has been successfully submitted.');
                    // 폼 초기화
                    setFormData({
                        first_name: '',
                        last_name: '',
                        email: '',
                        phone: '',
                        description: ''
                    });
                    setErrors({
                        first_name: '',
                        last_name: '',
                        email: '',
                        description: ''
                    });
                } else {
                    alert('Submission failed. Please try again.');
                }
            } catch (error) {
                alert('An error occurred. Please try again.');
                console.error('Error:', error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
                {errors.first_name && <p className="error-message">{errors.first_name}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
                {errors.last_name && <p className="error-message">{errors.last_name}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                {errors.description && <p className="error-message">{errors.description}</p>}
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default ContactUs;
