import { Meta } from "@storybook/react";

import AppTitle from "./index";

export default {
  title: "AppTitle",
  component: AppTitle,
} as Meta<typeof AppTitle>;

export const Basic = () => <AppTitle title="Haptic Composer" />;
