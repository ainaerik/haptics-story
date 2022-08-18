import { ComponentMeta, ComponentStory } from "@storybook/react";

import SliderInput from "./index";

export default {
  title: "SliderInput",
  component: SliderInput,
  argsTypes: {
    value: { defaultValue: 0 },
  },
} as ComponentMeta<typeof SliderInput>;

const Template: ComponentStory<typeof SliderInput> = (args) => (
  <SliderInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Number of periods",
};
