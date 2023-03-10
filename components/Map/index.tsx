"use client";

import { FC, useRef, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { canada } from "../../lib/map/canada";
import { Three } from "../../lib/map/three";
import { Geocoder } from "../../lib/map/geocoder";

import Map, {
  Source,
  NavigationControl,
  GeolocateControl,
  ViewStateChangeEvent,
  Marker,
} from "react-map-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

export default function MapSection() {
  const mapRef: any = useRef();

  const places = canada.provinces.ON.cities.Ottawa.places;
  // const [three, setThree] = useState(Three(places.Carleton_University));
  const three = Three(places.Carleton_University);

  const geocoderControl = Geocoder();

  // Get shared position
  // const currentUrl: string = window.location.href;
  // const currentUrl = "http://localhost:3000";
  // const url = new URL(currentUrl);

  // const [viewState, setViewState] = useState({
  //   zoom: url.searchParams.get("zoom")
  //     ? Number(url.searchParams.get("zoom"))
  //     : 16,
  //   bearing: url.searchParams.get("bearing")
  //     ? Number(url.searchParams.get("bearing"))
  //     : 0,
  //   pitch: url.searchParams.get("pitch")
  //     ? Number(url.searchParams.get("pitch"))
  //     : 85,
  //   longitude: url.searchParams.get("lng")
  //     ? Number(url.searchParams.get("lng"))
  //     : -75.69435,
  //   latitude: url.searchParams.get("lat")
  //     ? Number(url.searchParams.get("lat"))
  //     : 45.38435,
  // });

  return (
    <section id="map" className="">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="maplibregl-map -mx-4 flex flex-wrap items-center">
            <Map
              mapLib={maplibregl}
              // {...viewState}
              initialViewState={{
                latitude: 45.38435,
                longitude: -75.69435,
                zoom: 12,
              }}
              // onMove={onMoveChange}
              ref={mapRef}
              onLoad={(map) => {
                if (geocoderControl) {
                  map.target.addControl(geocoderControl);
                }
                if (three) map.target.addLayer(three);
              }}
              // maxPitch={60}
              minZoom={3}
              maxBounds={[
                [-141.1, 41.5],
                [-52, 83.4],
              ]}
              mapStyle={`./assets/map/satellite.json`}
              style={{ width: "100vw", height: "100vh" }}
              terrain={{ source: "terrainSource", exaggeration: 0.05 }}
            >
              {/* <Map
              initialViewState={{
                latitude: 45.3768525,
                longitude: -75.694243,
                zoom: 12,
              }}
              style={{ width: 1024, height: 600 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            > */}
              {/* <Marker
                longitude={-75.694243}
                latitude={45.3768525}
                color="red"
              /> */}
              <Source
                id="terrainSource"
                type="raster-dem"
                url="./assets/map/terrain.json"
                tileSize={256}
              ></Source>
              <NavigationControl position="bottom-left" visualizePitch={true} />
              <GeolocateControl position="bottom-left" />
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
}
