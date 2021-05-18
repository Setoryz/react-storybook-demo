import { Meta, Story } from "@storybook/react";
import ChitChat from ".";

export default {
  title: "Tailwind/ChitChat",
  component: ChitChat,
} as Meta;

const Template: Story = (args) => <ChitChat {...args} />;

export const Main = Template.bind({});
