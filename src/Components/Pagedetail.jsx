import React from 'react'
import {Link} from "react-router-dom"

function PagedetailComponent({path, page}) {
  return (
    <div>
      {/* <!-- page details --> */}
<div class="breadcrumb-agile">
	<div class="container">
		<ol class="breadcrumb">
			<li className="breadcrumb-item">
         <Link  className="mybreadcrumb-item"  to='/'> Home </Link>
			</li>
			<li >
         <Link  className="breadcrumb-item"  to={path}>  /  {page} </Link>
			</li>
		</ol>
	</div>
</div>
{/* <!-- //page details --> */}
    </div>
  )
}

export default PagedetailComponent