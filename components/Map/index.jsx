"use client";

import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

export default function MapSection() {
  return (
    <section id="map" className="">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <Map
              initialViewState={{
                latitude: 45.3768525,
                longitude: -75.694243,
                zoom: 12,
              }}
              style={{ width: 1024, height: 600 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={
                "pk.eyJ1Ijoibmljby1hcmVsbGFubyIsImEiOiJjbGRkNzV1aDcwMHE5M3ZtcTA4OHZvdnZ2In0.62n_DqnBfOYRz2lNakP8IA"
              }
            >
              <Marker
                longitude={-75.694243}
                latitude={45.3768525}
                color="red"
              />
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
}
