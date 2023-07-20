import React from 'react'

function ContactForm() {
  return (
    <div>
        
<section class="contact py-sm-5 py-4">
	<div class="container py-md-3">
		<h2 class="heading text-capitalize text-center mb-lg-5 mb-sm-4 mb-3"> Contact Us</h2>
		<div class="contact-form">
			<form action="#" method="post">
				<div class="row main-sectns">
					<div class="col-lg-3 col-md-6  form-text1">
						<label><span class="fa fa-user"></span> Your Name:</label>
						<input type="text" name="Name" placeholder="Enter your name" required=""/>
					</div>
					<div class="col-lg-3 col-md-6  form-text2">
						<label><span class="fa fa-phone"></span> Phone Number:</label>
						<input type="text" name="Phone no" placeholder="xxxxxxxxxx" required=""/>
					</div>
					<div class="col-lg-3 col-md-6  form-text1">
						<label><span class="fa fa-envelope-open"></span> Email Address:</label>
						<input type="email" name="email" placeholder="example@mail.com" required=""/>
					</div>
					<div class="col-lg-3 col-md-6  form-text2">
						<label><span class="fa fa-pencil"></span> Subject:</label>
						<input type="text" name="subject" placeholder="Hair Style" required=""/>
					</div>
				</div>
				<div class="main-sectns ">
					<div class=" form-text2 p-0">
						<textarea placeholder="Enter Your Message Here"></textarea>
					</div>
				</div>
				<button class="btn"> Submit</button>
			</form>
		</div>
	</div>
</section>

    </div>
  )
}

export default ContactForm