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
<section className="pricing py-5">	
	<div className="container py-md-4">
		<h3 className="heading text-capitalize text-center mb-5"> Services & Pricing</h3>
		<div className="row pricing-grids">
			<div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
				<div className="padding">
					<img src="assets/images/mustache.png" className="img-fluid" alt="" />
                     <PriceList title={'Hair Cut'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'BEARD SHAPING'} price={'22'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'CLEAN SHAVE'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'HAIR STRAIGHTEN'} price={'11'} description={'Cutting, Washing, Drying'}/>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
				<div className="padding">
					<img src="assets/images/mustache.png" className="img-fluid" alt="" />
                     <PriceList title={'Hair Cut'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'BEARD SHAPING'} price={'22'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'CLEAN SHAVE'} price={'19'} description={'Cutting, Washing, Drying'}/>
                     <PriceList title={'HAIR STRAIGHTEN'} price={'11'} description={'Cutting, Washing, Drying'}/>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 ">
				<div className="padding">
					<img src="assets/images/mustache.png" className="img-fluid" alt="" />
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