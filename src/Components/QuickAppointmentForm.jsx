import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuickAppointmentForm = () => {
	const form = useRef();

	const notify = () => toast.success('Congratulations! Your appointment has been booked successfully.', {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
		});;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u46avmn', 'template_nb9qyp6', form.current, 'ywoK4eXQDCk0jYOQs')
      .then((result) => {
          console.log(result.text);
		  console.log("message sent");
		  
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
	<div>
		<form ref={form} onSubmit={sendEmail}>
      <div className='form-style-agile'>
      <input placeholder="Your Name" name="from_name" type="text" required=""/>
	  <input placeholder="Contact Number" name="contact" type="text" required=""/>
	  <input placeholder="Address" name='address' type="text" required=""/>
	  <input placeholder="Timing" name='timing' type="text" required=""/>
	  <button className="book-btn btn" value={"submit"} onClick={notify}>Quick Appointment</button>
	  <ToastContainer />
	  </div>
    </form>
       
    </div>
  )
}

export default QuickAppointmentForm