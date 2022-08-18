import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PanelFooter from "./index";

export default {
  title: "PanelFooter",
  component: PanelFooter,
} as Meta<typeof PanelFooter>;

export const Basic: Story<typeof PanelFooter> = () => (
  <PanelFooter
    handleClose={() => {
      action("Close");
    }}
    handleSave={async () => {
      action("Save");
    }}
  />
);
