import React from 'react'

function Footer() {
  return (
    <div>
        {/*<!-- footer --> */} 
<footer className="py-sm-5 py-4">
	<div className="container py-md-3">
		<div className="footer-logo text-center">
			<a className="navbar-brand" href="#"><span className="fa fa-scissors"></span>Men's Salon</a>
		</div>
		<div className="row my-4 footer-middle">
			<div className="col-md-5 text-md-right address">
				<p><span className="fa fa-map-marker"></span>Location : 121 Brunel Rd, Mississuaga, Canada.</p>
			</div>
			<div className="col-md-2 text-md-center my-md-0 my-sm-4 my-2 footer-icon">
				<span className="fa fa-scissors"></span>
			</div>
			<div className="col-md-5 text-md-left phone">
				<p><span className="fa fa-phone"></span>Phone : +121 568 789 901</p>
				<p><span className="fa fa-envelope-open"></span>Email : <a href="mailto:example@mail.com">example@mail.com</a></p>
			</div>
		</div>
		<div className="footer-grid">
			<div className="social text-center">
				<ul className="d-flex justify-content-center">
					<li className="mx-2"><a href="#"><span className="fab fa-facebook-f"></span></a></li>
					<li className="mx-2"><a href="#"><span className="fab fa-twitter"></span></a></li>
					<li className="mx-2"><a href="#"><span className="fa fa-rss"></span></a></li>
					<li className="mx-2"><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
					<li className="mx-2"><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>
{/*<!-- footer --> */} 

{/*<!-- copyright --> */} 
<div className="copyright py-3 text-center">
	<p>© 2023 Men's Salon. All Rights Reserved | Design by  Group 8 </p>
</div>
{/*<!-- //copyright --> */} 

{/*<!-- move top icon --> */} 
<a href="#home" className="move-top text-center"></a>
{/*<!-- //move top icon --> */} 
    </div>
  )
}

export default Footer