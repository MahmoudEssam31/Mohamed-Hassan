import React from 'react'
import HeaderComponant from '../../componant/ui/headercomponant/HeaderComponant';
import CustomContainer from '../../componant/ui/customContainer/CustomContainer';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import ContactEmail from './contactEmail/ContactEmail';
import { HiOutlineMail } from 'react-icons/hi';
// import { NavLink } from 'react-router-dom';

export default function Contacts() {
  return (
      <div className="contacts">
          <HeaderComponant title={"Contacts Me"} img={`${import.meta.env.BASE_URL}PersonlImg/imgo1.svg`} />
          <CustomContainer>
              <div className="contacts">
                  <div className="contacts-contact flex flex-col gap-[1.5rem]  justify-center mt-[4.5rem] text-[1.5rem] font-[600]">
                      <a href="tel:+201000651512" className="contacts-contact-number flex items-center md:gap-[1.5rem] gap-[1.1rem] group">
                          <a className="  flex justify-center items-center text-[1.5rem] h-[3.5rem] w-[3.5rem] rounded-4xl text-[var(--main-color)] bg-[var(--background-color)] group duration-300">
                              <IoCall className="group-hover:scale-110 group-hover:rotate-15 duration-300, group-hover:text-[var(--yellow-color)]" />
                          </a>
                          <a className="text-[var(--dark-color)] hover:text-[var(--background-color)] duration-300">
                              <span data-aos="fade-up" data-aos-delay="0">
                                  0
                              </span>
                              <span data-aos="fade-up" data-aos-delay="100">
                                  0
                              </span>
                              <span data-aos="fade-up" data-aos-delay="200">
                                  2
                              </span>
                              <span data-aos="fade-up" data-aos-delay="300">
                                  0
                              </span>
                              <span data-aos="fade-up" data-aos-delay="400">
                                  1
                              </span>
                              <span data-aos="fade-up" data-aos-delay="500">
                                  0
                              </span>
                              <span data-aos="fade-up" data-aos-delay="600">
                                  0
                              </span>
                              <span data-aos="fade-up" data-aos-delay="700">
                                  0
                              </span>
                              <span data-aos="fade-up" data-aos-delay="800">
                                  6
                              </span>
                              <span data-aos="fade-up" data-aos-delay="900">
                                  5
                              </span>
                              <span data-aos="fade-up" data-aos-delay="1000">
                                  1
                              </span>
                              <span data-aos="fade-up" data-aos-delay="1100">
                                  5
                              </span>
                              <span data-aos="fade-up" data-aos-delay="1200">
                                  1
                              </span>
                              <span data-aos="fade-up" data-aos-delay="1300">
                                  2
                              </span>
                          </a>
                      </a>
                      <a
                          href="mailto:Muhammed.hsn@outlook.com?subject=Hello%20Mohamed&%0Abody=I%20came%20across%20your%20portfolio%20and%20I’m%20interested%20in%20learning%20more%20about%20your%20data%20processing%20and%20analytics%20services.%0A%20Could%20you%20please%20share%20more%20details?%20
Best%20regards,%20[Your%20Name]"
                          className="contacts-contact-location flex items-center md:gap-[1.5rem] gap-[1.1rem] group">
                          <span className=" flex justify-center items-center text-[1.5rem] h-[3.5rem] w-[3.5rem] rounded-4xl text-[var(--main-color)] bg-[var(--background-color)]">
                              <HiOutlineMail className="group-hover:scale-110 group-hover:rotate-15 duration-300, group-hover:text-[var(--yellow-color)]" />
                          </span>
                          <span className="hover:text-[var(--background-color)] duration-300 md:text-[1.5rem] text-[.8rem]">Muhammed.hsn@outlook.com</span>
                      </a>
                  </div>
              </div>
              <ContactEmail />
          </CustomContainer>
      </div>
  );
}
