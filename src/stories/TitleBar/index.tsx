import React, { FC } from "react";

import "./style.less";

interface TitleBarProps {
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

const TitleBar: FC<TitleBarProps> = ({ actions, children }) => (
  <div className="title-bar">
    <div className="content">{children}</div>
    <div className="actions">{actions}</div>
  </div>
);

export default TitleBar;
