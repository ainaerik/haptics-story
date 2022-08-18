import React, { FC } from "react";
import { EyeFilled, UpSquareFilled } from "@ant-design/icons";

import "./style.less";

interface PanelHeaderProps {
  title: string;
  onClick: () => void;
}

const PanelHeader: FC<PanelHeaderProps> = ({ title, onClick }) => {
  const handleToggleView = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div className="panel-header">
      <EyeFilled className="toggle-view" onClick={handleToggleView} />
      <UpSquareFilled />
      <h4>{title}</h4>
    </div>
  );
};

export default PanelHeader;
