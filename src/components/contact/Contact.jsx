import './Contact.css';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { useForm, ValidationError } from '@formspree/react';

const Contact = ({ id }) => {

  const [state, handleSubmit] = useForm('mlekajnw')
  if (state.succeeded) {
    return <p style={{ fontSize: '4rem', width: '100%', display: 'flex', justifyContent: 'center', color: 'white', textAlign: 'center'}}>Thank You For Emailing!</p>;
  }

  return (
    <div className='contact-page' id={id}>
      <div className='contact-div'>
        <div className='contact-title-div'>
          <h1>Contact Me</h1>
          <h3>Please leave your Name, Email, and a brief message. I look forward to hearing from you!</h3>
          <p className='contact-location'><MdLocationOn />St. Louis, MO</p>
          <a href='tel:+13142188818' className='contact-number'><FiPhoneCall className='contact-icon' /> +1(314) 218-8188</a>
          <a href='mailto:dominicfuentes1@yahoo.com' className='contact-email'><AiOutlineMail className='contact-icon' /> dominicfuentes1@yahoo.com</a>
        </div>
        <div className='contact-form-div'>
          <form onSubmit={handleSubmit} className='form'>
            <label className='contact-label'>Your Name</label>
            <input
              id='name'
              type='name'
              name='name'
              placeholder='Enter Name'
              />
            <ValidationError
              prefix='Name'
              field='name'
              errors={state.errors}
              />
            <label className='contact-label'>Email Address</label>
            <input 
              id='email'
              type='email'
              name='email'
              placeholder='Enter Email'
              />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
              />
            <label className='contact-label'>Messsage</label>  
            <textarea
              id='message'
              rows='3'
              name='message'
              />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
              />
            <div className='button-div'>
            <button className='contact-button' type='submit' disabled={state.submitting}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact