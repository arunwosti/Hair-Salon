import React from 'react'
import BannerComponents from '../Components/Banner'
import PagedetailComponent from '../Components/Pagedetail'

function Gallery() {
  return (
    <div>
       <BannerComponents/>

       <PagedetailComponent path={'/gallery'} page={'  Gallery'}/>
{/* <!-- gallery --> */}
<div className='message-box'>
            <span className='msg-text'><span className='congrats-txt'>Sorry!</span> Gallery page is under development.</span>
        </div>
{/* <!-- //gallery --> */}


    </div>
  )
}

export default Gallery