import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Properties from "./index";
import { getMockPanelContent } from "../assets/mock";

export default {
  title: "Properties",
  component: Properties,
} as Meta;

export const Basic = () => (
  <Properties
    panelContents={getMockPanelContent()}
    handleClose={() => {
      action("Close");
    }}
    handleSave={async () => {
      action("Save");
    }}
  />
);
