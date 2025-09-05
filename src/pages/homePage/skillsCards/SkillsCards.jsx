import React from 'react'
import { PiMicrosoftExcelLogo } from 'react-icons/pi';
// import Swiper from 'swiper';
// import { SwiperSlide } from 'swiper/react';

export default function SkillsCards({title, percentage,icon, iconType, img}) {
    return (
        <div className="skills_cards 2xl:my-[5rem] lg:my-[4rem] md:my-[3rem] my-[3rem] grid md:grid-cols-3 grid-cols-1 justify-center items-center">
            <div className="experience-cards-container flex justify-start items-center flex-col gap-[1rem] md:w-[12em] h-[18em] border-[.09rem] border-[#E6F0EE] hover:border-[var(--background-color)] rounded-4xl hover:translate-y-[-1em] hover:bg-[var(--background-color)] hover:shadow-xl shadow-[#000000] duration-500 group">
                <div className="card-icon flex justify-center items-center h-[3.8em] w-[3.8em] rounded-2xl mt-[3rem] overflow-hidden">
                    {" "}
                    {iconType === "icon" ? (
                        <span className="w-full h-full flex p-2 justify-center items-center bg-black text-green-400 ">{icon}</span>
                    ) : (
                        <img src={img} alt="" className="w-full h-full " />
                    )}
                </div>
                <p className="font-[500] text-[1.125rem] text-center group-hover:text-[var(--main-color)]">{title}</p>
                <span className="font-[600] text-[1.56rem] text-center leading-[1.65em] text-[var(--light-grey)] font-['Staatliches'] group-hover:text-[var(--main-color)]">{percentage}</span>
            </div>
        </div>
    );
}
