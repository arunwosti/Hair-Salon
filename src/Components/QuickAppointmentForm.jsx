import React from 'react'
import { Link } from 'react-router-dom'

function QuickAppointmentForm() {
  return (
    <div>
        <form action="#" method="post">
						<div className="form-style-agile">
							<input placeholder="Your Name" name="name" type="text" required=""/>
							<input placeholder="Contact Number" name="number" type="text" required=""/>
							<input placeholder="Address" type="text" required=""/>
							<input placeholder="Timing" type="text" required=""/>
							<button className="book-btn btn"><Link to='/appointment-booked' className='book-btn'> Quick Appointment </Link></button>
						</div>
					</form>
    </div>
  )
}

export default QuickAppointmentForm