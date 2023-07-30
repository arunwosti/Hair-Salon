import React from 'react'

function Service({classname, headingfour, para}) {
  return (
    <div>
        <div className="service-icon">
					<span className={classname}/* "" */></span>
				</div>
				<h4 className="mt-3">{/*  */}{headingfour}</h4>
				<p className="mt-3">{para}</p>
    </div>
  )
}

export default Service