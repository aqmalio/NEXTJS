import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css'

/**
 * Primary UI component for user interaction
 */
export const Title = ({ label, dark, align = 'center', weight = 'normal', className = "" }) => {
  return (
    <div className={`font-${weight} text-2xl md:text-4xl text-${align} md:mb-4 ${dark ? 'text-gray-800' : 'text-white'} ${className}`}>{label}</div>
  );
};

Title.propTypes = {
  dark: PropTypes.bool,

  align: PropTypes.string,

  weight: PropTypes.string,

  className: PropTypes.string,

  label: PropTypes.string.isRequired,
  
};

Title.defaultProps = {
  dark: false,
  align: "center",
  weight: "normal",
  className: null,
  label: 'Label',
  href: '#'
};
