import React from 'react'
import ShipxHero from '../compononts/ShipxHero'
import ShipxNav from '../compononts/ShipxNav'
import ShipxNews from '../compononts/ShipxNews'
import ShipxSection3 from '../compononts/ShipxSection3'
import ShipxFaq from '../compononts/ShipxFaq'
import ShipxFooter from '../compononts/ShipxFooter'

const Shipx = () => {
  return (
    <div className='relative'>
        <ShipxNav />
        <ShipxHero />
        <ShipxNews />
        <ShipxSection3 />
        <ShipxFaq />
        <ShipxFooter />
    </div>
  )
}

export default Shipx