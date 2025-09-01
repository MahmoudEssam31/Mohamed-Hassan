import React from 'react'
import { experienceData } from '../../../data/Data';

export default function ExperienceSection({ }) {
    const experiencesData = experienceData;
  return (
      <div className="experience-Section flex flex-col md:justify-center md:items-center justify-center items-start md:mt-[5rem] mt-[1rem]">
          <h2 className=" md:text-[2.18rem] text-[1.8rem] leading-[1.5em] font-[600] md:my-[4rem] my-[1.5rem]">Experience</h2>
          <div className="experience-details-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:gap-x-[21.2rem] xl:gap-y-[1.2rem] md:gap-x-[10.2rem] md:gap-y-[.9rem] gap-x-[5rem] gap-y-[1.5rem]">
              {experiencesData.map((item) => (
                  <div className="experience-details flex md:flex-row flex-col justify-start md:items-center items-start lg:gap-[1.5rem] md:gap-[1rem] gap-[.1rem] w-full">
                      <span className="leading-[1.5em] font-[Staatliches] text-[var(--background-color)] text-[1.25rem] font-[600] ">{item.date}</span>
                      <h4 className="text-[1.56rem]  font-[400] font-[Staatliches]">{item.company}</h4>
                  </div>
              ))}
          </div>
      </div>
  );
}
