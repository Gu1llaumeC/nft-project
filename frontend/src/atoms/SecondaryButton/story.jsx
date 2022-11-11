import React from "react";
import SecondaryButton from ".";

export default {
  title: "Project/Atoms/SecondaryButton",
  component: SecondaryButton,
  parameters: {
    docs: {
      description: {
        component: "Secondary Button component",
      },
    },
  },
};

const Template = (args) => <SecondaryButton {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  label: "Preview",
};
