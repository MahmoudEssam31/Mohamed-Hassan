import React from 'react'

export default function ProjectsTalkTo() {
  return (
      <div
          className={`lets-talk flex md:flex-row flex-col justify-center items-center bg-[var(--service-color)] lg:h-[59.37rem] md:h-[39.37rem] h-[59.37rem] lg:-mx-[56px] md:-mx-[44px] -mx-[20px] md:mt-[7rem] mt-[3rem] `}>
          <div
              className={`lets-talt-text flex flex-col justify-center items-center xl:w-[39.25rem] xl:h-[39.25rem] lg:w-[31.25rem] lg:h-[31.25rem] md:w-[21.59rem] md:h-[21.59rem] w-[21.59rem] h-[21.59rem] bg-[var(--main-color)]  md:rounded-[50%] rounded-2xl relative lg:top-[-4.5rem] lg:left-[1.8rem] md:top-[-2.1rem] md:left-[.8rem] top-[rem] left-[.01rem] gap-[1.5rem]`}>
              <p className="font-[600] text-[var(--background-color)] text-[.97rem]">Have a great idea?</p>
              <h2 className="lg:text-[2.18rem] md:text-[2rem] text-[2.1rem] lg:leading-[2em] md:leading-[1.5em] leading-[1.8em] md:font-[400] font-[400] font-[Staatliches]  uppercase text-center md:w-[70%] w-[60%] ">
                  Let’s talk about your project
              </h2>
              <a
                  href="https://wa.me/201000651512?text=Hello%20I%20want%20to%20hire%20you"
                  className="btn bg-[var(--background-color)] text-[1rem] text-[var(--main-color)] lg:w-[12.5rem] lg:h-[4rem] md:w-[10.9rem] md:h-[3.2rem] w-[11.2rem] h-[3.5rem] rounded-2xl flex font-[600] justify-center items-center hover:bg-[var(--yellow-color)] duration-300 hover:text-[var(--background-color)]">
                  <span className="uppercase">Contact me</span>
              </a>
          </div>
          <div
              className={`lets-talt-img xl:w-[39.25rem] xl:h-[39.25rem] lg:w-[31.25rem] lg:h-[31.25rem] md:w-[21.59rem] md:h-[21.59rem] w-[21.59rem] h-[21.59rem] bg-[var(--yellow-color)] rounded-[50%] relative lg:top-[-4.5rem] lg:left-[-1.5rem] md:top-[-2.1rem] md:left-[-.9rem] top-[3.5rem]  left-[.01rem] `}></div>
      </div>
  );
}
