import React from 'react'
import {Link} from 'react-router-dom'

function FooterTop() {
  return (
    <div>
        {/*<!-- footer top--> */} 
<div className="footer-top py-md-4">
	<div className="container py-4">
		<div className="row">
			<div className="col-lg-9">
				<h4 className="footer-top-text text-capitalize">A wide range of male grooming services</h4>
			</div>
			<div className="col-lg-3 text-lg-right mt-lg-0 mt-4">
				<Link to="/services" className="text-capitalize serv_link btn"> Go to our Services</Link>
			</div>
		</div>
	</div>
</div>
{/*<!-- //footer top--> */} 
    </div>
  )
}

export default FooterTop;