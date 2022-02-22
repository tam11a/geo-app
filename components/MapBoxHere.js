import { useEffect, useState } from "react";
import theme from "../styles/theme/theme";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1IjoidGFtMTFhIiwiYSI6ImNrenEzOTQxeTA1MDQydW85enRvb2h5MmsifQ.neUR9ekfXCBsAYwGeg_3EA";

const MapBoxHere = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [coordinates, setCoordinates] = useState([
    [-121.415061, 40.506229],
    [-121.354465, 40.488737],
    [-121.505184, 40.488084],
  ]);

  const [geoList, setGeoList] = useState([]);

  useEffect(() => {
    setGeoList([
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: coordinates,
        },
      },
    ]);
  }, [coordinates]);

  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/tam11a/ckzveakco00uw14rw8yzx9au2",
      center: coordinates[0],
      zoom: 12,
    });

    /*const marker = new mapboxgl.Marker({
      color: theme.palette.primary.main,
      // draggable: true,
    })
      .setLngLat(location)
      .addTo(map);*/

    /*const featureLayer = new mapboxgl.mapbox.featureLayer()
      .setGeoJSON(geoList)
      .addTo(map);*/

    map.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      "top-right"
    );
    map.once("load", () => {
      // start onload

      // add geojson
      map.addSource("tracks", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: geoList,
        },
      });

      map.addLayer({
        id: "route",
        type: "line",
        source: "tracks",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": theme.palette.primary.dark,
          "line-width": 2,
        },
      });

      for (const latlng of coordinates) {
        const marker = new mapboxgl.Marker({
          color: theme.palette.primary.main,
          // draggable: true,
          onClick: () => {
            alert("hello", latlng[0], latlng[1]);
          },
        })
          .setLngLat(latlng)
          .addTo(map);
      }
      // end of load
    });
  }, [geoList]);

  return (
    <div
      id="my-map"
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default MapBoxHere;
