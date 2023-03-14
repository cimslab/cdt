import { useState } from "react";

import { torontoPackages } from "../../../lib/databases/toronto-selected-packages";

import AddIcon from "@mui/icons-material/AddRounded";

import MarkerIcon from "@mui/icons-material/PlaceOutlined";
import LineIcon from "@mui/icons-material/PolylineOutlined";
import PolygonIcon from "@mui/icons-material/CategoryOutlined";
import UnknownIcon from "@mui/icons-material/HelpOutlineOutlined";

// import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export default function Layers() {
  const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF");

    return (
      <input
        type="color"
        title="Pick color"
        className="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      ></input>
    );
  };

  return (
    <div className="right-menu-body">
      <ul>
        {Boolean(torontoPackages.length) &&
          torontoPackages.map((pkg: any, index) => {
            const key = `${pkg}-${index}`;
            // const topic = pkg.topic;
            const name =
              pkg.name.replaceAll("-", " ").charAt(0).toUpperCase() +
              pkg.name.slice(1);
            return (
              <li key={key} className="right-menu-table-two-rows" title="Add">
                <div
                  className="row"
                  onClick={async () => {
                    const pkgUrl: string = `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=${pkg.id}`;
                    let pkgResult: any;
                    const fetchPkgData: any = async () => {
                      const response = await fetch(pkgUrl);
                      if (response) {
                        const data = await response.json();
                        pkgResult = await data.result;
                      }
                      return pkgResult;
                    };

                    const pkgResultData = await fetchPkgData(pkgUrl);
                    const resources = pkgResultData.resources;
                    const resource = resources.filter(
                      (r: any) => r.datastore_active
                    );
                    const resourceId = resource[0].id;
                    const resourceUrl = `https://ckan0.cf.opendata.inter.prod-toronto.ca/ca/api/3/action/datastore_search?resource_id=${resourceId}`;

                    let resourceRecords: any;
                    const fetchResultData: any = async () => {
                      const response = await fetch(resourceUrl);
                      if (response) {
                        const data = await response.json();
                        const resourceResult = await data.result;
                        resourceRecords = resourceResult.records;
                      }
                      return resourceRecords;
                    };
                    const resourceResultData = await fetchResultData(pkgUrl);
                    console.log(resourceResultData);
                  }}
                >
                  <h4 className="effect">{`${name} `}</h4>
                </div>
                <div className="end">
                  <ColorPicker />
                  {pkg.type === "PT" ? (
                    <MarkerIcon />
                  ) : pkg.type === "LI" ? (
                    <LineIcon />
                  ) : pkg.type === "PO" ? (
                    <PolygonIcon />
                  ) : (
                    <UnknownIcon />
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
