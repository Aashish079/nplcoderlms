"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import ModeToggle from "./modeswitch";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveInitiative, setMobileActiveInitiative] = useState(null);

  const dropdownTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);
      setIsScrollingUp(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const basicNavItems = ["Home", "Courses", "Dashboard", "About"];
  const linkNavItems = ["Home", "Courses", "Dashboard", "About"];

  const handleMouseEnter = (index) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = (index) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(index);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-full transition-all duration-300 ${
          scrollPosition > 50 ? " " : "bg-transparent"
        }`}
      />

      <div className="relative mx-4 md:mx-6 lg:mx-8 lg:my-4 my-1">
        <nav
          className={`mx-auto rounded-2xl transition-all duration-300 backdrop-blur-lg shadow-lg border border-gray-300 dark:border-none ${
            scrollPosition > 50
              ? "bg-white/80 dark:bg-[#2C3043]/80"
              : "bg-white/50 dark:bg-[#2C3043]"
          }`}
        >
          <div className="px-4 md:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 z-10">
                <img
                  src="/images/NPLCoder.png"
                  alt="NPL Coder LMS"
                  className="w-10 h-10"
                />
                <div className="flex items-center">
                  <span className="text-gray-900 dark:text-white font-bold text-lg hidden md:inline">
                    NPLCoder
                  </span>
                </div>
              </Link>

              <div className="hidden xl:flex items-center justify-center flex-1 mx-8">
                <div className="flex space-x-6 xl:space-x-8">
                  {basicNavItems.map((item, index) => (
                    <Link
                      key={linkNavItems[index]}
                      href={
                        linkNavItems[index] === "Home"
                          ? "/"
                          : `/${linkNavItems[index].toLowerCase()}`
                      }
                      className="text-gray-900 dark:text-gray-300 transition-all duration-200 text-[16px] font-medium relative group"
                    >
                      {item}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <ModeToggle />

                <button
                  className="xl:hidden text-gray-900 dark:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-4 px-4 pb-6">
                {basicNavItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-900 dark:text-gray-300 transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
