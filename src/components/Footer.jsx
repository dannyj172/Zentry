import { useRef, useState } from "react";
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https:/twitter.com", icon: <FaTwitter /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://twitch.com", icon: <FaTwitch /> },
];

const transformValues = {
  leftSideValues: [
    0.979139, 0.113231, 0, -0.0003702, -0.0633366, 0.656211, 0, -6.82e-5, 0, 0,
    1, 0, -299.839, -111.514, 0, 1,
  ],
  middleValues: [
    0.99916, -0.0023476, 0, 7.6e-6, 0.0025502, 0.992872, 0, -2.7e-6, 0, 0, 1, 0,
    5.83203, -2.43405, 0, 1,
  ],
  rightSideValues: [
    0.941758, -0.150519, 0, 0.0004927, 0.176833, 0.542999, 0, -0.0001906, 0, 0,
    1, 0, 369.848, -157.398, 0, 1,
  ],
};

const Text = () => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, width } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;

    let newTransform = `matrix3d(${transformValues.middleValues})`;

    if (relativeX <= 0.4) {
      newTransform = `matrix3d(${transformValues.leftSideValues})`;
    } else if (relativeX >= 0.6) {
      newTransform = `matrix3d(${transformValues.rightSideValues})`;
    } else {
      newTransform = `matrix3d(${transformValues.middleValues})`;
    }

    setTransformStyle(newTransform);
  };

  return (
    <div className="w-full flex justify-center pb-40">
      <div
        onMouseMove={handleMouseMove}
        className="m-10 block perspective-[1000px]"
      >
        <h1
          ref={itemRef}
          className="text-center footer-title special-font font-zentry font-black mr-7 leading-160 tracking-[-0.02em]"
          style={{ transform: transformStyle }}
        >
          ZENTR<b>Y</b>
        </h1>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 pb-4 text-black">
      <Text />
      <div className=" flex items-center justify-between w-full md:flex-row">
        <p className="text-center text-sm md:text-left font-medium ml-10">
          &copy;Zentry 2024. All rights reserved
        </p>
        <div className="flex justify-center gap-6 md:justify-start">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white text-2xl p-2"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href=""
          className="text-center text-sm  hover:underline md:text-right  mr-15"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
