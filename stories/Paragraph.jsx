import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css'

/**
 * Primary UI component for user interaction
 */
export const Paragraph = ({ label, dark, align = 'center', weight = 'normal', className = "" }) => {
  return (
      <div className={`font-${weight} text-lg md:text-xl md:leading-8 text-${align} ${dark ? 'text-gray-800' : 'text-gray-50'} ${className}`}>{label}</div>
  );
};

Paragraph.propTypes = {
  dark: PropTypes.bool,

  align: PropTypes.string,

  weight: PropTypes.string,

  className: PropTypes.string,

  label: PropTypes.string.isRequired,
  
};

Paragraph.defaultProps = {
  dark: false,
  align: "center",
  weight: "normal",
  className: null,
  label: 'Label',
  href: '#'
};
