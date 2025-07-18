import React from 'react'
import Instapage from '../../Instapage'

function Contact() {
  return (
    <>
      <div className='container'>
        <div className='row'>

        <div className=' contact01 col-xl-6 col-lg-6 col-md-6'>
           <h4>Contact Us</h4>
            <p>If you have any Question plese fill out the form</p>
            <form >
                <label>NAME</label>
                <input type='text' placeholder='Enter name here' className='input01' />

                <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 input02' > 
                <label>Email</label>
                <input type='email' placeholder='Email' />
                </div>

                <div className='col-xl-6 col-lg-6 col-md-6 input02'>
                <label>Phone</label>
                <input type='phone' placeholder='Phone' />
                </div>
                </div>

                <div className='message-box'>

                <label>Message</label>
                <textarea placeholder='Message' cols={65} rows={8} />
                </div>
                <button>SEND MESSAGE</button>

            </form>
        </div>


        <div className=' map-location  col-xl-6 col-lg-6 col-md-6'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4477.7781309241345!2d72.8510508178072!3d19.310718109456204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02921c6677b%3A0xb164cc17e553e965!2sBhayandar%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1731740452261!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           

        </div>


        </div>
        </div>      



    <Instapage/>
    </>
  )
}

export default Contact