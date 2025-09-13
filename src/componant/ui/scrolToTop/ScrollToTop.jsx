import React from "react";
import { GiSharkJaws } from "react-icons/gi";

export default function ScrollToTop() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); 

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollTop}
            aria-label="Scroll to top"
            className={`fixed right-1 bottom-24 z-50 p-3 rounded-4xl lg:w-[3rem] lg:h-[3.5rem] md:w-[2.5rem] md:h-[2.5rem] hidden md:flex bg-[var(--bblue-color)] shadow-lg border
        transition-all duration-300 focus:outline-none hover:scale-110 text-[var(--background-color)]  justify-center items-center
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}
      `}>
            <GiSharkJaws size={30} />
        </button>
    );
}
