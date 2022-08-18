import { Meta } from "@storybook/react";

import WindowActions from "./index";

export default {
  title: "WindowActions",
  component: WindowActions,
} as Meta<typeof WindowActions>;

export const Basic = () => <WindowActions />;
