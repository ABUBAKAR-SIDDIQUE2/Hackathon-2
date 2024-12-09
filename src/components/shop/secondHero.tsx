import { Poppins } from 'next/font/google'
import React, { Fragment } from 'react'
import { BsViewList } from 'react-icons/bs'
import { FaSliders } from 'react-icons/fa6'
import { HiViewGrid } from 'react-icons/hi'

const poppins4 = Poppins({
    subsets: ['latin'],
    weight: '400'
})

function SecondHero() {
  return (
    <Fragment>
        <div className='flex items-center justify-between w-[1440px] h-[100px] px-[85px] bg-[#FAF4F4]'>

            <div className='flex justify-between items-center w-[436px] h-[40px]'>
                <div className='flex justify-between items-center w-[85px] h-[30px]'>
                    <FaSliders className='stroke-[0.5px] w-[19.05px] h-[16.67px]'/>

                    <h6 className={`${poppins4.className} text-[20px] leading-[30px]`}>Filter</h6>
                </div>

                <HiViewGrid className='size-[16.33px]'/>
                <BsViewList className='w-[21px] h-[19.5px]'/>

                <div className={`flex items-center justify-end w-[237px] h-[37px] border-l-2 border-[#9F9F9F]`}><p className={`${poppins4.className} text-base `}>Showing 1-16 of 32 results</p></div>
            </div>

            <div className='flex justify-between items-center w-[443px] h-[55px]'>

                <div className='flex items-center justify-between w-[126px] h-[55px]'>

                    <h6 className={`${poppins4.className} text-[20px] leading-[30px]`}>Show</h6>

                    <input type="number" placeholder='16' className={`${poppins4.className} flex pl-4 text-[20px] leading-[30px] size-[55px]`}/>
                </div>

                <div className='flex items-center justify-between w-[288px] h-[55px]'>

                    <h6 className={`${poppins4.className} text-[20px] leading-[30px]`}>Sort by</h6>

                    <input type="number" placeholder='Default' className={`${poppins4.className} flex pl-4 text-[20px] leading-[30px] w-[188px] h-[55px]`}/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SecondHero