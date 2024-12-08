import { Fragment } from "react";
import Footer from "@/components/home/footer";
import HeaderY from "@/components/home/headerY";
import ProductTwo from "@/components/home/productTwo";
import FirstHero from "@/components/home/firstHero";
import ThirdHero from "@/components/home/thirdHero";
import ForthHero from "@/components/home/forthHero";
import FifthHero from "@/components/home/fifthHero";
import SixthHero from "@/components/home/sixthHero";


function Home(){
  return(
    <Fragment>
      
      <HeaderY/>

      <FirstHero/>
      <ProductTwo/>
      <ThirdHero/> 
      <ForthHero/>
      <FifthHero/>
      <SixthHero/>

      <Footer/>
    </Fragment>
  )
}

export default Home;