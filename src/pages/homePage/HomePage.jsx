import React from "react";
import CustomContainer from "../../componant/ui/customContainer/CustomContainer";
import HeaderHomePage from "./headerHomePage/HeaderHomePage";
import { experienceData, skillsCards } from "../../data/Data";
import { data } from "react-router-dom";
import SkillsCards from "./skillsCards/SkillsCards";
import ExperienceSection from "./experience/experienceSection";

export default function HomePage() {
    const skillsCardData = skillsCards;
    // const experiencesData = experienceData;
    return (
        <div>
            <HeaderHomePage />
            <CustomContainer>
                <div className="experience-Section grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-[.5rem] mt-[22rem]">
                    {skillsCardData.map((item) => (
                        <SkillsCards title={item.name} percentage={item.percentage} icon={item.icon} iconType={item.iconType} img={item.img} />
                    ))}
                </div>
                .
                    <ExperienceSection  />
            </CustomContainer>
        </div>
    );
}
