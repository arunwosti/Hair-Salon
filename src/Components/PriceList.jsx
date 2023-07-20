import React from 'react'

function PriceList({title, price, description}) {
  return (
    <div>
        {/* <!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>{/* Hair Cut */} {title}</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>{/* 19 */}${price}</h6>
							</div>
						</div>
						<div class="menu-item-description">
							<p>{/* Cutting, Washing, Drying */}{description}</p>
						</div>
					</div>
					{/* <!-- Item ends -->*/}
				
    </div>
  )
}

export default PriceList;