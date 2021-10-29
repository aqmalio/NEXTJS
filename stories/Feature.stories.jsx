import React from 'react';

import { Feature } from './Feature';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Feature',
  component: Feature,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Feature {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  title: "Title",
  subtitle: "SuWe provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery performance. With 2 Terabytebtitle",
  img: "https://www.plazakamera.com/wp-content/uploads/2020/11/Jual-DJI-Mini-2-Drone-Harga-Murah-Terbaik-dan-Spesifikasi.jpg",
  dark: true,
};
