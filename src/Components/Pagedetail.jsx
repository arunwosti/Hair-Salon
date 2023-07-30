import React from 'react'
import {Link} from "react-router-dom"

function PagedetailComponent({path, page}) {
  return (
    <div>
      {/* <!-- page details --> */}
<div className="breadcrumb-agile">
	<div className="container">
		<ol className="breadcrumb">
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