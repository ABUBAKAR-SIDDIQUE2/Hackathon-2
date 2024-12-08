import Image from "next/image";
import { Fragment } from "react";

function Account(){
    return(
        <Fragment>
            <main className="w-[1440px] h-[1376px]">
                
                {/* Image with text */}
                <div>
                    <Image src={"/account-s-p.png"} alt={"pic"} width={1440} height={316}/>
                </div>
            </main>
        </Fragment>
    )
}

export default Account;