import { FC } from "react";

import "./style.less";
import Close from "../Icons/Close";
import Minimize from "../Icons/Minimize";
import Maximize from "../Icons/Maximize";

interface WindowActionsProps {
  hideClose?: boolean;
  hideMaximize?: boolean;
  hideMinimize?: boolean;
  handleClose?: () => void;
  handleMaximize?: () => void;
  handleMinimize?: () => void;
}

const WindowActions: FC<WindowActionsProps> = ({
  hideClose,
  hideMinimize,
  hideMaximize,
  handleClose,
  handleMaximize,
  handleMinimize,
}) => (
  <div className="window-actions">
    {!hideMinimize && (
      <span className="btn-action" onClick={handleMinimize}>
        <Minimize />
      </span>
    )}
    {!hideMaximize && (
      <span className="btn-action" onClick={handleMaximize}>
        <Maximize />
      </span>
    )}
    {!hideClose && (
      <span className="btn-action" onClick={handleClose}>
        <Close />
      </span>
    )}
  </div>
);

export default WindowActions;
