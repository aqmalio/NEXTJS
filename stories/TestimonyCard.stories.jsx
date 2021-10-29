import React from 'react';

import { TestimonyCard } from './TestimonyCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TestimonyCard',
  component: TestimonyCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TestimonyCard {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  name: "John Doe",
  job: "Content Creator",
  img: "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",
  subtitle: "SuWe provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery performance. With 2 Terabytebtitle ",
};
