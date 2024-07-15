import React, {ChangeEvent, FormEvent, useState} from 'react';
import {InputField} from "./InputField";
import {Button} from "./Button";
import {postSubmitContactUs} from "../api/user-service";

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    await postSubmitContactUs(formData);
    console.log('submit')
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='text-wrapper'>
        <h2>Get In Touch</h2>
        <InputField
          placeholder='first name'
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          placeholder='last name'
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          placeholder='email'
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          placeholder='phone'
          type='text'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
        {/*<InputField
          placeholder='description'
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />*/}
        <textarea
          id="contact-description"
          name="description"
          placeholder='description'
          onChange={handleChange}
          defaultValue="I really enjoyed biking yesterday!"
        />
        <Button text='Submit' type='submit'/>
      </div>
      <div className='img-wrapper'>
        <img src="./img/hero02.jpg" alt=""/>
      </div>
    </form>
  );
};

export default ContactUsForm;
