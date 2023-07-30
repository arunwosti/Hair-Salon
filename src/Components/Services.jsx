import React from 'react'
import Service from './Service'

function ServicesComponents() {
	console.log('test');
  return (
    <div>
        
        {/*<!-- services --> */} 
<section className="services py-5" id="services">
	<div className="container py-lg-5 py-3">
		<div className="row service-grid-grids text-center">
			<div className="col-lg-4 col-md-6 service-grid service-grid1">
				<Service classname={'fa fa-puzzle-piece'} headingfour={'Skilled Barbers'}
                para={'Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.'}/>
			</div>
			<div className="col-lg-4 col-md-6 service-grid service-grid2 mt-md-0 mt-5">
                <Service classname={'fa fa-scissors'} headingfour={'Hair stylists'}
                    para={'Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.'}/>
				
			</div>
			
			<div className="col-lg-4 col-md-6 service-grid service-grid3 mt-lg-0 mt-5">
                <Service classname={'fa fa-sliders'} headingfour={'Beard Grooming'}
                    para={'Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.'}/>
			</div>
		</div>
		<div className="row mt-5">
			<div className="col-md-6 p-md-0">
				<div className="bg-image-left">	
					<h4>skilled barbers</h4>
				</div>
			</div>
			<div className="col-md-6 p-md-0">
				<div className="bg-image-right">
					<h4>skilled barbers</h4>
				</div>
				<div className="row">
					<div className="col-md-6 pr-md-0">
						<div className="bg-image-bottom1">
							<h4>Trimming</h4>
						</div>
					</div>
					<div className="col-md-6 pl-md-0">
						<div className="bg-image-bottom2">
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