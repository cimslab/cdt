import { ReactElement } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";

export default function RightMenuHeader({
  title,
}): ReactElement<{ title: string }> {
  return (
    <div id="right-menu-header">
      <div id="back-button" title="Back" className="icon">
        <ArrowBackIcon />
      </div>
      <h2>{title}</h2>
    </div>
  );
}
