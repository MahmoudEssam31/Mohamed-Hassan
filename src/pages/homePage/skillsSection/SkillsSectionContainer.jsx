import React from "react";
import { skillsCards } from "../../../data/Data";
// import SkillsCards from "./skillsCards/SkillsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";
import SkillsCards from "../skillsCards/SkillsCards";

export default function SkillsSectionContainer() {
    return (
        <div className="skills-section mt-[7rem] relative flex justify-center  items-center ">
            {/* <span className="swiper-button-prev  absolute left-10 top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-10 text-blue-600">
                <IoIosArrowBack />
            </span> */}
            <Swiper
                className="px-12 pb-10"
                modules={[Navigation, Pagination]}
                loop={true}
                pagination={{
                    clickable: true,
                    // type: "progressbar",
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 3, spaceBetween: 15 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                    1440: { slidesPerView: 6, spaceBetween: 25 },
                }}>
                {skillsCards.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SkillsCards title={item.name} percentage={item.percentage} icon={item.icon} iconType={item.iconType} img={item.img} />
                    </SwiperSlide>
                ))}
                <div class="swiper-pagination"></div>
            </Swiper>
            {/* <span className="swiper-button-next absolute right-10 top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-10 text-blue-600">
                <IoIosArrowForward />
            </span> */}
            <div class="swiper-button-prev "></div>
            <div class="swiper-button-next"></div>
        </div>
    );
}
