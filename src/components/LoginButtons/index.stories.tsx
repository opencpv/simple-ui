import type { Meta, StoryObj } from "@storybook/react";
import { LoginButtons } from ".";

const meta: Meta<typeof LoginButtons> = {
  title: "Login Page/LoginButtons",
  component: LoginButtons,
  parameters: {
    layout: "centered",
    actions: {
      disable: true,
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const GoogleButton: Story = {
  args: {
    variant: "google",
    onClick: () => {
      alert("google button clicked");
    },
  },
};

export const FacebookButton: Story = {
  args: {
    variant: "facebook",
  },
};

export const AppleButton: Story = {
  args: {
    variant: "apple",
  },
};
