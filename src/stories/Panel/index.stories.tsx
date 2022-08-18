import { Meta } from "@storybook/react";

import Panel from "./index";

export default {
  title: "Panel",
  component: Panel,
} as Meta<typeof Panel>;

export const Basic = () => (
  <Panel header="Properties">
    <p style={{ marginBottom: 0 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
      doloribus nihil maiores nesciunt. Reprehenderit maxime quisquam cupiditate
      sapiente. Fugit iste itaque pariatur facilis assumenda molestiae doloribus
      commodi sint accusamus?
    </p>
  </Panel>
);
