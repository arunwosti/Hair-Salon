import React from 'react'

function Service({classname, headingfour, para}) {
  return (
    <div>
        <div class="service-icon">
					<span className={classname}/* "" */></span>
				</div>
				<h4 class="mt-3">{/*  */}{headingfour}</h4>
				<p class="mt-3">{para}</p>
    </div>
  )
}

export default Service