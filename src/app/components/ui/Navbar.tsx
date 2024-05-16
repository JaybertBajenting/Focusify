import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Image
        src="/images/focusify.png"
        width={100}
        height={100}
        alt="Picture of the author"
        className="pointer-events-none"
      />
    </>
  );
};

const navLinks = [
  { name: "Home", href: "/landing" },
  { name: "Features", href: "/feature" },
  { name: "How it Works", href: "/works" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="">
      <div className="flex items-center justify-between ">
        <div className="pt-[15px]">
          <Logo />
        </div>

        <ul className="text-[15px] space-x-20 cursor-pointer">
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <li className="inline-block">
                {" "}
                <Link
                  href={link.href}
                  key={link.name}
                  className={isActive ? "text-skyblue" : "text-black"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
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
