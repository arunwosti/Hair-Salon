import React from 'react'
import {Link} from "react-router-dom"

function NavComponents() {
  return (
    <div>
        <header>
	<div class="container">
		{/*<!-- nav --> */} 
		<nav class="py-md-4 py-3 d-lg-flex">
			<div id="logo">
				<h1> <a href="#"><span class="fa fa-scissors"></span> Men's Salon</a></h1>
			</div>
			<label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
			<input type="checkbox" id="drop" />
			<ul class="menu mt-lg-4 ml-auto">
				{/* <li class="active"><a href="index.html">Home</a></li> */}
                <li>
                <Link  className="active"  to='/'   >
                    Home
                </Link>
                </li>
				<li>
                <Link  className="active"  to='/aboutus'   >
                    About Us
                </Link>
                </li>
				<li>
                <Link  className="active"  to='/services'   >
                    Services
                </Link>
                </li>
				<li>
                <Link  className="active"  to='/gallery'   >
                    Gallery
                </Link>
                </li>
				<li>
                <Link  className="active"  to='/contact'   >
                    Contact
                </Link>
                </li>
				<li class=""><span><span class="fa fa-phone"></span> +12 34 3456 7890</span></li>
			</ul>
		</nav>
		{/*<!-- //nav -->*/} 
	</div>
</header>
    </div>
  )
}

export default NavComponents;