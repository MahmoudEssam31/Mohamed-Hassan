import React from "react";
import Logo from "../../ui/logo/Logo";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CustomContainer from "../../ui/customContainer/CustomContainer";
// import { CgMenuLeft } from "react-icons/cg";

export default function Footer() {
    return (
        <div className="navbar-container  bg-[var(--service-color)] lg:py-[2.5rem] py-[1.2rem]">
            <CustomContainer className="relative">
                <div className="navbar text-[--dark-color]  flex justify-between items-center ">
                    <h2>
                        © 2025 <a href="https://www.linkedin.com/in/mahmoud-essam-11435684?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Mahmoud Essam</a>
                    </h2>
                    <div className={`nav-menu  z-50  top-15  bg-[--service-color] lg:flex duration-500`}>
                        <ul className={` flex justify-center   items-center text-[.95rem] font-[600]  md:gap-[3rem] lg:flex-row md:flex-col flex-col lg:gap-[5rem] `}>
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
                        <a href="https://www.linkedin.com/in/mohamed-hassan-25b95896/.">
                            <FaLinkedin size={20} className="cursor-pointer duration-300 hover:text-[#0072b1]" />
                        </a>
                        <a href="https://wa.me/201000651512?text=Hello%20I%20want%20to%20hire%20you">
                            <FaWhatsapp size={20} className="cursor-pointer duration-300 hover:text-[#25D366]" />
                        </a>
                        <a href="">
                            <FaFacebook size={20} className="cursor-pointer duration-300 hover:text-[#1877F2]" />
                        </a>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
}

