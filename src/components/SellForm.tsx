import React, {ChangeEvent, FormEvent, useState} from 'react';
import {InputField} from "./InputField";
import {Button} from "./Button";
import {postSubmitSell} from "../api/user-service";
import {useMutation} from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

interface formDataType {
    firstName: string;
    lastName: string;
    phone: string;
    StreetAdress: string;
    AdditionalInformation: string;
}

const SellForm: React.FC = () => {
    const mutation = useMutation({
        mutationFn: postSubmitSell
    })

    const [formData, setFormData] = useState<formDataType>({
        firstName: '',
        lastName: '',
        phone: '',
        StreetAdress: '',
        AdditionalInformation: ''
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
                        <h2>Seller Information</h2>
                        <h3>Please provide your details to sell your property</h3>
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
                            placeholder='phone(optional)'
                            type='text'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <InputField
                            placeholder='StreetAdress'
                            type='text'
                            name='streetadress'
                            value={formData.StreetAdress}
                            onChange={handleChange}
                        />
                        <textarea
                            id="contact-description"
                            className='no-resize'
                            name="AdditionalInformation"
                            placeholder='Additionalinformaiton'
                            onChange={handleChange}
                        />
                        <Button text='Submit' type='submit'/>
                    </div>

                </>
            )}
        </form>
    );
};

export default SellForm;
