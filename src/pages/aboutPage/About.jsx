import React from 'react'
import CustomContainer from "../../componant/ui/customContainer/CustomContainer";
import HeaderComponant from '../../componant/ui/headercomponant/HeaderComponant';
import AboutMe from './aboutMe/AboutMe';
import Services from './servicesSection/servicesCard/ServicesCard';
import ServicesCard from './servicesSection/servicesCard/ServicesCard';
import ServicesSection from './servicesSection/ServicesSection';

export default function About() {
  return (
      <div>
          <HeaderComponant title={"About Me"} img={" "} />
          <CustomContainer>
              <AboutMe />
              <ServicesSection />
          </CustomContainer>
      </div>
  );
}