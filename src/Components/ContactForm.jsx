import React from 'react'

function ContactForm() {
  return (
    <div>
        
<section className="contact py-sm-5 py-4">
	<div className="container py-md-3">
		<h2 className="heading text-capitalize text-center mb-lg-5 mb-sm-4 mb-3"> Contact Us</h2>
		<div className="contact-form">
			<form action="#" method="post">
				<div className="row main-sectns">
					<div className="col-lg-3 col-md-6  form-text1">
						<label><span className="fa fa-user"></span> Your Name:</label>
						<input type="text" name="Name" placeholder="Enter your name" required=""/>
					</div>
					<div className="col-lg-3 col-md-6  form-text2">
						<label><span className="fa fa-phone"></span> Phone Number:</label>
						<input type="text" name="Phone no" placeholder="xxxxxxxxxx" required=""/>
					</div>
					<div className="col-lg-3 col-md-6  form-text1">
						<label><span className="fa fa-envelope-open"></span> Email Address:</label>
						<input type="email" name="email" placeholder="example@mail.com" required=""/>
					</div>
					<div className="col-lg-3 col-md-6  form-text2">
						<label><span className="fa fa-pencil"></span> Subject:</label>
						<input type="text" name="subject" placeholder="Hair Style" required=""/>
					</div>
				</div>
				<div className="main-sectns ">
					<div className=" form-text2 p-0">
						<textarea placeholder="Enter Your Message Here"></textarea>
					</div>
				</div>
				<button className="btn"> Submit</button>
			</form>
		</div>
	</div>
</section>

    </div>
  )
}

export default ContactForm