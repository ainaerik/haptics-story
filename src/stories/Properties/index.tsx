import { FC } from "react";

import Panel from "../Panel";
import PanelFooter from "../PanelFooter";
import CollapsePanel, { IPanelContent } from "../CollapsePanel";
import "./style.less";

interface PropertiesProps {
  panelContents: IPanelContent[];
  handleSave: () => Promise<void>;
  handleClose: () => void;
}

const Properties: FC<PropertiesProps> = ({
  panelContents,
  handleSave,
  handleClose,
}) => (
  <Panel
    maxHeight={646}
    header="Properties"
    footer={<PanelFooter handleSave={handleSave} handleClose={handleClose} />}
  >
    <CollapsePanel panelContents={panelContents} />
  </Panel>
);

export default Properties;
