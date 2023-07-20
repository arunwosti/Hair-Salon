import React from 'react'
import BannerComponents from '../Components/Banner'
import PagedetailComponent from '../Components/Pagedetail'
import PriceList from '../Components/PriceList'
import ServicesComponents from '../Components/Services'

function Services() {
  return (
    <div>
       
<BannerComponents/>

<PagedetailComponent path={'/services'} page={' Services'}/>

{/* <!-- services --> */}
<ServicesComponents/>
{/* <!-- //services --> */}


    </div>
  )
}

export default Services