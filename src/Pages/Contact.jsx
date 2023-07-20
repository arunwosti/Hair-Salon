import React from 'react'
import BannerComponents from '../Components/Banner'
import ContactForm from '../Components/ContactForm'
import Map from '../Components/Map'
import PagedetailComponent from '../Components/Pagedetail'

function Contact() {
  return (
    <div>
       
<BannerComponents/>

<PagedetailComponent path={'/contact'} page={'Contact Us'}/>

<ContactForm/>

<Map/>


    </div>
  )
}

export default Contact;