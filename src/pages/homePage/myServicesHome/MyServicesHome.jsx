import React from "react";
import ServicesCard from "../../aboutPage/servicesSection/servicesCard/ServicesCard";
import { servicesCards } from "../../../data/Data";

export default function MyServicesHomPage() {
    const cardData = servicesCards;
    const [isOpen, setIsOpen] = React.useState(false);
    const visibleservices = isOpen ? cardData : cardData.slice(0, 3);
    return (
        <div className="my-services-homePage flex flex-col justify-center items-center mt-[8rem]">
            <div className="my-services-homePage-header flex flex-row justify-between items-center w-full  mb-[4rem]">
                <h2 className="text-[2.81rem] leading-[1.5em] font-[500] font-[Staatliches] uppercase ">My Services</h2>
                <div className="btn-viewAll flex  justify-center items-center ">
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        className="btn-viewAll cursor-pointer flex justify-center items-center text-[1.1rem] font-[400] text-[var(--background-color)] bg-[#E6F0EE]  duration-500 hover:bg-[var(--background-color)] hover:text-[#E6F0EE] rounded-2xl w-[10rem] h-[3.5rem]">
                        {isOpen ? "Show Less" : "View All"}
                    </span>
                </div>
            </div>
            <div className="services-card-containe  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[3rem]">
                {visibleservices.map((item) => (
                    <ServicesCard key={item.id} id={item.id} idNum={item.idNum} name={item.name} description={item.description} icon={item.icon} bgg={item.bgg} />
                ))}
            </div>
        </div>
    );
}
