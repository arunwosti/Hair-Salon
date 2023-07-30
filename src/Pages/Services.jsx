import React from 'react'
import BannerComponents from '../Components/Banner'
import PagedetailComponent from '../Components/Pagedetail'
import PriceList from '../Components/PriceList'
import ServicesComponents from '../Components/Services'

function Services() {
  return (
    <div>
       
<BannerComponents/>

<PagedetailComponent path={'/services'} page={' Services'}/>

{/* <!-- services --> */}
<ServicesComponents/>
{/* <!-- //services --> */}

{/* <!-- pricing --> */}
<section class="pricing py-5">	
	<div class="container py-md-4">
		<h3 class="heading text-capitalize text-center mb-5"> Services & Pricing</h3>
		<div class="row pricing-grids">
			<div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
				<div class="padding">
					<img src="assets/images/mustache.png" class="img-fluid" alt="" />
                     <PriceList title={'Hair Cut'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'BEARD SHAPING'} price={'22'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'CLEAN SHAVE'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'HAIR STRAIGHTEN'} price={'11'} description={'Cutting, Washing, Drying'}/>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
				<div class="padding">
					<img src="assets/images/mustache.png" class="img-fluid" alt="" />
                     <PriceList title={'Hair Cut'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'BEARD SHAPING'} price={'22'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'CLEAN SHAVE'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'HAIR STRAIGHTEN'} price={'11'} description={'Cutting, Washing, Drying'}/>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 ">
				<div class="padding">
					<img src="assets/images/mustache.png" class="img-fluid" alt="" />
                     <PriceList title={'Hair Cut'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'BEARD SHAPING'} price={'22'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'CLEAN SHAVE'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'HAIR STRAIGHTEN'} price={'11'} description={'Cutting, Washing, Drying'}/>
				</div>
			</div>	
		</div>		
	</div>		
</section>
{/* <!-- //pricing --> */}
    </div>
  )
}

export default Services