import React from 'react'
import MyLastesProCard from './MyLastesProCard';
import { projectsData } from '../../../data/Data';

export default function MyLastesProjescts() {
  const lastestProjectsData = projectsData;
  return (
      <div className="my-lastest-projects mt-[7rem] grid grid-cols-1 md:grid-cols-2 xl:gap-[3rem] lg:gap-[2.5rem] md:ms-0 ms-[.5rem]">
          <div className="my-lastest-projects-left flex flex-col md:gap-[2rem] gap-[1rem]">
              <h2 className="md:text-[2.8rem] text-[1.8rem] leading-[1.5em] font-[400] uppercase font-[Staatliches]">My latest projects</h2>
              <span className="md:text-[1rem] text-[.9rem] w-[60%] leading-[1.5em]   text-gray-400">
                  Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris.
              </span>
              {lastestProjectsData
                  .filter((item) => [1, 2].includes(item.id))
                  .map((item) => (
                      // <div key={item.id}>{item.name}</div>
                      <MyLastesProCard key={item.id} id={item.id} img={item.img} title={item.title} name={item.name} />
                  ))}
          </div>
          <div className="my-lastest-projects-right flex flex-col gap-[1rem]">
              {lastestProjectsData
                  .filter((item) => [3, 4].includes(item.id))
                  .map((item) => (
                      // <div key={item.id}>{item.name}</div>
                      <MyLastesProCard key={item.id} id={item.id} img={item.img} title={item.title} name={item.name} />
                  ))}
          </div>
      </div>
  );
}
