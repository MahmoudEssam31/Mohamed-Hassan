import clsx from 'clsx';
import React from 'react'

export default  function MyLastesProCard({ id, img, title, name, className, imgClass }) {
    return (
        <div
            className={clsx(`my-lastest-proj-card relative flex xl:w-[35.8rem] xl:h-[39.8rem] lg:w-[28.56rem] lg:h-[29.5rem] md:w-[20.31rem] md:h-[26.56rem] w-[100%] h-[26.56rem] overflow-hidden group rounded-[2rem] duration-500 ease-in justify-center items-center, ${className} `)}>
            <div className="my-lastest-proj-card-overflow bg-[#0f0f0f45] w-[100%] h-[100%] absolute z-20 group-hover:inset-0 hidden group-hover:block duration-700"></div>
            <img
                src={img}
                alt=""
                className={`w-full object-cover h-[90%] group-hover:scale-150 group-hover:transform-translate-y-[1em] group-hover:transform-translate-y-[-1em] duration-700 ${imgClass} `}
            />{" "}
            <div className="my-lastest-proj-text flex flex-col gap-[1rem] absolute bottom-[5rem] left-[1.5rem] text-[var(--main-color)]">
                <h3 className="text-[1.56rem] font-[600] font-[statliches] bg-[var(--dark-color)] px-[1rem] py-[.4rem] leading-[1.5em] rounded-[.3rem]">{title}</h3>
                <p className="text-[1rem] font-[600] font-[statliches] bg-[var(--dark-color)] px-[1rem] py-[.4rem] rounded-[.3rem]">{name}</p>
            </div>
        </div>
    );
}
