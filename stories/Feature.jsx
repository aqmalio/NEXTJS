import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css'
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

export const Feature = ({ title, subtitle, img, dark }) => {
  return (
    <div className="grid grid-cols-2 w-28">
    <div className="relative block h-auto overflow-hidden my-5">
      <div className="w-full h-full">
        <div className="absolute z-10 w-full grid grid-cols-1 mt-10 lg:mt-40 text-center">
          <Title weight="bold" dark={dark} label={title} />
          <Paragraph className="w-3/5 m-auto" weight="light" dark={dark} label={subtitle} />
        </div>
        <img src={img} className="z-0 w-full" />
      </div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  dark: PropTypes.bool,
};

Feature.defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
  img: "/img/feature1.png",
  dark: true,
};
