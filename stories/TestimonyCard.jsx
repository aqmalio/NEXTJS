import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css'
import { Paragraph } from "./Paragraph";

export const TestimonyCard = ({ name, job, subtitle, img }) => {
  return (
    <div className="flex flex-col w-48 border-2 border-gray-100 rounded-lg p-5">
        <div className="w-full h-full ">
            <Paragraph dark weight="extralight" className="text-gray-500 md:text-lg" align="left" label={subtitle} />
            <div className="w-full text-center mt-10 flex flex-row justify-start">
              <img src={img} className="rounded-full" />
                <div className="flex flex-col pl-8 text-left">
                    <div className="text-base font-bold">{name}</div>
                    <div className="text-base text-gray-500">{job}</div>
                </div>
              </div>
          </div>
      </div>
  );
};

TestimonyCard.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
};

TestimonyCard.defaultProps = {
  name: "John Doe",
  job: "Content Creator",
  img: "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",
  subtitle: "SuWe provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery performance. With 2 Terabytebtitle ",
};
