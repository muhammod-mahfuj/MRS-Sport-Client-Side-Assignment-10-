import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';


const ContactUs = () => {

    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Submitted:", formData);
         Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Your Query has added, We will contact you soon!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 py-10 text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-6">Have questions? Fill out the form below, and we'll get back to you!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    defaultValue={formData.name} 
                    onChange={handleChange} 
                    className="input input-bordered w-full p-3"
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    defaultValue={user?.email} 
                    className="input input-bordered w-full p-3"
                    required
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="textarea textarea-bordered w-full p-3"
                    required
                ></textarea>
                <button type="submit" className="btn btn-primary w-full p-3">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
