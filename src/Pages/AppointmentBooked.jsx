import React from 'react'
import BannerComponents from '../Components/Banner'
import PagedetailComponent from '../Components/Pagedetail'

function AppointmentBooked() {
  return (
    <div>
        <BannerComponents/>

        <PagedetailComponent path={'/appointment-booked'} page={'Appointment Booked'}/>

        <div className='message-box'>
            <span className='msg-text'><span className='congrats-txt'>Congratulations!</span> Your appointment has been booked.</span>
        </div>
    </div>
  )
}

export default AppointmentBooked