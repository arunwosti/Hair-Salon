import React from 'react'

function WhyChooseUsComponents() {
  return (
    <div>
        {/* <!-- facts --> */}
<section className="facts" id="facts">
	<div className="container">
		<div className="row">
			<div className="col-lg-7 py-5">
				<div className="row inner-heading">
					<h2 className="heading text-capitalize my-md-4"> Why Choose Us</h2>
					<p className="mt-md-0 mt-2">Donec cursus congue risus, quis varius velit accumsan aliquam. Morbi semper nunc. Perspiciatis unde omnis iste
					natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor</p>
				</div>
				<div className="row mt-5 fact-grid-main">
					<div className="col-sm-4 stats-grid">
						<span className="fa fa-trophy"></span>
						<span>250</span>
						<h4>Experienced Barbers</h4>
					</div>
					<div className="col-sm-4 stats-grid">
						<span className="fa fa-scissors"></span>
						<span>50+</span>
						<h4>Amazing Hairstyles</h4>
					</div>
					<div className="col-sm-4 stats-grid">
						<span className="fa fa-smile-o"></span>
						<span>2000+</span>
						<h4>Satisfied clients</h4>
					</div>
				</div>
			</div>
			<div className="col-lg-5 p-lg-0 text-lg-right text-center">
				<img src="assets/images/facts.png" className="img-fluid" alt=""/>
			</div>
		</div>
	</div>
</section>
{/* <!-- //facts --> */}
    </div>
  )
}

export default WhyChooseUsComponents