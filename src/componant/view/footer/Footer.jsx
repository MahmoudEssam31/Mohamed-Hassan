import React from "react";
import Logo from "../../ui/logo/Logo";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CustomContainer from "../../ui/customContainer/CustomContainer";
import { HiOutlineMail } from "react-icons/hi";
// import { CgMenuLeft } from "react-icons/cg";

export default function Footer() {
    return (
        <div className="footer-container bg-[var(--service-color)] lg:py-[2.5rem] py-[1.2rem]">
            <CustomContainer className="relative">
                <div className="footer text-[---color] flex md:flex-row flex-col md:justify-between md:items-center 2xl:text-[1.5rem] md:text-[.8rem] text-[.6rem] gap-[1rem]  justify-center items-center ">
                    <div className="copy-right flex justify-center items-center flex-col">
                        <h2>© 2025 Powered by:</h2>
                        <a
                            className="flex items-center justify-center gap-1 hover:text-[var(--background-color)] duration-200"
                            href="https://www.linkedin.com/in/mahmoud-essam-11435684?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer">
                            Mahmoud Essam{" "}
                            <a href="https://wa.me/201220204045?text=" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={10} className="cursor-pointer duration-300 hover:text-[#25D366]" />
                            </a>
                        </a>
                    </div>
                    <div className={`nav-menu top-15 bg-[--service-color] lg:flex duration-500`}>
                        <ul className={` flex justify-center  text-[#797575] items-center 2xl:text-[2.2rem] text-[.8rem] font-[600]  md:gap-[2rem] gap-[3rem] lg:flex-row  flex-row lg:gap-[5rem] `}>
                            <NavLink className={({ isActive }) => `hover:text-[var(--dark-color)] duration-200 ${isActive ? "text-[var(--dark-color)] not-hover:" : ""}`} to={"/"}>
                                Home
                            </NavLink>
                            <NavLink className={({ isActive }) => `hover:text-[var(--dark-color)] duration-200 ${isActive ? "text-[var(--dark-color)] not-hover:" : ""}`} to={"/about"}>
                                About
                            </NavLink>
                            <NavLink className={({ isActive }) => `hover:text-[var(--dark-color)] duration-200 ${isActive ? "text-[var(--dark-color)] not-hover:" : ""}`} to={"/projects"}>
                                Projects
                            </NavLink>
                            <NavLink className={({ isActive }) => `hover:text-[var(--dark-color)] duration-200 ${isActive ? "text-[var(--dark-color)] not-hover:" : ""}`} to={"/contacts"}>
                                Contacts
                            </NavLink>
                        </ul>
                    </div>
                    <div className="nav-icon flex justify-center items-center lg:gap-[2rem] md:gap-[1.5rem] gap-[1.3rem] relative z-10">
                        <a href="https://www.linkedin.com/in/mohamed-hassan-25b95896/." target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} className="cursor-pointer duration-300 hover:text-[#0072b1] 2xl:w-[2.5rem] 2xl:h-[2.5rem]" />
                        </a>
                        <a
                            href="https://wa.me/201000651512?text=Hi%20Hassan%20👋,%0A
I%20checked%20your%20portfolio%20and%20would%20like%20to%20know %20more%20about%20your%20services!"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaWhatsapp size={20} className="cursor-pointer duration-300 hover:text-[#25D366] 2xl:w-[2.5rem] 2xl:h-[2.5rem]" />
                        </a>
                        <a
                            href="mailto:Muhammed.hsn@outlook.com?subject=Hello%20Mohamed%0Abody=I%20came%20across%20your%20portfolio%20and%20I’m%20interested%20in%20learning%20more%20about%20your%20data%20processing%20and%20analytics%20services.%0ACould%20you%20please%20share%20more%20details?%20
Best%20regards,%0A[Your%20Name]"
                            target="_blank"
                            rel="noopener noreferrer">
                            <HiOutlineMail size={24} className="cursor-pointer duration-300 hover:text-[#1877F2] 2xl:w-[2.5rem] 2xl:h-[2.5rem]" />
                        </a>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
}

