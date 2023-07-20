import React from 'react'
import BannerComponents from '../Components/Banner'
import ExpertsComponents from '../Components/Experts'
import PagedetailComponent from '../Components/Pagedetail'
import {Link} from "react-router-dom"


function Aboutus() {
  return (
    <div>
      <BannerComponents/>

      <PagedetailComponent path={'/aboutus'} page={'About Us'}/>

{/* <!-- about --> */}
<section class="about py-sm-5 py-4">
	<div class="container py-lg-5 py-sm-3">
		<div class="row">
			<div class="col-lg-6 inner-about">
				<span class="fa fa-scissors"></span>
				<h4 class="mt-md-4 mt-2">We make hair cut, shaving & Cleaning</h4>
				<h5 class="bottom mt-sm-4 mt-3">For man growing beards!</h5>
				<p class="">Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem ut accusa ntium dolor remque laudantium, totam rem
				aperiam, eaque ipsa quae abse illo quasi sed architecto beatae vitae dicta sut dolor etr explicabo. Morbi a luctus magna, eu rutrum
				turpis. Sed perspi ciatis unde error ipsum voluptatem.</p>
			</div>
			<div class="col-lg-6 mt-lg-0 mt-4">
				<img src="assets/images/4.jpg" class="img-fluid" alt="" />
			</div>
		</div>
	</div>
</section>
{/* <!-- //about --> */}

{/* <!-- discount --> */}
<section class="discount-grid text-center">
	<div class="overlay-all py-5">
		<div class="container py-md-4">
			<div class="offer-grid">
				<h2 class="text-capitalize">Get Flat 25% Discount On Every Sunday</h2>
				<p class="mt-4">Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem ut accusa ntium dolor remque et laudantium, totam rem
				aperiam, eaque ipsa quae abse illo quasi sed.</p>
				<Link to="/" className="btn"> Make An Appointment</Link>
			</div>
		</div>
	</div>
</section>
{/* <!-- //discount --> */}

<ExpertsComponents/>
{/* 
<!-- testimonials --> */}
<section class="testi py-5" id="testi">
	<div class="container pb-xl-5 py-lg-3">
		<h3 class="text-center heading mb-5">What our customers say</h3>
		<div class="row">
			<div class="col-lg-6">
				<div class="row testi-cgrid border-right-grid">
					<div class="col-sm-4 testi-icon mb-sm-0 mb-3">
						<img src="assets/images/te1.jpg" alt="" class="img-fluid"/>
					</div>
					<div class="col-sm-8">
						<p class="mx-auto"><span class="fa fa-quote-left"></span> Onec consequat sapien utleo dolor rhoncus. Nullam dui mi, vulputater act metus semper. Vestibulum sed dolor.</p>
						<h6 class="b-w3ltxt mt-3">Johnson - <span>customer</span></h6>
					</div>
				</div>
			</div>
			<div class="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
				<div class="row testi-cgrid border-left-grid">
					<div class="col-sm-4 testi-icon mb-sm-0 mb-3">
						<img src="assets/images/te2.png" alt="" class="img-fluid"/>
					</div>
					<div class="col-sm-8">
						<p class="mx-auto"><span class="fa fa-quote-left"></span> Onec consequat sapien utleo dolor rhoncus. Nullam dui mi, vulputater act metus semper. Vestibulum sed dolor.</p>
						<h6 class="b-w3ltxt mt-3">walkner - <span>customer</span></h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- testimonials --> */}


    </div>
  )
}

export default Aboutus