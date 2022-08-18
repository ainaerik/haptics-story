import { FC } from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import PanelHeader from "../PanelHeader";
import "./style.less";

export interface IPanelContent {
  key: string;
  title: string;
  content: React.ReactNode | undefined;
  onClick: () => void;
}

interface CollapsiblePanelProps {
  panelContents: IPanelContent[];
}

const CollapsiblePanel: FC<CollapsiblePanelProps> = ({ panelContents }) => (
  <Collapse
    className="collapse-panel"
    bordered={false}
    defaultActiveKey={[...panelContents.map((p) => p.key)]}
    expandIconPosition="end"
    expandIcon={({ isActive }) => (
      <CaretRightOutlined rotate={isActive ? -90 : 90} />
    )}
  >
    {panelContents.map((panelContent) => (
      <Collapse.Panel
        className="collapse-header"
        key={panelContent.key}
        header={
          <PanelHeader
            title={panelContent.title}
            onClick={panelContent.onClick}
          />
        }
      >
        <div className="panel-content">{panelContent.content}</div>
      </Collapse.Panel>
    ))}
  </Collapse>
);

export default CollapsiblePanel;
