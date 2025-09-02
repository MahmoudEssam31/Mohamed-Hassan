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
        <div className="skills-section mt-[7rem] relative md:px-[8rem] px-[4rem] ">
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
                    0: { slidesPerView: 1, spaceBetween: 10 }, 
                    450: { slidesPerView: 1, spaceBetween: 12 }, 
                    768: { slidesPerView: 3, spaceBetween: 15 }, 
                    991: { slidesPerView: 4, spaceBetween: 15 }, 
                    1200: { slidesPerView: 5, spaceBetween: 20 }, 
                    1440: { slidesPerView: 5, spaceBetween: 20 }, 
                    1700: { slidesPerView: 7, spaceBetween: 20 }, 
                }}>
                {skillsCards.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SkillsCards title={item.name} percentage={item.percentage} icon={item.icon} iconType={item.iconType} img={item.img} />
                    </SwiperSlide>
                ))}
                <div class="swiper-pagination"></div>
            </Swiper>

            <div class="swiper-button-prev "></div>
            <div class="swiper-button-next"></div>
        </div>
    );
}
