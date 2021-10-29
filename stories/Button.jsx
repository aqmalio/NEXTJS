import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css'
import Link from 'next/link'


/**
 * Primary UI component for user interaction
 */
export const Button = ({ className, href, label, ...props }) => {
  return (
    <div className={`my-3 rounded-lg`} {...props}>
      <div className={`inline-flex shadow items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 ${className}`}>
        <Link href={href}>{label}</Link>
      </div>
    </div >
  );
};

Button.propTypes = {
  className: PropTypes.string,

  label: PropTypes.string.isRequired,

  href: PropTypes.string,
  
};

Button.defaultProps = {
  className: null,
  label: 'Label',
  href: '#'
};
