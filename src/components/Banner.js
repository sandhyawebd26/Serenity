import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import Image from "next/image";
import banner4 from "../../public/images/banner4.avif";

const Banner = () => {
    return (
        <div>  <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="relative h-500">
                    <Image src={banner4} alt="Banner Image" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <p className="text-lg">Yoga for everybody</p>
                        <h1 className="text-6xl mt-4 font-bold">Welcome to Serenity</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-500">
                    <Image src={banner4} alt="Banner Image" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <p className="text-lg">Enjoy with us</p>
                        <h1 className="text-6xl mt-4 font-bold">Yoga & Meditation</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-500">
                    <Image src={banner4} alt="Banner Image" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <p className="text-lg">Experience the bliss of yoga</p>
                        <h1 className="text-6xl mt-4 font-bold">
                            Awaken your inner calmness
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-500">
                    <Image src={banner4} alt="Banner Image" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <p className="text-lg">Harness the power of yoga for balance</p>
                        <h1 className="text-6xl mt-4 font-bold">
                            Align your body and mind with yoga
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper></div>
    )
}

export default Banner