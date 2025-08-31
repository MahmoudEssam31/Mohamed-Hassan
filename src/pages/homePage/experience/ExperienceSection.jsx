import React from 'react'
import { experienceData } from '../../../data/Data';

export default function ExperienceSection({ }) {
    const experiencesData = experienceData;
  return (
      <div className="experience-Section flex flex-col justify-center items-center mt-[5rem]">
          <h2 className=" text-[2.18rem] leading-[1.5em] font-[600] my-[4rem]">Experience</h2>
          <div className="experience-details-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:gap-x-[21.2rem] xl:gap-y-[1.2rem] md:gap-x-[10.2rem] md:gap-y-[.9rem] gap-x-[5rem] gap-y-[.7rem]">
              {experiencesData.map((item) => (
                  <div className="experience-details flex flex-row justify-start items-center lg:gap-[1.5rem] md:gap-[1rem] gap-[1.5rem] w-full">
                      <span className="leading-[1.5em] font-[Staatliches] text-[var(--background-color)] text-[1.25rem] font-[600] ">{item.date}</span>
                      <h4 className="text-[1.56rem]  font-[400] font-[Staatliches]">{item.company}</h4>
                  </div>
              ))}
          </div>

      </div>
  );
}
