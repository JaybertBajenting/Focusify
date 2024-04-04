"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";




const Logo = () => {
    return (
      <>
        <Image
          src="/images/focusify.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </>
    );
  };


  const Landing = () =>{
        const router = useRouter();
        
        

        return(
            <div className="w-full">
                
            </div>
        );
  }


  export default Landing;