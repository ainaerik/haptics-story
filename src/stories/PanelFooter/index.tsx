import { FC } from "react";
import { Space, Button } from "antd";

import "./style.less";

interface PanelFooterProps {
  handleSave: () => Promise<void>;
  handleClose: () => void;
}

const PanelFooter: FC<PanelFooterProps> = ({ handleSave, handleClose }) => (
  <Space size="small" direction="horizontal" className="full-width-footer">
    <Button type="ghost" block onClick={handleClose}>
      Close
    </Button>
    <Button type="primary" block onClick={handleSave}>
      Save
    </Button>
  </Space>
);

export default PanelFooter;
