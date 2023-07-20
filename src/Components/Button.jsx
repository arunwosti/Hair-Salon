import React from 'react'
import {Link} from 'react-router-dom'

function CustomButton({path, buttonName}) {
  return (
    <div>
        <Link to={path} className="button-style mt-4 mr-2">{buttonName}</Link>
    </div>
  )
}

export default CustomButton;