import Button from "./Button";

const ImageClipBox = ({ src, clipClass, zoomed }) => {
  return (
    <div className={clipClass}>
      <img className={`${zoomed ? "scale-150" : ""}`} src={src} />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="mt-80 mb-30 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50">
        <div className="absolute -left-20 top-0 hidden h-full w-72 sm:block lg:left-20 lg:w-96 overflow-y-clip">
          <ImageClipBox
            clipClass="contact-clip-path-1 translate-x-40 scale-150"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-50 translate-y-50 translate-x-30 scale-150"
            src="img/contact-2.webp"
          />
        </div>
        <div className="absolute top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-35 lg:top-10 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-140"
            src="img/swordman-partial.webp"
            zoomed
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-140"
            src="img/swordman.webp"
            zoomed
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[12px] font-bold uppercase">
            Join Zentry
          </p>
          <p className="special-font mt-10 w-full font-zentry text-6xl leading-0.9 md:text-[7rem] leading-24">
            Let&apos;s b<b>u</b>ild the <br /> new era of g<b>a</b>ming <br /> t
            <b>o</b>gether
          </p>

          <Button
            title="contact us"
            containerClass="mt-10 flex !py-4 rounded-[50px] px-8"
            textClass="text-sm font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
