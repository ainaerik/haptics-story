import { Meta } from "@storybook/react";

import TitleBar from "./index";
import AppTitle from "../AppTitle";
import WindowActions from "../WindowActions";

export default {
  title: "TitleBar",
  component: TitleBar,
} as Meta<typeof TitleBar>;

export const Basic = () => (
  <TitleBar
    actions={
      <WindowActions
        hideMinimize={false}
        hideMaximize={false}
        hideClose={false}
      />
    }
  >
    <AppTitle title="Haptic Composer" />
  </TitleBar>
);
