import { useState, useEffect } from "react";

import maplibregl from "maplibre-gl";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";

export const Geocoder = () => {
  const [geocoder, setGeocoder] = useState(null);

  useEffect(() => {
    const _geocoder = {
      forwardGeocode: async (config) => {
        const features = [];
        try {
          let request = `https://nominatim.openstreetmap.org/search?q=
            ${config.query}
            &format=geojson&polygon_geojson=1&addressdetails=1`;
          const response = await fetch(request);
          const geojson = await response.json();
          for (let feature of geojson.features) {
            if (feature.properties.address.country === "Canada") {
              let center = [
                feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
                feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
              ];
              let point = {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: center,
                },
                place_name: feature.properties.display_name,
                properties: feature.properties,
                text: feature.properties.display_name,
                place_type: ["place"],
                center: center,
              };
              features.push(point);
            }
          }
        } catch (e) {
          console.error(`Failed to forwardGeocode with error: ${e}`);
        }

        // const featureHandler = async () => {
        //   const placeFeature = features[0];
        //   const placeText = placeFeature.text;
        //   const placeName = placeText.split(",")[0];
        //   const featureProvince = placeFeature.properties.address.state;
        //   const featureCity = placeFeature.properties.address.city;
        //   const featureMessage = `name: ${placeName}, province: ${featureProvince}, city: ${featureCity}`;
        //   console.log(featureMessage);
        // };

        // await featureHandler();

        return {
          features: features,
        };
      },
    };

    setGeocoder(_geocoder);
  }, []);

  const geocoderControl = new MaplibreGeocoder(geocoder, {
    countries: "ca",
    showResultsWhileTyping: true,
    showResultMarkers: false,
    maplibregl: maplibregl,
  });

  return geocoderControl;
};
