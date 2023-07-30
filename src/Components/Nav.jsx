import React from 'react'
import {Link} from "react-router-dom"

function NavComponents() {
  return (
    <div>
        <header>
	<div className="container">
		{/*<!-- nav --> */} 
		<nav className="py-md-4 py-3 d-lg-flex">
			<div id="logo">
				<h1> <a href="#"><span className="fa fa-scissors"></span> Men's Salon</a></h1>
			</div>
			<label for="drop" className="toggle"><span className="fa fa-bars"></span></label>
			<input type="checkbox" id="drop" />
			<ul className="menu mt-lg-4 ml-auto">
				
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
				<li className=""><span><span className="fa fa-phone"></span> +12 34 3456 7890</span></li>
			</ul>
		</nav>
		{/*<!-- //nav -->*/} 
	</div>
</header>
    </div>
  )
}

export default NavComponents;