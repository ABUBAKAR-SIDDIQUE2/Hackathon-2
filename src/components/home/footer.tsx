import { Poppins } from "next/font/google";
import Link from "next/link";
import { Fragment } from "react";

const poppins4 = Poppins({
    subsets: ["latin"],
    weight: "400"
})
const poppins5 = Poppins({
    subsets: ["latin"],
    weight: "500"
})

function Footer(){
    return(
        <Fragment>

            {/* Here is the footer */}
            <div className="flex justify-center items-center w-[1440px] h-[555px] bg-[#FFFFFF]">

                {/* Inner div to make it center */}
                <div className="flex flex-col justify-between w-[1240px] h-[419px] ">

                    {/* Actual Footer */}
                    <div className="flex items-center justify-between w-[1131px] h-[312px] ">

                        {/* some paragraph with address */}
                        <p className={`${poppins4.className} text-base w-[285px] h-[72px] text-[#9F9F9F] `}>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>

                        {/* final footer seriously */}
                        <div className="flex justify-between w-[710px] h-[312px] ">

                            {/* Here the links | help | newsletter in footer */}
                            <div className="flex justify-between w-[352px] h-[312px] ">
                                
                                {/* Links */}
                                <div className=" flex flex-col justify-between w-[68px] h-full ">

                                    <h5 className={`${poppins5.className} text-base text-[#9F9F9F]`}>Links</h5>

                                    <ul className="flex flex-col justify-between w-full h-[233px]">
                                        <Link href={"/"}><li className={`${poppins5.className} text-[16px] leading-[24px]`}>Home</li></Link>
                                        <Link href={"/shop"}><li className={`${poppins5.className} text-[16px] leading-[24px]`}>Shop</li></Link>
                                        <Link href={"/about"}><li className={`${poppins5.className} text-[16px] leading-[24px]`}>About</li></Link>
                                        <Link href={"/contact"}><li className={`${poppins5.className} text-[16px] leading-[24px]`}>Contact</li></Link>
                                    </ul>
                                </div>

                                {/* Help */}
                                <div className="flex flex-col justify-between w-[140px] h-[242px] ">

                                    <h5 className={`${poppins5.className} text-base text-[#9F9F9F]`}>Help</h5>

                                    <ul className="flex flex-col justify-between w-full h-[163px]">
                                        <li className={`${poppins5.className} text-base`}>Payment Options</li>
                                        <li className={`${poppins5.className} text-base`}>Returns</li>
                                        <li className={`${poppins5.className} text-base`}>Privacy Policy</li>
                                    </ul>
                                </div>

                            </div>

                            {/* Newsletter */}
                            <div className="flex flex-col justify-between w-[286px] h-[101px] ">

                                <h5 className={`${poppins5.className} text-base text-[#9F9F9F]`}>Newsletter</h5>

                                <div className="flex justify-between w-full h-6">

                                    <input type="email" placeholder="Enter Your Email Address" className={`${poppins4.className} w-[200px] border-b border-black text-sm`}/>

                                    <button className={`${poppins5.className} text-sm border-b border-black`}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copy rights */}
                    <div className="flex items-end w-[1131px] h-[59px] border-t">
                        <p className={`${poppins4.className} text-base`}>2022 Meubel House. All rights reverved</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;