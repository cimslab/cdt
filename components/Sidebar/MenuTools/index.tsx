import { ReactElement, useState } from "react";
import MenuButton from "../../Common/MenuButton";

import BuildingsIcon from "@mui/icons-material/HomeWorkOutlined";
import AddIcon from "@mui/icons-material/AddRounded";

interface Props {
  // toggleOsm: (arg: boolean) => void;
}

export default function ToolsMenu(): ReactElement<Props> {
  const [toggled, setToggled] = useState(true);

  // const handleClick = () => {
  //   toggleOsm(toggled);
  //   setToggled(!toggled);
  // };

  return (
    <div className="right-menu-body icons-row">
      <MenuButton
        title="placeholder"
        Icon={<AddIcon />}
        handleClick={""}
        index={0}
      />
      <MenuButton
        title="placeholder"
        Icon={<AddIcon />}
        handleClick={""}
        index={1}
      />
    </div>
  );
}
