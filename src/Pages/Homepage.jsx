import React from 'react'
import CustomButton from '../Components/Button'
import ExpertsComponents from '../Components/Experts'
import NavComponents from '../Components/Nav'
import QuickAppointmentForm from '../Components/QuickAppointmentForm'
import ServicesComponents from '../Components/Services'
import WhyChooseUsComponents from '../Components/WhyChooseUs'


function Homepage() {
  return (
    <div>
        

{/*<!-- banner --> */} 
<section class="banner_section" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1" />
		<input type="radio" name="slides" id="slides_2" />
		<input type="radio" name="slides" id="slides_3" />
		<input type="radio" name="slides" id="slides_4" />
		<ul>
			<li>
				<div class="banner-top">
					<div class="overlay">
						<div class="container">
							<div class="banner-info">
								<h3 class="text-wh">We make your hair <span>look <span class="clr">perfect</span></span></h3>
								<h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
                                <span className='myButton'>
                                <CustomButton path={"/aboutus"} buttonName={'Read More'}/>
								<CustomButton path={'#about'} buttonName={'Book Now'}/>
                                </span>
								
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="banner-top1">
					<div class="overlay">
						<div class="container">
							<div class="banner-info">
								<h3 class="text-wh">Skilled Barbers Make<span>Great <span class="clr">Beards</span></span></h3>
								<h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
								<CustomButton path={"/aboutus"} buttonName={'Read More'}/>
								<CustomButton path={'#about'} buttonName={'Book Now'}/>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="banner-top2">
					<div class="overlay">
						<div class="container">
							<div class="banner-info">
								<h3 class="text-wh">We make your hair <span>look <span class="clr">perfect</span></span></h3>
								<h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
								<CustomButton path={"/aboutus"} buttonName={'Read More'}/>
								<CustomButton path={'#about'} buttonName={'Book Now'}/>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="banner-top3">
					<div class="overlay">
						<div class="container">
							<div class="banner-info">
								<h3 class="text-wh">Skilled Barbers Make<span>Great <span class="clr">Beards</span></span></h3>
								<h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
								<CustomButton path={"/aboutus"} buttonName={'Read More'}/>
								<CustomButton path={'#about'} buttonName={'Book Now'}/>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="arrows">
			<label for="slides_1"></label>
			<label for="slides_2"></label>
			<label for="slides_3"></label>
			<label for="slides_4"></label>
		</div>
	</div>
</section>
{/*<!-- //banner --> */} 

{/*<!-- about --> */} 
<section class="about py-5" id="about">
	<div class="container py-lg-5">
		<div class="row about-grids">
			<div class="col-lg-8">
				<h2 class="mt-lg-3">Welcome to our Hair salon</h2>
				<h5 class="plane mt-md-4 mt-3">We make your hair <span>look Great, perfect!</span></h5>
				<p class="">Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem ut accusa ntium dolor remque laudantium, totam rem
				aperiam, eaque ipsa quae abse illo quasi sed architecto beatae vitae dicta sut dolor etr explicabo. Morbi a luctus magna, eut rutrum
				turpis. Sed perspiciatis unde omnis iste natus error ipsum voluptatem ut accusantium dolor.</p>
				<p class="mt-3">Eaque ipsa quae abse illo quasi sed architecto beatae vitae dicta sut dolor etr explicabo. Morbi a luctus magna, eu rutrum
				turpis. Sed perspiciatis unde omnis iste natus error et ipsum voluptatem ut accusantium dolor voluptatem ut accusa ntium dolor.</p>
			</div>
			<div class="col-lg-4 col-md-8 mt-lg-0 mt-5">
				<div class="padding">
					<img src="assets/images/mustache.png" class="img-fluid" alt="" />
					<QuickAppointmentForm/>
				</div>
			</div>
		</div>
	</div>
</section>
{/*<!-- //about --> */} 

{/*<!-- about bottom --> */} 
<section class="bottom-banner">
	<div class="d-lg-flex">
		<div class="col-lg-7 p-lg-0 text-lg-right text-center mt-lg-0 mt-4 bottom-left">
		</div>
		<div class="col-lg-5 banner-about text-center">
			<span class="fa fa-scissors"></span>
				<h4 class="mt-sm-4 mt-2">making hair style</h4>
				<h5 class="bottom mt-m-4 mt-3">For man growing beards!</h5>
				<p class="">Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem ut accusa ntium dolor remque laudantium, totam rem
				aperiam, eaque ipsa quae abse illo quasi sed architecto beatae vitae dicta sut dolor etr explicabo. Morbi a luctus magna, eu rutrum
				turpis. Sed perspiciatis unde.</p>
		</div>
	</div>
</section>
{/*<!-- //about bottom --> */} 

<ServicesComponents/>

<WhyChooseUsComponents/>

<ExpertsComponents/>




</div>
  )
}

export default Homepage