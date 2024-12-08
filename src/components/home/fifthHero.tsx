import { Poppins } from 'next/font/google';
import React, { Fragment } from 'react'
import { Card } from '../ui/card';
import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa6';
import { CiCalendar } from 'react-icons/ci';

const poppins3 = Poppins({
    subsets: ['latin'],
    weight: "300"
})
const poppins4 = Poppins({
    subsets: ['latin'],
    weight: "400"
})
const poppins5 = Poppins({
    subsets: ['latin'],
    weight: '500'
})

function FifthHero() {
  return (
    <Fragment>

        <div className='flex flex-col items-center justify-around w-[1440px] h-[944px]'>

            <div className='flex flex-col items-center justify-between w-[497px] h-[91px]'>
                <h3 className={`${poppins5.className} text-[36px] leading-[54px]`}>Our Blogs</h3>

                <p className={`${poppins5.className} text-base text-[#9F9F9F]`}>Find a bright ideal to suit your taste with our great selection</p>
            </div>

            <div className='flex flex-col items-center justify-between w-[1240px] h-[679px]'>

                <div className='flex justify-between w-full h-[555px]'>

                    <Card className='flex flex-col items-center justify-between W-[393px] h-[554px]'>

                        <Image src={"/fifth-p-3.png"} alt='Pic 1' width={393} height={393}/>
                        
                        <div className='flex flex-col items-center justify-between w-[339px] h-[129px]'>

                            <h6 className={`${poppins4.className} text-[20px] leading-[30px]`}>Going all-in with millennial design</h6>

                            <button className={`${poppins5.className} w-[130px] h-[46px] text-[24px] leading-[36px] border-b-2 border-black`}>Read More</button>

                            <div className='flex justify-between w-[223px] h-6'>

                                <div className='flex justify-between w-[73px] h-full'>

                                    <FaRegClock size={18} />
                                    
                                    <span className={`${poppins3.className} text-base`}>5 min</span>
                                </div>

                                <div className='flex justify-between w-[131px] h-full'>

                                    <CiCalendar size={22} className='stroke-[0.5px]'/>

                                    <span className={`${poppins3.className} text-base`}>12<sup>th</sup> Oct 2022</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className='flex flex-col items-center justify-between W-[393px] h-[554px]'>

                        <Image src={"/fifth-p-2.png"} alt='Pic 2' width={393} height={393}/>

                        <div className='flex flex-col items-center justify-between w-[339px] h-[129px]'>

                            <h6 className={`${poppins4.className} text-[20px] leading-[30px]`}>Going all-in with millennial design</h6>

                            <button className={`${poppins5.className} w-[130px] h-[46px] text-[24px] leading-[36px] border-b-2 border-black`}>Read More</button>

                            <div className='flex justify-between w-[223px] h-6'>

                                <div className='flex justify-between w-[73px] h-full'>

                                    <FaRegClock size={18} />
                                    
                                    <span className={`${poppins3.className} text-base`}>5 min</span>
                                </div>

                                <div className='flex justify-between w-[131px] h-full'>

                                    <CiCalendar size={22} className='stroke-[0.5px]'/>

                                    <span className={`${poppins3.className} text-base`}>12<sup>th</sup> Oct 2022</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className='flex flex-col items-center justify-between W-[393px] h-[554px]'>

                        <Image src={"/fifth-p-1.png"} alt='Pic 3' width={393} height={393}/>

                        <div className='flex flex-col items-center justify-between w-[339px] h-[129px]'>

                            <h6 className={`${poppins4.className} text-[20px] leading-[30px]`}>Going all-in with millennial design</h6>

                            <button className={`${poppins5.className} w-[130px] h-[46px] text-[24px] leading-[36px] border-b-2 border-black`}>Read More</button>

                            <div className='flex justify-between w-[223px] h-6'>

                                <div className='flex justify-between w-[73px] h-full'>

                                    <FaRegClock size={18} />
                                    
                                    <span className={`${poppins3.className} text-base`}>5 min</span>
                                </div>

                                <div className='flex justify-between w-[131px] h-full'>

                                    <CiCalendar size={22} className='stroke-[0.5px]'/>

                                    <span className={`${poppins3.className} text-base`}>12<sup>th</sup> Oct 2022</span>
                                </div>
                            </div>
                        </div>

                    </Card>
                </div>

                <button className={`${poppins5.className} w-[126px] h-[30px] text-[20px] leading-[30px] border-b-2 border-black`}>View All Post</button>
            </div>
        </div>
    </Fragment>
  )
}

export default FifthHero;