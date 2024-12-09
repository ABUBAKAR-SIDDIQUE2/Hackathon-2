import { Poppins } from 'next/font/google'
import React, { Fragment } from 'react'
import { Card, CardTitle, CardDescription } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'

const poppins4 = Poppins({
    subsets: ['latin'],
    weight: '400'
})
const poppins5 = Poppins({
    subsets: ['latin'],
    weight: '500'
})

function ThirdHero() {
  return (
    <Fragment>
        <div className='flex justify-center items-center w-[1440px] h-[1808px] mb-10'>

            <div className='flex flex-col items-center justify-between w-[1242px] h-[1791px]'>

                <div className='grid grid-cols-4 grid-rows-4 w-full h-[1660px]'>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
                        <Image src={"/shop/product-p-1.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Trenton modular sofa_3</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-2.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Granite dining table with <br /> dining chair</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
                        <Image src={"/shop/product-p-3.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Outdoor bar table and stool</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-4.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Plain console with teak mirror</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-5.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Grain coffee table</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 15,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-6.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Kent coffee table</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 225,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
                        <Image src={"/shop/product-p-7.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Round coffee table_color 2</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 251,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-8.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Reclaimed teak coffee <br /> table</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 25,200.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-9.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Plain console_</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 258,200.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
                        <Image src={"/shop/product-p-10.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Reclaimed teak Sideboard</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 20,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
                        <Image src={"/shop/product-p-11.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>SJP_0825 </CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 200,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
                        <Image src={"/shop/product-p-12.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Bella chair and table</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 100,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] '>
                        <Image src={"/shop/product-p-13.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Granite square side table</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 200,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-14.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Asgaard sofa</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 250,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-28'>
                        <Image src={"/shop/product-p-15.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Maya sofa three seater</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 115,000.00</CardDescription>
                    </Card>

                    <Card className='flex flex-col justify-between w-[287px] m-4 h-[372px] pt-14'>
                        <Image src={"/shop/product-p-16.png"} alt='pic' width={287} height={287}/>
                        <CardTitle className={`${poppins4.className} text-base`}>Outdoor sofa set</CardTitle>
                        <CardDescription className={`${poppins5.className} text-[24px] leading-[36px] text-black`}>Rs. 244,000.00</CardDescription>
                    </Card>
                </div>

                <div className='flex justify-between w-[392px] h-[60px]'>
                        <Button className='bg-[#FBEBB5] text-black size-[60px] text-[20px] hover:bg-[#FFF9E5]'>1</Button>
                        <Button className='bg-[#FFF9E5] text-black size-[60px] text-[20px] hover:bg-[#FBEBB5]'>2</Button>
                        <Button className='bg-[#FFF9E5] text-black size-[60px] text-[20px] hover:bg-[#FBEBB5]'>3</Button>
                        <Button className='bg-[#FFF9E5] text-black w-[98px] h-[60px] text-[20px] hover:bg-[#FBEBB5]'>Next</Button>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ThirdHero