import React from 'react'
import CustomContainer from '../../componant/ui/customContainer/CustomContainer'
import HeaderComponant from '../../componant/ui/headercomponant/HeaderComponant';
import MyLastesProCard from '../homePage/myLastestsProjects/MyLastesProCard';
import { projectsData } from '../../data/Data';
import LetsTalk from '../homePage/letsTalk/LetsTalk';
import ProjectsTalkTo from './projectsTalk/ProjectsTalkTo';

export default function Projects({img,title,name }) {
    const projectsDataCard = projectsData;
  return (
      <div className="projects">
          <HeaderComponant title={"Projects"} img={`${import.meta.env.BASE_URL}PersonlImg/imgo1.svg`} />
          <CustomContainer>
              <div className="projects-text 2xl:mt-[6rem] xl:mt-[8rem] lg:mt-[6rem] mt-[6rem] flex flex-col gap-[.98rem]">
                  <h2 className="xl:text-[2.81rem] lg:text-[2.21rem] md:text-[2.2rem] text-[1.7rem] leading-[1.5em] font-[500] font-[Staatliches] uppercase">Creative. Professional. Ethical.</h2>
                  <div className="projects-List">
                      <ul className="list-disc text-gray-500 ms-8 flex gap-2 flex-col text-[1.1rem]">
                          <li>Delivered 3000+ projects across Egypt, MENA region and others.</li>
                          <li>Served 15+ freelance clients in the last 5 years.</li>
                          <li>Reputation for quality, commitment, and professionalism.</li>
                      </ul>
                  </div>
              </div>
              <div className={`projects-cards grid grid-cols-1 md:grid-cols-2 xl:gap-[2rem] lg:gap-[2.5rem] md:gap-[1.5rem] gap-[1.5rem] 2xl:mt-[2.5rem] lg:mt-[7rem] md:mt-[4rem] mt-[3rem]`}>
                  {projectsDataCard.map((item) => (
                      <MyLastesProCard
                          key={item.id}
                          id={item.id}
                          img={item.img}
                          title={item.title}
                          name={item.name}
                          className="xl:!w-[100%] lg:!w-[105%] md:!w-[105%] !w-[100%] xl:!h-[37rem] lg:!h-[33rem] md:!h-[28rem]"
                          imgClass="h-[100%]"
                      />
                  ))}
              </div>
              <div className="project-letsTalk">
                  <ProjectsTalkTo />
              </div>
          </CustomContainer>
      </div>
  );
}
