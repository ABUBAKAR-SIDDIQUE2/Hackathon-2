import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { Button } from '../ui/button';

const poppins4 = Poppins({
    subsets: ['latin'],
    weight: "400"
})
const poppins7 = Poppins({
    subsets: ['latin'],
    weight: '700'
})

function SixthHero() {
  return (
    <Fragment>

        <div className='flex items-center justify-center w-[1440px] h-[450px]'>

            <Image src={"/sixth-p.png"} alt='PIC' width={1440} height={450} />

            <div className='flex flex-col items-center justify-between w-[454px] h-[202px] absolute'>

                <h2 className={`${poppins7.className} text-[60px] leading-[90px]`}>Our Instagram</h2>

                <p className={`${poppins4.className} text-[20px] leading-[30px] `}>Follow our store on Instagram</p>

                <Button variant={"outline"} className={`${poppins4.className} w-[255px] h-[64px] text-[20px] leading-[30px] rounded-full`}>Follow Us</Button>
            </div>
        </div>
    </Fragment>
  )
}

export default SixthHero;