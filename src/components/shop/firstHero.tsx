import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

const poppins5 = Poppins({
    subsets: ['latin'],
    weight: '500'
})

function FirstHero() {
  return (
    <Fragment>

        <div className='flex flex-col items-center justify-center w-[1440px] h-[316px]'>

            <Image src={"/shop/first-p.png"} alt='Pic' width={1440} height={316}/>

            <div className='flex flex-col items-center justify-center w-[124px] h-[132px] absolute'>

                <Image src={"/shop/meubei-logo.png"} alt='logo' width={77} height={77}/>

                <h2 className={`${poppins5.className} text-[48px] leading-[72px]`}>Shop</h2>

                <h6 className='flex justify-center items-center w-[121px] h-6'>Home <MdKeyboardArrowRight className='size-5'/>Shop</h6>
            </div>
        <div>

            </div>
        </div>
    </Fragment>
  )
}

export default FirstHero;