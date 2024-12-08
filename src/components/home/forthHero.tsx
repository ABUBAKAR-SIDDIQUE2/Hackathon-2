import React, { Fragment } from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins4 = Poppins({
    subsets: ['latin'],
    weight: '400',
})
const poppins5 = Poppins({
    subsets: ["latin"],
    weight: '500'
})
const poppins7 = Poppins({
    subsets: ["latin"],
    weight: '700'
})

function ForthHero() {
  return (
    <Fragment>

        <div className='flex justify-center items-center w-[1440px] h-[800px]'>

            <div className='flex justify-around items-center w-full h-[639px] bg-[#FFF9E5]'>

                <Image src={"/forth-p.png"} alt='pic' width={800} height={983}/>

                <div className='flex flex-col justify-between items-center w-[313px] h-[205px]'>

                    <h4 className={`${poppins5.className} text-[24px] leading-[36px]`}>New Arrivals</h4>

                    <h3 className={`${poppins7.className} text-[48px] leading-[72px] w-[331px]`}>Asgaard sofa</h3>

                    <button className={`${poppins4.className} text-[20px] leading-[30px] w-[255px] h-[64px] border border-black`}>Order Now</button>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ForthHero