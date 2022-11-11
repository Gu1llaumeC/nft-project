import React, { useState } from "react";
import PrimaryButton from ".";

export default {
  title: "Project/Atoms/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: "Primary Button component",
      },
    },
  },
};

const Template = (args) => {
  const [loading, setLoading] = useState(false);
  const onClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return <PrimaryButton {...args} onClick={onClick} loading={loading} />;
};

export const Mint = Template.bind({});
Mint.args = {
  label: "Mint",
  loadingLabel: "Minting...",
};

export const Login = Template.bind({});
Login.args = {
  label: "Login",
  loadingLabel: "Logging in",
};
