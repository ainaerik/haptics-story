import { Story, Meta } from "@storybook/react";

import PanelHeader from "./index";

export default {
  title: "PanelHeader",
  component: PanelHeader,
} as Meta<typeof PanelHeader>;

export const Basic: Story<typeof PanelHeader> = () => (
  <PanelHeader title="Frequency" onClick={() => {}} />
);
