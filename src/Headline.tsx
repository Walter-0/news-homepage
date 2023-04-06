import React from "react";

interface HeadlineProps {
  isMobile: boolean;
}

const Headline: React.FC<HeadlineProps> = ({ isMobile }) => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="./image-web-3-desktop.jpg"
        />
        <img
          src="./image-web-3-mobile.jpg"
          className="mb-4 lg:mb-8 lg:w-[730px]"
          alt="Hero"
        />
      </picture>

      <div className="lg:flex lg:justify-between">
        <h1 className="mb-4 max-w-[22rem] text-5xl font-extrabold text-very-dark-blue lg:m-0 lg:text-6xl">
          The Bright Future of Web 3.0?
        </h1>

        <div className="max-w-[22rem] lg:flex lg:flex-col lg:items-start lg:justify-between">
          <p className="mb-4 tracking-wide text-dark-grayish-blue lg:m-0">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="mb-12 bg-soft-red px-12 py-3 font-bold uppercase tracking-widest text-off-white shadow-inner hover:bg-very-dark-blue lg:m-0">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headline;
