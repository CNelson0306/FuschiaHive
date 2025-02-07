import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <section id='contact' className='contactContainer'>
        <h1 className='sectionTitle'>Contact</h1>


        <form action='' method='post'>
            <div className='formGroup'>
                <label htmlFor='name' hidden>
                    Name
                </label>
                <input 
                type='text' 
                name='name' 
                id='name' 
                placeholder='Name' 
                required 
                />
            </div>

            <div className='formGroup'>
                <label htmlFor='email' hidden>
                    Email
                </label>
                <input 
                type='email' 
                name='email' 
                id='email' 
                placeholder='Email' 
                required 
                />
            </div>

            <div className='formGroup'>
                <label htmlFor='message' hidden>
                    Message
                </label>
                <textarea 
                name='message' 
                id='message' 
                placeholder='Message' 
                required>
                </textarea> 
            </div>

            {/* For the form functionality i used formspree.io */}
            <input className='hover btn' type='submit' value='Submit' />
        </form>
    </section>
    </>
  )
}

export default Contact;
