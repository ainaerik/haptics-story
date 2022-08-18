import { FC } from "react";

import "./style.less";
import Logo from "../assets/logo.png";

interface AppTitleLogoProps {
  title: string;
}

const AppTitleLogo: FC<AppTitleLogoProps> = ({ title }) => (
  <div className="app-title-logo">
    <img src={Logo} alt="logo" />
    <h4>{title}</h4>
  </div>
);

export default AppTitleLogo;
