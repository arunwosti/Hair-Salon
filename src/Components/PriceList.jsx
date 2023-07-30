import React from 'react'

function PriceList({title, price, description}) {
  return (
    <div>
        {/* <!-- Item starts --> */}
					<div className="menu-item">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>{/* Hair Cut */} {title}</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>{/* 19 */}${price}</h6>
							</div>
						</div>
						<div className="menu-item-description">
							<p>{/* Cutting, Washing, Drying */}{description}</p>
						</div>
					</div>
					{/* <!-- Item ends -->*/}
				
    </div>
  )
}

export default PriceList;