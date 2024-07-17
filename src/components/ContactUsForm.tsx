import React, {ChangeEvent, FormEvent, useState} from 'react';
import {InputField} from "./InputField";
import {Button} from "./Button";
import {postSubmitContactUs} from "../api/user-service";
import {useMutation} from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

interface formDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}

const ContactUsForm: React.FC = () => {
  const mutation = useMutation({
    mutationFn: postSubmitContactUs
  })

  const [formData, setFormData] = useState<formDataType>({
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

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    mutation.mutate(formData);
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      {mutation.isPending ? (
        <LoadingSpinner/>
      ) : (
        <>
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
            <textarea
              id="contact-description"
              name="description"
              placeholder='description'
              onChange={handleChange}
              defaultValue="I really enjoyed biking yesterday!"
              className='no-resize'
            />
            <Button text='Submit' type='submit'/>
          </div>

        </>
      )}
    </form>
  );
};

export default ContactUsForm;
