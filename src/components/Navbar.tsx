"use client";

import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Work", id: "work" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;

            let currentSection = "home";

            navItems.forEach((item) => {
                const section = document.getElementById(item.id);

                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = item.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setActiveSection(id);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-purple-100/70 bg-[#fcfaff]/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

                {/* Name */}
                <button
                    type="button"
                    onClick={() => scrollToSection("home")}
                    className="text-2xl font-bold tracking-tight text-[#17132b] transition hover:text-purple-600"
                >
                    Glory Mung&apos;athia
                </button>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => scrollToSection(item.id)}
                            className={`text-sm transition ${activeSection === item.id
                                    ? "font-semibold text-purple-600"
                                    : "font-medium text-[#17132b] hover:text-purple-600"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Connect */}
                <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="hidden rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 sm:block"
                >
                    Let&apos;s Connect
                </button>

            </div>
        </nav>
    );
}