import React from "react";
import CustomContainer from "../../componant/ui/customContainer/CustomContainer";
import HeaderHomePage from "./headerHomePage/HeaderHomePage";
// import { experienceData, skillsCards } from "../../data/Data";
import { data } from "react-router-dom";
// import SkillsCards from "./skillsSection/skillsCards/SkillsCards";
import ExperienceSection from "./experience/experienceSection";
import LetsTalk from "./letsTalk/LetsTalk";
import MyLastesProjescts from "./myLastestsProjects/MyLastesProjescts";
import MyServicesHomPage from "./myServicesHome/MyServicesHome";
import SkillsSectionContainer from "./skillsSection/SkillsSectionContainer";

export default function HomePage() {
    // const experiencesData = experienceData;
    return (
        <div>
            <HeaderHomePage />
            <CustomContainer>
                <SkillsSectionContainer/>            
                <MyLastesProjescts />
                <ExperienceSection />
                <MyServicesHomPage />
                <LetsTalk />
            </CustomContainer>
        </div>
    );
}
