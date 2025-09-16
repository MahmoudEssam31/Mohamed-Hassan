import React from 'react'
import { experienceData } from '../../../data/Data';

export default function ExperienceSection({ }) {
    const experiencesData = experienceData;
  return (
      <div className="experience-Section flex flex-col lg:justify-center w-full lg:items-start md:justify-center md:items-center justify-center items-start md:mt-[5rem] mt-[1rem]">
          <h2 className="md:text-[2.18rem] text-[1.8rem] leading-[1.5em] font-[600] lg:my-[4rem] md:my-[1.8rem] my-[1.5rem]">Experience</h2>
          <div className="experience-details-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-[3.5rem] xl:gap-y-[1.2rem] lg:gap-x-[2.2rem] lg:gap-y-[1.2rem] md:gap-x-[1.2rem] md:gap-y-[1rem] gap-x-[5rem] gap-y-[1.5rem]">
              {experiencesData.map((item) => (
                  <div
                      key={item.id}
                      className="experience-details flex flex-col justify-start  md:justify-start lg:items-start md:items-start items-start lg:gap-[1rem] md:gap-[.5rem] gap-[.1rem] w-full border-[.01rem] px-[1rem] py-[1rem] rounded-2xl shadow-2xl "
                      data-aos="flip-left"
                      data-aos-delay="300"
                      data-aos-duration="1500">
                      <span className="leading-[1.5em] uppercase text-[var(--background-color)]  text-[1.25rem] font-[600]">{item.date}</span>
                      <div className="left-svg  xl:w-[120px] lg:w-[110px] md:w-[90px] w-[7.69rem]">
                          <img className="w-[100%]" src="https://beverr.tempurl.host/wp-content/uploads/2022/07/decorative-line-1.svg" alt="" />
                      </div>
                      <h4 className="text-[1.5rem]  font-[500]">{item.company}</h4>
                  </div>
              ))}
          </div>
      </div>
  );
}
