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
        <div className="skills-section xl:mt-[10rem] lg:mt-[6rem] md:mt-[8rem] sm:mt-[2rem] mt-[5rem] relative lg:px-[8rem] md:px-[5rem] px-[4rem] ">
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
                    500: { slidesPerView: 2, spaceBetween: 10 },
                    550: { slidesPerView: 3, spaceBetween: 12 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                    991: { slidesPerView: 4, spaceBetween: 20 },
                    1200: { slidesPerView: 4, spaceBetween: 20 },
                    1440: { slidesPerView: 5, spaceBetween: 20 },
                }}>
                {skillsCards.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SkillsCards title={item.name} percentage={item.percentage} icon={item.icon} iconType={item.iconType} img={item.img} />
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
            </Swiper>

            <div className="swiper-button-prev md:after:!text-[2.8rem] after:!text-[2.2rem]"></div>
            <div className="swiper-button-next md:after:!text-[2.8rem] after:!text-[2.2rem]"></div>
        </div>
    );
}
