import Image from "next/image";
import { useRouter } from "next/navigation";

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

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex items-center justify-between ">
        <div className="pt-[15px]">
          <Logo />
        </div>

        <ul className="text-[15px] space-x-20 cursor-pointer">
          <li className="inline-block text-skyblue">Home</li>
          <li className="inline-block">Features</li>
          <li className="inline-block">How it Works</li>
          <li className="inline-block">About Us</li>
        </ul>
        <div className="space-x-8">
          <button
            className="text-white rounded-md bg-skyblue px-[37px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
            onClick={() => router.push("/register")}
          >
            Sign up
          </button>
          <button
            className="text-white rounded-md bg-skyblue px-[37px] py-[11px] hover:shadow-2xl transition delay-75 duration-500 ease-in-out"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>

   
        
        
        

      </div>
  );
};

export default Navbar;
