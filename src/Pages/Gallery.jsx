import React from 'react'
import BannerComponents from '../Components/Banner'
import PagedetailComponent from '../Components/Pagedetail'

function Gallery() {
  return (
    <div>
       <BannerComponents/>

       <PagedetailComponent path={'/gallery'} page={'  Gallery'}/>

{/* <!-- gallery --> */}
<div className="gallery py-sm-5 py-4 position-relative" id="gallery">
	<div className="container py-lg-3">
		<h2 className="heading text-center mb-lg-5 mb-sm-4 mb-3 editContent">Our Gallery</h2>
		<div className="news-grids gal">
			<div className="row">
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img">
					<a href="#gal1"><img src="assets/images/g1.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 1</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img my-md-0">
					<a href="#gal2"><img src="assets/images/g2.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 2</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img">
					<a href="#gal3"><img src="assets/images/g3.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 3</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img">
					<a href="#gal4"><img src="assets/images/g4.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 4</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img">
					<a href="#gal5"><img src="assets/images/g5.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 5</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img my-md-0">
					<a href="#gal6"><img src="assets/images/g6.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 6</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img">
					<a href="#gal1"><img src="assets/images/g1.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 7</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-6 gal-img">
					<a href="#gal2"><img src="assets/images/g2.jpg" alt="projects image" className="img-fluid"/></a>
					<h5>Hairstyle 8</h5>
					<p>Nullam dui mi, vulputater act metus dolor sit amet.</p>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- gallery popups --> */}
	{/* <!-- popup--> */}
	<div id="gal1" className="popup-effect">
		<div className="popup">
			<img src="images/g1.jpg" alt="Popup Image" className="img-fluid" />
			<p>Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus.</p>
			<a className="close" href="#gallery">&times;</a>
		</div>
	</div>
	{/* <!-- //popup --> */}
	{/* <!-- popup--> */}
	<div id="gal2" className="popup-effect">
		<div className="popup">
			<img src="images/g2.jpg" alt="Popup Image" className="img-fluid" />
			<p>Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus.</p>
			<a className="close" href="#gallery">&times;</a>
		</div>
	</div>
	{/* <!-- //popup --> */}
	{/* <!-- popup--> */}
	<div id="gal3" className="popup-effect">
		<div className="popup">
			<img src="images/g3.jpg" alt="Popup Image" className="img-fluid" />
			<p>Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus.</p>
			<a className="close" href="#gallery">&times;</a>
		</div>
	</div>
	{/* <!-- //popup --> */}
	{/* <!-- popup--> */}
	<div id="gal4" className="popup-effect">
		<div className="popup">
			<img src="images/g4.jpg" alt="Popup Image" className="img-fluid" />
			<p>Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus.</p>
			<a className="close" href="#gallery">&times;</a>
		</div>
	</div>
	{/* <!-- //popup --> */}
	{/* <!-- popup--> */}
	<div id="gal5" className="popup-effect">
		<div className="popup">
			<img src="images/g5.jpg" alt="Popup Image" className="img-fluid" />
			<p>Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus.</p>
			<a className="close" href="#gallery">&times;</a>
		</div>
	</div>
	{/* <!-- //popup --> */}
	{/* <!-- popup--> */}
	<div id="gal6" className="popup-effect">
		<div className="popup">
			<img src="images/g6.jpg" alt="Popup Image" className="img-fluid" />
			<p>Nullam dui mi, vulputater act metus dolor sit amet, onec consequat sapien utleo dolor rhoncus.</p>
			<a className="close" href="#gallery">&times;</a>
		</div>
	</div>
	{/* <!-- //popup --> */}
	{/* <!-- //gallery popups --> */}
</div>
{/* <!-- //gallery --> */}



    </div>
  )
}

export default Gallery