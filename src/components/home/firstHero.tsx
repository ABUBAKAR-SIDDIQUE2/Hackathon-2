import React, { Fragment } from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins5 = Poppins ({
    subsets: ["latin"],
    weight: "500"
})

function FirstHero() {
  return (
    <Fragment>
        <main className="flex items-center w-[1440px] h-[900px] bg-[#FBEBB5]">

            {/* Main heading */}
            <div className="flex flex-col justify-between items-start ml-[202px] w-[440px] h-[276px]">

                <h2 className={`${poppins5.className} w-full h-48 text-[64px] leading-[96px]`}>Rocket single seater</h2>

                <button className={`${poppins5.className} w-[121px] h-[49px] text-[24px] leading-[36px] border-b-2 border-black`}>Shop Now</button>
            </div>

            <Image src={"/single-sofa-main.png"} alt="sofa" width={803} height={1068}></Image>
        </main>
    </Fragment>
  )
}

export default FirstHero