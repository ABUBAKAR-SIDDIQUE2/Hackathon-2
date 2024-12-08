
import { Poppins } from 'next/font/google';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Image from 'next/image';
import React, { Fragment } from 'react'

const poppins4 = Poppins({
    subsets: ['latin'],
    weight: "400"
})
const poppins5 = Poppins ({
    subsets: ['latin'],
    weight: "500"
})

function productCardThird() {
  return (
    <Fragment>
        <div className='flex'>
        <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
            <Image src={"/third-p-1.png"} alt='pic' width={287} height={287}/>
            <CardTitle className={`${poppins4.className} text-base`}>Trenton modular sofa_3</CardTitle>
            <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
        </Card>
            
        <Card className='flex flex-col pt-6 between w-[287px] m-4 h-[372px] '>
            <Image src={"/third-p-2.png"} alt='pic' width={287} height={287}/>
            <CardTitle className={`${poppins4.className} text-base mt-14`}>Granite dining table <br /> with dining chair</CardTitle>
            <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
        </Card>
      
        <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
            <Image src={"/third-p-3.png"} alt='pic' width={287} height={287}/>
            <CardTitle className={`${poppins4.className} text-base`}>Outdoor bar table and <br /> stool</CardTitle>
            <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
        </Card>
                       
        <Card className='flex flex-col pt-16 justify-between w-[287px] m-4 h-[372px] '>
            <Image src={"/third-p-4.png"} alt='pic' width={287} height={287}/>
            <CardTitle className={`${poppins4.className} text-base`}>Plain console with teak <br /> mirror</CardTitle>
            <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
        </Card>
        </div>   


    </Fragment>
  )
}

export default productCardThird