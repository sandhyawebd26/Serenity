import Banner from "@/components/Banner";
import Events from "@/components/Events";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/yogaimg2.webp";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiLevelEndFlag } from "react-icons/gi";
import f1 from "../../../public/images/feature7.png";
import f2 from "../../../public/images/feature6.png";
import g1 from "../../../public/images/banner1.avif";
import g2 from "../../../public/images/banner2.avif";
import g3 from "../../../public/images/banner3.avif";
import g4 from "../../../public/images/banner4.avif";
import g5 from "../../../public/images/1.webp";
import g6 from "../../../public/images/2.webp";
import g7 from "../../../public/images/3.webp";
import g8 from "../../../public/images/8.webp";
import g9 from "../../../public/images/7.webp";
import g10 from "../../../public/images/9.jpeg";
import g11 from "../../../public/images/4.jpeg";
import g12 from "../../../public/images/img_2.webp";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Banner />
        {/* ---- welcome message ---------- */}
        <div className="flex mb-10 ">
          <div className="w-1/2">
            <Image src={img1} alt="" className="h-[600px] w-[600px]" />
          </div>
          <div className="w-1/2 flex flex-col justify-center  ">
            <h2 className="text-3xl mb-5">Welcome to Serenity</h2>
            <p className="mb-3 text-violet-500">HELLO THERE!</p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores suscipit quaerat quis eligendi accusamus autem vitae
              similique illum temporibus nesciunt quod culpa quisquam, facilis
              excepturi. Doloribus quos deserunt praesentium aliquid.
            </p>
            <button className="bg-violet-500 text-white font-semibold p-3 rounded-2xl w-1/3 mt-6">
              See the yoga pricing
            </button>
          </div>
        </div>

        {/* ------- our programs */}
        <div className="">
          <h2 className="my-20 text-center font-normal text-5xl">
            Our Programs
          </h2>
          <div className="cardContainer mx-20 flex gap-10 flex-wrap">
            <div className="bg-white shadow-md">
              <Image src={img1} className="w-[400px] h-[400px]" />
              <div className="p-5">
                <h3 className="mb-3 text-lg">Embrace Your Edge </h3>
                <p>
                  <span className="text-violet-500">Healthy Yoga</span> with
                  <span className="text-violet-500"> Vicky Johnson</span>
                </p>
                <div className="flex mt-5">
                  <div className="flex gap-2 justify-center items-center">
                    <span>
                      <AiOutlineClockCircle className="text-violet-500" />
                    </span>
                    <p>20 min</p>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <span>
                      <GiLevelEndFlag className="text-violet-500" />
                    </span>
                    <p>beginner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md">
              <Image src={img1} className="w-[400px] h-[400px]" />
              <div className="p-5">
                <h3 className="mb-3 text-lg">Embrace Your Edge </h3>
                <p>
                  <span className="text-violet-500">Healthy Yoga</span> with
                  <span className="text-violet-500"> Vicky Johnson</span>
                </p>
                <div className="flex mt-5">
                  <div className="flex gap-2 justify-center items-center">
                    <span>
                      <AiOutlineClockCircle className="text-violet-500" />
                    </span>
                    <p>20 min</p>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <span>
                      <GiLevelEndFlag className="text-violet-500" />
                    </span>
                    <p>beginner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md">
              <Image src={img1} className="w-[400px] h-[400px]" />
              <div className="p-5">
                <h3 className="mb-3 text-lg">Embrace Your Edge </h3>
                <p>
                  <span className="text-violet-500">Healthy Yoga</span> with
                  <span className="text-violet-500"> Vicky Johnson</span>
                </p>
                <div className="flex mt-5">
                  <div className="flex gap-2 justify-center items-center">
                    <span>
                      <AiOutlineClockCircle className="text-violet-500" />
                    </span>
                    <p>20 min</p>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <span>
                      <GiLevelEndFlag className="text-violet-500" />
                    </span>
                    <p>beginner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md">
              <Image src={img1} className="w-[400px] h-[400px]" />
              <div className="p-5">
                <h3 className="mb-3 text-lg">Embrace Your Edge </h3>
                <p>
                  <span className="text-violet-500">Healthy Yoga</span> with
                  <span className="text-violet-500"> Vicky Johnson</span>
                </p>
                <div className="flex mt-5">
                  <div className="flex gap-2 justify-center items-center">
                    <span>
                      <AiOutlineClockCircle className="text-violet-500" />
                    </span>
                    <p>20 min</p>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <span>
                      <GiLevelEndFlag className="text-violet-500" />
                    </span>
                    <p>beginner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md">
              <Image src={img1} className="w-[400px] h-[400px]" />
              <div className="p-5">
                <h3 className="mb-3 text-lg">Embrace Your Edge </h3>
                <p>
                  <span className="text-violet-500">Healthy Yoga</span> with
                  <span className="text-violet-500"> Vicky Johnson</span>
                </p>
                <div className="flex mt-5">
                  <div className="flex gap-2 justify-center items-center">
                    <span>
                      <AiOutlineClockCircle className="text-violet-500" />
                    </span>
                    <p>20 min</p>
                  </div>
                  <div className="ml-auto flex gap-2 items-center">
                    <span>
                      <GiLevelEndFlag className="text-violet-500" />
                    </span>
                    <p>beginner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----Pricing */}
        <div className="">
          <h2 className="my-20 text-center font-normal text-5xl">
            Yoga Pricing
          </h2>
          <div className="">
            <div className="mx-24 container grid grid-cols-4 gap-16 text-center justify-center items-center">
              <div className="bg-violet-400 p-10 text-white">
                <div className="mb-5">
                  <h3 className="mb-5 text-2xl">New Client Trial Week</h3>
                  <p className="text-4xl">Rs.500</p>
                </div>
                <ul className="mt-5 ">
                  <li>1 week unlimited classes</li>
                  <li>Flexible schedule</li>
                  <li>4-week series</li>
                  <li>10% off Vinyasa treatment</li>
                </ul>
                <button className=" border-2 rounded-3xl px-5 py-2 mt-10 text-white hover:bg-black">
                  Join Now
                </button>
              </div>
              <div className="bg-white p-10 shadow ">
                <div className="mb-5">
                  <h3 className="mb-5 text-2xl">New Client Trial Week</h3>
                  <p className="text-4xl">Rs.500</p>
                </div>
                <ul className="mt-5 text-gray-500">
                  <li>1 week unlimited classes</li>
                  <li>Flexible schedule</li>
                  <li>4-week series</li>
                  <li>10% off Vinyasa treatment</li>
                </ul>
                <button className=" rounded-3xl px-5 py-2 mt-10 bg-violet-400 text-white">
                  Join Now
                </button>
              </div>
              <div className="bg-white p-10 shadow">
                <div className="mb-5">
                  <h3 className="mb-5 text-2xl">New Client Trial Week</h3>
                  <p className="text-4xl">Rs.500</p>
                </div>
                <ul className="mt-5 text-gray-500">
                  <li>1 week unlimited classes</li>
                  <li>Flexible schedule</li>
                  <li>4-week series</li>
                  <li>10% off Vinyasa treatment</li>
                </ul>
                <button className=" rounded-3xl px-5 py-2 mt-10 bg-violet-400 text-white">
                  Join Now
                </button>
              </div>
              <div className="bg-white p-10 shadow">
                <div className="mb-5">
                  <h3 className="mb-5 text-2xl">New Client Trial Week</h3>
                  <p className="text-4xl">Rs.500</p>
                </div>
                <ul className="mt-5 text-gray-500">
                  <li>1 week unlimited classes</li>
                  <li>Flexible schedule</li>
                  <li>4-week series</li>
                  <li>10% off Vinyasa treatment</li>
                </ul>
                <button className=" rounded-3xl px-5 py-2 mt-10 bg-violet-400 text-white">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* -----Yoga features */}

        <div className="mx-20">
          <div className="my-20">
            <h2 className="text-3xl text-center ">Yoga Features</h2>
          </div>
          <div className="cardCont grid grid-cols-4 justify-center ">
            <div className="card1 p-10">
              <div className="text-center">
                <div className="flex justify-center items-center mb-5">
                  <Image src={f1} className=" bg-pink-400" alt="" />
                </div>{" "}
                <div>
                  <h2 className="text-xl mb-5">Peace of Mind</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde temporibus
                  </p>
                </div>
              </div>
            </div>
            <div className="card1 p-10">
              <div>
                <div className="flex justify-center items-center mb-5">
                  <Image src={f1} className=" bg-blue-400" alt="" />
                </div>{" "}
                <div className="text-center">
                  <h2 className="text-xl mb-5">Peace of Mind</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde temporibus
                  </p>
                </div>
              </div>
            </div>
            <div className="card1 p-10">
              <div>
                <div className="flex justify-center items-center mb-5">
                  <Image src={f1} className=" bg-red-400" alt="" />
                </div>{" "}
                <div className="text-center">
                  <h2 className="text-xl mb-5">Peace of Mind</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde temporibus
                  </p>
                </div>
              </div>
            </div>
            <div className="card1 p-10">
              <div>
                <div className="flex justify-center items-center mb-5">
                  <Image src={f1} className=" bg-green-400" alt="" />
                </div>
                <div className="text-center">
                  <h2 className="text-xl mb-5">Peace of Mind</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde temporibus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------gallery */}

        <div className="mt-10">
          <div className="my-10">
            <h1 className="text-center text-3xl mt-10 mb-10">Our Gallery</h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <Image
                src={g9}
                className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 h-auto"
              />
              <Image
                src={g1}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
              />
              <Image
                src={g2}
                className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/4 h-auto"
              />
              <Image
                src={g3}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
              />
              <Image
                src={g4}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
              />
              <Image
                src={g5}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
              />
              <Image
                src={g6}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
              />
              <Image
                src={g10}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
              />
              <Image
                src={g11}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-auto"
              />
            </div>
          </div>
        </div>

        {/* --------upcoming events */}
        <Events />

        {/* -----------Footer */}
      <Footer/>
      </div>
    </>
  );
};

export default Homepage;
