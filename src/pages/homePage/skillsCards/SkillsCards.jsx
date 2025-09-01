import React from 'react'
import { PiMicrosoftExcelLogo } from 'react-icons/pi';

export default function SkillsCards({title, percentage,icon, iconType, img}) {
    return (
        <div className="skills_cards ">
            <div className="experience-cards-container flex justify-start items-center flex-col gap-[1rem] md:w-[9em] h-[18em] border-[.09rem] border-[#E6F0EE] hover:border-[var(--background-color)] rounded-4xl hover:translate-y-[-1em] hover:bg-[var(--background-color)] hover:shadow-xl shadow-[#000000] duration-500 w-full group">
                <div className="card-icon flex justify-center items-center h-[3.8em] w-[3.8em] rounded-2xl mt-[3rem] overflow-hidden">
                    {" "}
                    {iconType === "icon" ? (
                        <span className="w-full h-full flex p-2 justify-center items-center bg-black text-green-400 ">{icon}</span>
                    ) : (
                        <img src={img} alt="" className="w-full h-full " />
                    )}
                </div>
                <p className="font-[500] text-[1.125rem] group-hover:text-[var(--main-color)]">{title}</p>
                <span className="font-[600] text-[1.56rem] leading-[1.65em] text-[var(--light-grey)] font-['Staatliches'] group-hover:text-[var(--main-color)]">{percentage}</span>
            </div>
        </div>
    );
}
