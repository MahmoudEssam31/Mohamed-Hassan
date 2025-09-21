import React from 'react'

export default function AboutMe() {
  return (
      <div className="aboutme flex flex-col gap-[.5rem] mt-[8rem]">
          <h2 className="text-[2.18rem]  leading-[1.5em] font-[600] uppercase ">Mohamed Hassan</h2>
          <h4 className="text-[1.5rem] uppercase font-[500] text-gray-500 ">Data Processing & Analysis Expert</h4>
          <div className="aboutmeList">
              <ul className="list-disc text-gray-500 ms-8 flex gap-2 flex-col text-[1rem]">
                  <li>Freelance & Employee Experience</li>
                  <li>17+ Years in Market Research</li>
                  <li>3000+ Projects</li>
                  <li>Founder of Data Shark</li>
                  <li>Specialized in Data Processing and Analysis.</li>
                  <li>More than 10 years professional experience in scripting, tabulation, coding, data cleaning, dashboards.</li>
                  <li>Worked 17 years as employee in several top marketing research agencies.</li>
                  <li>5 years as freelancer serving 16+ clients with excellent feedback.</li>
              </ul>
          </div>
      </div>
  );
}
