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
        <div className="navbar-container  bg-[#096A61] lg:py-[2.5rem] py-[1.2rem]">
            <CustomContainer className="relative">
                <div className="navbar text-white flex justify-between items-center ">
                    <Logo />
                    <span className="cursor-pointer z-60 lg:hidden absolute md:right-10 md:top-5 right-6 " onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <MdClose size={26} /> : <CgMenuLeft size={26} />}
                    </span>
                    <div
                        className={`nav-menu absolute xl:right-110 xl:top-10 lg:right-90 lg:top-10 md:right-0 md:top-10  right-0 z-50  top-15  bg-[#096A61] lg:flex duration-500 ${
                            isOpen ? "flex" : "hidden"
                        } lg:flex items-center`}>
                        <ul className={` flex justify-center text-[#ffffffcc]  items-center lg:text-[1.1rem] md:text-[.95rem] font-[600] md:gap-[3rem] lg:flex-row md:flex-col flex-col lg:gap-[5rem]`}>
                            <NavLink className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/"}>
                                Home
                            </NavLink>
                            <NavLink className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/about"}>
                                About
                            </NavLink>
                            <NavLink className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/projects"}>
                                Projects
                            </NavLink>
                            <NavLink className={({ isActive }) => `hover:text-[#ffffff] duration-200 ${isActive ? "text-[#ffffff] not-hover:" : ""}`} to={"/contacts"}>
                                Contacts
                            </NavLink>
                        </ul>
                    </div>
                    <div className="nav-icon flex justify-center items-center lg:gap-[2rem] md:gap-[1.5rem] gap-[1.3rem] relative lg:right-0  md:right-15 right-13 z-10">
                        <a href="https://www.linkedin.com/in/mohamed-hassan-25b95896/." target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} className="cursor-pointer duration-300 hover:text-[#0072b1]" />
                        </a>
                        <a href="https://wa.me/201000651512?text=Hello%20I%20want%20to%20hire%20you" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={20} className="cursor-pointer duration-300 hover:text-[#25D366]" />
                        </a>
                        <a href="mailto:Muhammed.hsn@outlook.com?subject=Hello%20Mohamed&body=I%20would%20like%20to%20contact%20you" target="_blank" rel="noopener noreferrer">
                            <HiOutlineMail size={24} className="cursor-pointer duration-300 hover:text-[#1877F2]" />
                            {/* <FaFacebook /> */}
                        </a>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
}
