import { useState } from "react";
import Hamburger from "hamburger-react";

// Icons
import LayersIcon from "@mui/icons-material/LayersOutlined";
import ToolsIcon from "@mui/icons-material/DesignServicesOutlined";
import UploadIcon from "@mui/icons-material/UploadFileOutlined";
import MapStylesIcon from "@mui/icons-material/MapOutlined";
import SharedViewIcon from "@mui/icons-material/OpenInNewOutlined";
import LoginIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";

// Menus
import MenuButton from "./MenuButton";
import MenuInfo from "./MenuInfo";


export default function RightMenuContainer({ updateMapStyle, toggleOsm }) {
  const [isOpen, setOpen] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);
  const [rightmenuOpen, setRightMenuOpen] = useState(false);
  const [city, setCity] = useState();
  const [shareViewMenuOpen, setShareViewMenuOpen] = useState(false);

  const menuButtonClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const index = Number(target.id);
    setMenuIndex(index);
    setRightMenuOpen(!rightmenuOpen);
  };

  const haredViewClick = (e) => {
    e.preventDefault();
    setShareViewMenuOpen(!shareViewMenuOpen);
  };

  const layerHandleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const index = Number(target.id);
    setMenuIndex(index);
    setRightMenuOpen(!rightmenuOpen);

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    let currentCity = url.searchParams.get("city")
      ? url.searchParams.get("city")
      : "";
    setCity(currentCity);
  };

  const rightMenu = [
    <div />,
    <div id="info-container" title="Information">
      <MenuInfo />
    </div>,
    <div
      id="settings-container"
      title="Settings"
      className="right-menu-body"
    ></div>,
  ];

  const currentMenuElement = rightMenu[menuIndex];

  return (
    <div id="right-container">
      <div id="right-menu-button" title="Menu">
        <Hamburger
          color="white"
          size={22}
          rounded={true}
          toggled={isOpen}
          toggle={setOpen}
          distance="lg"
        />
      </div>
      <aside id="right-box" className={isOpen ? "" : "hidden"}>
        <aside className={rightmenuOpen ? "" : "hidden"}>
          {/* <RightMenu>
            <header onClick={menuButtonClick}>
              <RightMenuHeader title={currentMenuElement.props.title} />
            </header>
            {currentMenuElement}
          </RightMenu> */}
        </aside>
        <div className={rightmenuOpen ? "full-page-flex" : "hidden"}></div>
        <nav id="right-menu-buttons" className={rightmenuOpen ? "hidden" : ""}>
          
          <MenuButton
            title={"Info"}
            Icon={<InfoIcon />}
            handleClick={menuButtonClick}
            id={6}
          />
          
        </nav>
      </aside>
      <div className="full-page-flex">
        {/* <ShareViewWindow
          handleClick={haredViewClick}
          toggled={shareViewMenuOpen}
        /> */}
      </div>
    </div>
  );
};
