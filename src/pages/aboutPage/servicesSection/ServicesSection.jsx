import React from 'react'
import ServicesCard from './servicesCard/ServicesCard'
import CustomContainer from '../../../componant/ui/customContainer/CustomContainer'
import { servicesCards } from '../../../data/Data';

export default function ServicesSection() {
    const cardData = servicesCards;
  return (
      <div className="services-section bg-[var(--service-color)]  lg:-mx-[56px] md:-mx-[44px] -mx-[20px] mt-[7rem]">
          <CustomContainer>
              <div className="services-section-container flex flex-col justify-center items-center gap-[2.5rem] mt-[10rem]">
                  <h2 className="text-[2.18rem] leading-[1.5em] font-[600] uppercase mt-[8rem]"> my Services</h2>
                  <p className="max-w-[80%] text-center">
                      Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi blandit magna, quis scelerisque ipsum
                      lectus ut libero.
                  </p>
                  <div className="services-card-containe grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-[2rem]">
                      {cardData.map((item) => (
                          <div className="aos" data-aos="fade-up">
                              <ServicesCard key={item.id} id={item.id} idNum={item.idNum} name={item.name} description={item.description} icon={item.icon} bgg={item.bgg} />
                          </div>
                      ))}
                  </div>
              </div>
          </CustomContainer>
      </div>
  );
}
