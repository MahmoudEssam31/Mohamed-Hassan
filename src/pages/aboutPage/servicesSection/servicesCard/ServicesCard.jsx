import React from "react";

export default function ServicesCard({ id, idNum, name, description, icon, bgg }) {
    return (
        <div className="services relative ">
            <div className="services-card relative group flex flex-col justify-start gap-[1rem] max-w-[46rem] h-auto min-h-[23.7rem] md:min-h-[25.7rem] bg-[#ffffff] rounded-2xl px-[2rem] py-[5.3rem] border-[.3rem] border-[var(--bblue-color)] transform hover:translate-y-[-1em] duration-500 hover:bg-[var(--background-color)] overflow-x-hidden hover:border-[var(--bblue-color)]">
                <div className="svg-background  text-[#E6F0EE] group-hover:text-[var(--bblue-color)] ">{bgg}</div>
                <div className="services-card-header flex justify-between flex-row items-start ">
                    <span className="services-card-header-icon text-2xl  text-black w-[5rem] h-[6rem] group-hover:text-[var(--yellow-color)] z-20">{icon}</span>
                    <div className="services-card-number text-[1.5rem] font-[600] font-[statliches]">
                        <span className=" group-hover:text-white font-['Staatliches'] text-[3rem] text-[var(--bblue-color)]">{idNum}</span>
                    </div>
                </div>
                <div className="services-card-title text-[1.5rem] font-[600] font-[statliches]  group-hover:text-white">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
}
