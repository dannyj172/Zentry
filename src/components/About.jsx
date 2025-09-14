import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1600 top",
        scrub: 2,
        pin: true,
      },
    });

    clipAnimation.to("#clip", {
      className: "h-dvh w-screen box_parent",
    });

    clipAnimation.from(".mask-clip-path-about", {
      marginTop: "20px",
    });

    clipAnimation.to(".mask-clip-path-about", {
      marginTop: "0",
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    clipAnimation.to("#text", {
      transform: "translateX(-50%)",
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1600 center",
        pin: "#text",
      },
    });
  });

  useGSAP(() => {
    gsap.set("#image", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    });

    gsap.from("#image", {
      clipPath: "polygon(25% 0, 82% 14%, 90% 100%, 18% 100%)",
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1600 center",
        scrub: 2,
      },
    });

    gsap.set(".image-resize", {
      width: "100%",
      height: "100%",
    });

    gsap.from(".image-resize", {
      width: "99%",
      height: "99.5%",
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1600 center",
        scrub: 2,
      },
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general font-bold uppercase md:text-[12px]">
          Welcome to Zentry
        </h2>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center !text-9xl"
        />

        <div id="text" className="about-subtext">
          <p>The Metagame begins-your life, now an epic MMORPG</p>
          <p className="text-gray-400">
            Zentry is the unified play layer that bridges players, agentic AI,
            and blockchains, creating a new economic paradigm.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen box_parent" id="clip">
        <div className="absolute z-99 h-full  translate-y-[-50%] mt-60">
          <img
            className="w-[100vw] max-w-[100vw]"
            src="img/stones.webp"
            alt="Background"
          />
        </div>
        <div className="mask-clip-path-about about-image mt-[100px]" id="image">
          <img
            src="img/about.webp"
            alt="Background"
            id="image"
            className="absolute left-[50%] top-[50%] object-cover translate-[-50%] image-resize"
          />
          <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="flt_tag">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="flt_tag"
                />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
