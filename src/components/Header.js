import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <>
      <div className="">
        <div className="flex gap-5 justify-center items-center h-16">
          <div className="w-1/2" onClick={()=>router.push("/")}>
            {/* <h3 className=" font-semibold text-2xl hover:text-violet-500 cursor-pointer">Serenity</h3> */}
            <Image src={logo} alt="" className="w-36" />
          </div>
          <div className="">
            <ul className="flex gap-8">
              <li className=" hover:text-violet-500 cursor-pointer" onClick={()=>router.push("/")}>Home</li>
              <li className=" hover:text-violet-500 cursor-pointer">
                Yoga classes
              </li>
              <li className=" hover:text-violet-500 cursor-pointer">Events</li>
              <li
                className=" hover:text-violet-500 cursor-pointer"
                onClick={()=>router.push("/about-us")}
              >
                About Studio
              </li>
              <li className=" hover:text-violet-500 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
