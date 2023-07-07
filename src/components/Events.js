import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import image from "../../public/images/img_2.webp";

const Events = () => {
  return (
    <>
      <div>
        <h2 className="text-center  my-10 text-3xl">Upcoming Events</h2>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="p-16">
              <Image src={image} className="w-[400px] mb-5" />
              <div className="">
                <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur.</h2>
                <p className="text-gray-600 mt-2 text-sm">
                  <span> Dec, 20th,2023</span>
                  <span> | By Admin</span>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  explicabo omnis architecto laborum debitis, voluptas incidunt
                  molestias quia odit excepturi
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-16">
              <Image src={image} className="w-[400px] mb-5" />
              <div className="">
                <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur.</h2>
                <p className="text-gray-600 mt-2 text-sm">
                  <span> Dec, 20th,2023</span>
                  <span> | By Admin</span>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  explicabo omnis architecto laborum debitis, voluptas incidunt
                  molestias quia odit excepturi
                </p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};

export default Events;
