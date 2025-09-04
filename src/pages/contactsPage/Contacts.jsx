import React from 'react'
import HeaderComponant from '../../componant/ui/headercomponant/HeaderComponant';
import CustomContainer from '../../componant/ui/customContainer/CustomContainer';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import ContactEmail from './contactEmail/ContactEmail';

export default function Contacts() {
  return (
      <div className="contacts">
          <HeaderComponant title={"Contacts Me"} img={`${import.meta.env.BASE_URL}PersonlImg/imgo1.svg`} />
          <CustomContainer>
              <div className="contacts">
                  <div className="contacts-contact flex flex-col gap-[1.5rem] justify-center mt-[4.5rem] text-[1.5rem] font-[600]">
                      <div className="contacts-contact-number flex items-center gap-[1.5rem] ">
                          <span className="  flex justify-center items-center text-[1.5rem] h-[3.5rem] w-[3.5rem] rounded-4xl text-[var(--main-color)] bg-[var(--background-color)] group duration-300">
                              <IoCall className="group-hover:scale-110 duration-300, group-hover:text-[var(--yellow-color)]" />
                          </span>
                          <span className="">00201000651512</span>
                      </div>
                      <div className="contacts-contact-location flex items-center gap-[1.5rem] ">
                          <span className=" flex justify-center items-center text-[1.5rem] h-[3.5rem] w-[3.5rem] rounded-4xl text-[var(--main-color)] bg-[var(--background-color)]">
                              <IoLocationSharp />
                          </span>
                          <span className="">Lorem ipsum dolor sit amet.</span>
                      </div>
                  </div>
              </div>
              <ContactEmail />
          </CustomContainer>
      </div>
  );
}
