import React, { useState } from 'react'

const Contact = () => {
    const[formData, setFormData]=useState({
        name:'',
        email:'',
        message:''
    });
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form Submitted:',formData);
        //Add form submission logic here
    };

  return (
    <section id='contact' className='contact'>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='your Name'value={formData.name} onChange={handleChange} required/>
        <input type='email' name='email' placeholder='your Email'value={formData.email} onChange={handleChange} required/>
        <textarea name='message' placeholder='your message'value={formData.message} onChange={handleChange}></textarea>
        <button type='Submit'> Send Message</button>
    </form>
    </section>
  )
}

export default Contact




