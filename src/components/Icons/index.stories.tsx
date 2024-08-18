import type { Meta, StoryObj } from "@storybook/react";
import { GoogleLogo } from ".";

const meta: Meta<typeof GoogleLogo> = {
  title: "Components/Icons",
  component: GoogleLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {},
};
