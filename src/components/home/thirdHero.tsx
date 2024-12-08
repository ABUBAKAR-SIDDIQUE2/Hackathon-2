import { Poppins } from 'next/font/google'
import React, { Fragment } from 'react'
import ProductCardThird from './productCardThird';

const poppins5 = Poppins({
    subsets: ["latin"],
    weight: "500",
})

function ThirdHero() {
  return (
    <Fragment>

        <div className='flex flex-col items-center justify-between w-[1440px] h-[777px] px-[100px] pt-[55px] pb-[51px]'>

            <div className='flex flex-col items-center'>
                <h2 className={`${poppins5.className} text-[36px] leading-[54px]`}>Top Picks For You</h2>

                <p className={`${poppins5.className} text-base text-[#9F9F9F]`}>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <ProductCardThird></ProductCardThird>

            <button className={`${poppins5.className} text-[20px] leading-[30px] border-b-2 border-black`}>View More</button>
        </div>
    </Fragment>
  )
}

export default ThirdHero;