import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<h1 className="">
    <Homepage/>
  </h1>
  )
}
