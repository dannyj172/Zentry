import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FaLocationArrow } from "react-icons/fa6";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove(
        "floating-nav",
        "floating-nav-outline"
      );
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
      if (currentScrollY > 500) {
        navContainerRef.current.classList.add("floating-nav-outline");
      }
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add(
        "floating-nav",
        "floating-nav-outline"
      );
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-3 z-50 h-21 transition-all duration-700 sm:inset-x-4"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex  gap-7 justify-center items-center">
            <img
              src="/img/logo1.png"
              alt="logo"
              className="w-11 ml-4 brightness-0 invert-100"
            />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<FaLocationArrow className="rotate-135 text-xs" />}
              containerClass="bg-blue-50 md:flex hidden justify-center gap-1 font-bold ml-5 rounded-[17px]"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-hover-btn ${
                    item.toLowerCase() === "nexus" ||
                    item.toLowerCase() === "vault"
                      ? "flex"
                      : ""
                  }`}
                >
                  {item}
                  {(item.toLowerCase() === "nexus" ||
                    item.toLowerCase() === "vault") && (
                    <FaLocationArrow className="m-auto ml-1 text-xs" />
                  )}
                </a>
              ))}
            </div>

            <button
              className="ml-13 mr-3 flex items-center space-x-0.5 cursor-pointer"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{
                    animationDelay: bar % 2 ? `${bar * 0.1}s` : `${bar * 0.3}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
