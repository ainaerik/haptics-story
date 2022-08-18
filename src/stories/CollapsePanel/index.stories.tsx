import { Story, Meta } from "@storybook/react";

import CollapsiblePanel from "./index";
import { getMockPanelContent } from "../assets/mock";

export default {
  title: "CollapsiblePanel",
  component: CollapsiblePanel,
} as Meta<typeof CollapsiblePanel>;

export const Basic: Story<typeof CollapsiblePanel> = () => (
  <CollapsiblePanel panelContents={getMockPanelContent()} />
);
