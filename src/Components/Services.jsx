import React from 'react'
import Service from './Service'

function ServicesComponents() {
	console.log('test');
  return (
    <div>
        
        {/*<!-- services --> */} 
<section class="services py-5" id="services">
	<div class="container py-lg-5 py-3">
		<div class="row service-grid-grids text-center">
			<div class="col-lg-4 col-md-6 service-grid service-grid1">
				<Service classname={'fa fa-puzzle-piece'} headingfour={'Skilled Barbers'}
                para={'Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.'}/>
			</div>
			<div class="col-lg-4 col-md-6 service-grid service-grid2 mt-md-0 mt-5">
                <Service classname={'fa fa-scissors'} headingfour={'Hair stylists'}
                    para={'Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.'}/>
				
			</div>
			
			<div class="col-lg-4 col-md-6 service-grid service-grid3 mt-lg-0 mt-5">
                <Service classname={'fa fa-sliders'} headingfour={'Beard Grooming'}
                    para={'Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.'}/>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-md-6 p-md-0">
				<div class="bg-image-left">	
					<h4>skilled barbers</h4>
				</div>
			</div>
			<div class="col-md-6 p-md-0">
				<div class="bg-image-right">
					<h4>skilled barbers</h4>
				</div>
				<div class="row">
					<div class="col-md-6 pr-md-0">
						<div class="bg-image-bottom1">
							<h4>Trimming</h4>
						</div>
					</div>
					<div class="col-md-6 pl-md-0">
						<div class="bg-image-bottom2">
							<h4>Shaving</h4>
						</div>
					</div>
				</div>	
			</div>	
		</div>		
	</div>		
</section>
{/*<!-- //services --> */} 

    </div>
  )
}

export default ServicesComponents