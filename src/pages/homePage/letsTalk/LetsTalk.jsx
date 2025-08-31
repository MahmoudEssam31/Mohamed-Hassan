import React from 'react'

export default function LetsTalk() {
    return (
        <div className="lets-talk flex md:flex-row flex-col justify-center items-center bg-[var(--service-color)] h-[59.37rem] -mx-[56px] mt-[7rem]">
            <div className="lets-talt-text flex flex-col justify-center items-center lg:w-[31.25rem] lg:h-[31.25rem] md:w-[21.59rem] md:h-[21.59rem] w-[24.73rem] h-[23.2rem] bg-[var(--main-color)]  md:rounded-[50%] rounded-2xl relative lg:top-[-4.5rem] lg:left-[1.8rem] md:top-[6.1rem] md:left-[4.8rem] top-[rem] left-[.9rem] gap-[1.5rem] ">
                <p className="font-[600] text-[var(--background-color)] text-[.97rem]">Have a great idea?</p>
                <h2 className="md:text-[2.18rem] text-[1.5rem] lg:leading-[2em] md:leading-[1.2em] leading-[1.8em] md:font-[800] font-[`Staatliches`] font-[900] uppercase text-center md:w-[80%] w-[60%] ">
                    Let’s talk about your project
                </h2>
                <a
                    href="https://wa.me/201000651512?text=Hello%20I%20want%20to%20hire%20you"
                    className="btn bg-[var(--background-color)] text-[1rem] text-[var(--main-color)] w-[11.5rem] h-[3.5rem] rounded-2xl flex font-[600] justify-center items-center hover:bg-[var(--yellow-color)] duration-300 hover:text-[var(--backgroud-color)]">
                    <span className="uppercase">Contact me</span>
                </a>
            </div>
            <div className="lets-talt-text lg:w-[31.25rem] lg:h-[31.25rem] md:w-[21.59rem] md:h-[21.59rem] w-[25rem] h-[25rem] bg-[var(--yellow-color)] rounded-50 rounded-[50%] relative lg:top-[4.5rem] lg:left-[-1.5rem] md:top-[15.5rem] md:right-[-1.9rem] top-[3.5rem]  left-[1rem]"></div>
        </div>
    );
}
