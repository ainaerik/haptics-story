import React, { FC } from "react";
import { Divider } from "antd";

import "./style.less";

interface PanelProps {
  header?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  maxHeight?: number;
}

const Panel: FC<PanelProps> = ({
  header,
  footer,
  children,
  className,
  maxHeight,
}) => (
  <div className={`panel ${className || ""}`}>
    {header && <div className="panel-header">{header}</div>}
    {children && (
      <div
        className="panel-container"
        style={{ maxHeight: maxHeight || "none" }}
      >
        {children}
      </div>
    )}
    {footer && (
      <div className="panel-footer">
        <Divider />
        {footer}
      </div>
    )}
  </div>
);

export default Panel;
