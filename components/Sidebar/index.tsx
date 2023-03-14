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
import RightMenuContainer from "./RightMenuContainer";
import MenuHeader from "../Common/MenuHeader";
import MenuButton from "../Common/MenuButton";

import MenuTools from "./MenuTools";
import MenuLayers from "./MenuLayers";
import ShareViewWindow from "./ShareViewWindow";
import MenuInfo from "./MenuInfo";

// Menus
// import { RightMenuHeader } from "./right-menu-header";
// import { RightMenu } from "./right-menu";
// import { MapStyles } from "./map-styles";
// import { Layers } from "./layers";
// import { Auth } from "./auth/auth";
// import { ToolsMenu } from "./tools-menu";
// import { Upload } from "./upload";
// import { InfoMenu } from "./info-menu";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);
  const [rightmenuOpen, setRightMenuOpen] = useState(false);
  const [city, setCity] = useState("Ottawa");
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
    let currentCity: string | null = url.searchParams.get("city")
      ? url.searchParams.get("city")
      : "";
    setCity(currentCity);
  };

  const rightMenu = [
    <div key={0} />,
    <div key={1} id="tools-container" title="Tools">
      <MenuTools />
    </div>,
    <div key={2} id="datasets-container" title={`${city} Layers`}>
      <MenuLayers />
    </div>,
    // <div key={3} id="upload-forms" title="Uploads">
    //   <MenuUpload />
    // </div>,
    // <div key={4} title="Map Styles">
    //   <Router>
    //     <div key={5} id="map-styles-container" title="Map Styles">
    //       <MapStyles updateMapStyle={updateMapStyle} />
    //     </div>
    //   </Router>
    // </div>,
    // <div key={6} id="sign-in-container" title="Authentication">
    //   <Auth />
    // </div>,
    // <div key={7} id="info-container" title="Information">
    //   <InfoMenu />
    // </div>,
    // <div
    //   key={8}
    //   id="settings-container"
    //   title="Settings"
    //   className="right-menu-body"
    // ></div>,
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
          <RightMenuContainer>
            <header onClick={menuButtonClick}>
              <MenuHeader title={currentMenuElement.props.title} />
            </header>
            {currentMenuElement}
          </RightMenuContainer>
        </aside>
        <div className={rightmenuOpen ? "full-page-flex" : "hidden"}></div>
        <nav id="right-menu-buttons" className={rightmenuOpen ? "hidden" : ""}>
          <MenuButton
            title={"Tools"}
            Icon={<ToolsIcon />}
            handleClick={menuButtonClick}
            index={1}
          />
          <MenuButton
            title={"Layers"}
            Icon={<LayersIcon />}
            handleClick={layerHandleClick}
            index={2}
          />
          <MenuButton
            title={"Share View"}
            Icon={<SharedViewIcon />}
            handleClick={haredViewClick}
            index={-1}
          />
          <MenuButton
            title={"Upload"}
            Icon={<UploadIcon />}
            handleClick={menuButtonClick}
            index={3}
          />
          {/* <MenuButton
            title={"Map Styles"}
            Icon={<MapStylesIcon />}
            handleClick={menuButtonClick}
            index={4}
          /> */}
          <MenuButton
            title={"Log in"}
            Icon={<LoginIcon />}
            handleClick={menuButtonClick}
            index={5}
          />
          <MenuButton
            title={"Info"}
            Icon={<InfoIcon />}
            handleClick={menuButtonClick}
            index={6}
          />
          <MenuButton
            title={"Settings"}
            Icon={<SettingsIcon />}
            handleClick={menuButtonClick}
            index={7}
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
}
