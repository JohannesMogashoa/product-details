import { okIcon } from '../../assets'
import React from 'react'

const Badges = () => {
  return (
    <div>
        <span>Read to Ship</span>
        <span>
            <img src={okIcon} alt="" />
            In Stock
        </span>
        <span>
            <img src={okIcon} alt="" />
            Fast Dispatch
        </span>
    </div>
  )
}

export default Badges