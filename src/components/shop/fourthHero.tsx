import { Poppins } from 'next/font/google';
import React, { Fragment } from 'react'

const poppins4 = Poppins({
    subsets: ['latin'],
    weight: '400'
})
const poppins5 = Poppins({
    subsets: ['latin'],
    weight: '500'
})

function FourthHero() {
  return (
    <Fragment>
        <div className='flex items-center justify-evenly w-[1440px] h-[300px] bg-[#FAF4F4]'>

            <div className='w-[376px] h-[108px]'>
                <h4 className={`${poppins5.className} text-[32px] leading-[48px]`}>Free Delivery</h4>
                <p className={`${poppins4.className} text-[20px] leading-[30px] text-[#9F9F9F]`}>For all orders over $50, consectetur adipim scing elit.</p>
            </div>

            <div className='w-[376px] h-[108px]'>
                <h4 className={`${poppins5.className} text-[32px] leading-[48px]`}>90 Days Return</h4>
                <p className={`${poppins4.className} text-[20px] leading-[30px] text-[#9F9F9F]`}>If goods have problems, consectetur adipim scing elit.</p>
            </div>

            <div className='w-[376px] h-[108px]'>
                <h4 className={`${poppins5.className} text-[32px] leading-[48px]`}>Secure Payment</h4>
                <p className={`${poppins4.className} text-[20px] leading-[30px] text-[#9F9F9F]`}>100% secure payment, consectetur adipim scing elit.</p>
            </div>

        </div>
    </Fragment>
  )
}

export default FourthHero;