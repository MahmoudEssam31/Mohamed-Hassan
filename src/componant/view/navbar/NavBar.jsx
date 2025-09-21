import React from "react";
import Logo from "../../ui/logo/Logo";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CustomContainer from "../../ui/customContainer/CustomContainer";
import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="navbar-container  bg-[#003060] lg:pb-[0rem] py-[1.2rem]">
            <CustomContainer className="relative">
                <div className="navbar text-white flex justify-between items-center ">
                    <Logo />
                    <span className="cursor-pointer z-60 lg:hidden absolute md:right-10 md:top-17.5 right-6 " onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <MdClose size={26} /> : <CgMenuLeft size={26} />}
                    </span>

                    <div
                        className={`nav-menu fixed inset-0 bg-[#003060] z-50 flex flex-col justify-center items-center duration-500
                            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
                            lg:static lg:flex lg:flex-row lg:gap-[5rem] lg:bg-transparent lg:opacity-100 lg:visible`}>
                        <div className="mt-10 mb-8 gap-10 lg:hidden">
                            <Logo />
                        </div>
                        <ul
                            className={` flex justify-center text-[#ffffffcc]  items-center xl:text-[1rem] lg:text-[1rem] md:text-[.95rem] font-[600] md:gap-[3rem] gap-[1rem] lg:flex-row md:flex-col flex-col lg:gap-[5rem] `}>
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/"}>
                                Home
                            </NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/about"}>
                                About
                            </NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/projects"}>
                                Projects
                            </NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/contacts"}>
                                Contacts
                            </NavLink>
                        </ul>
                    </div>
                    <div className="nav-icon flex justify-center items-center lg:gap-[2rem] md:gap-[1.5rem] gap-[1.3rem] relative lg:right-0  md:right-15 right-13 z-60">
                        <a href="https://www.linkedin.com/in/mohamed-hassan-25b95896/." target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} className="cursor-pointer duration-300 hover:text-[#0072b1] " />
                        </a>
                        <a
                            href="https://wa.me/201000651512?text=Hi%20Hassan%20👋, 
I%20checked%20your%20portfolio%20and%20would%20like%20to%20know %20more%20about%20your%20services!%20"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaWhatsapp size={20} className="cursor-pointer duration-300 hover:text-[#25D366] " />
                        </a>
                        <a
                            href="mailto:Muhammed.hsn@outlook.com?subject=Hello%20Mohamed&body=I%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20data%20processing%20and%20analytics%20services.%0A%0ACould%20you%20please%20share%20more%20details%3F%0A%0ABest%20regards%2C%20[Your%20Name]"
                            target="_blank"
                            rel="noopener noreferrer">
                            <HiOutlineMail size={24} className="cursor-pointer duration-300 hover:text-[#1877F2] " />
                        </a>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
}
