import { useEffect, useState } from "react";
import theme from "../styles/theme/theme";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1IjoidGFtMTFhIiwiYSI6ImNrenEzOTQxeTA1MDQydW85enRvb2h5MmsifQ.neUR9ekfXCBsAYwGeg_3EA";

const MapBoxHere = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [location, setLocation] = useState([
    90.38158421652125, 23.753093703175455,
  ]);

  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/tam11a/ckzveakco00uw14rw8yzx9au2",
    });

    const marker = new mapboxgl.Marker({
      color: theme.palette.primary.main,
      // draggable: true,
    })
      .setLngLat(location)
      .addTo(map);

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, "top-right");
  }, [location]);

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
