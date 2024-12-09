import Footer from '@/components/home/footer'
import HeaderW from '@/components/home/headerW'
import ThirdHero from '@/components/shop/thirdHero'
import FirstHero from '@/components/shop/firstHero'
import SecondHero from '@/components/shop/secondHero'
import React, { Fragment } from 'react'
import FourthHero from '@/components/shop/fourthHero'

function Shop() {
  return (
    <Fragment>

      <HeaderW></HeaderW>
      
      <FirstHero/>
      <SecondHero/>
      <ThirdHero/>
      <FourthHero/>
      <Footer></Footer>
    </Fragment>
  )
}

export default Shop