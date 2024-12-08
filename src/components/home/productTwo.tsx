import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React, { Fragment } from 'react'

const poppins5 = Poppins({
  subsets: ['latin'],
  weight: "500"
})

function ProductTwo() {
  return (
    <Fragment>
        
        <main className="flex justify-between w-[1440px] h-[672px] bg-[#FAF4F4] px-[100px] pt-[51px] pb-[59px]">

            {/* first product */}
            <div className='w-[605px] h-[562px] '>

                <Image src={"/side-granite-table.png"} alt='table' width={600} height={600} className='ml-[6px]'/>

                <h5 className={`${poppins5.className} absolute top-[1430px] left-[205px] text-[36px] leading-[54px]`}>Side table</h5>

                <button className={`${poppins5.className} absolute top-[1507px] left-[206px] text-[24px] leading-[36px] border-b-2 border-black`}>View More</button>
            </div>

            {/* second product */}
            <div className='w-[605px] h-[562px] '>

                <Image src={"/three-seater-sofa.png"} alt='table' width={600} height={600} className='ml-[6px]'/>

                <h5 className={`${poppins5.className} absolute top-[1430px] left-[841px] text-[36px] leading-[54px]`}>Side table</h5>

                <button className={`${poppins5.className} absolute top-[1507px] left-[841px] text-[24px] leading-[36px] border-b-2 border-black`}>View More</button>
            </div>
        </main>
    </Fragment>
  )
}

export default ProductTwo;