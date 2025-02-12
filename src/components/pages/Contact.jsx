import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <div className='display'>
        <div className='location'>
            <div className='address'>
                <div className='address-text'>
                    <h4>Address:</h4>
                        <p id='address'>29 Ystrad Road,</p>
                        <p>Fforestfach, Swansea</p>
                        <p id='tel'>Tel: 07794070902</p>
                </div>
            <iframe className='map' width="380" height="350" 
                frameborder="0" scrolling="no" marginheight="0" 
                marginwidth="0" src="https://maps.google.com/maps?width=380&amp;height=350&amp;hl=en&amp;q=29%20Ystrad%20Road%20Swansea+(Fuschia%20Hive)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/">cat gps tracker</a>
            </iframe>
            </div>
            <h2>Any queries please get in touch using the form below</h2>
            <br />
            <br />
            <br />
        </div>

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
            </div>
    </>
  )
}

export default Contact;
