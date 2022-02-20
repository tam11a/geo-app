import { useEffect, useState } from "react";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1IjoidGFtMTFhIiwiYSI6ImNrenEzOTQxeTA1MDQydW85enRvb2h5MmsifQ.neUR9ekfXCBsAYwGeg_3EA";

const MapBoxHere = () => {
  const [pageIsMounted, setPageIsMounted] = useState(false);

  useEffect(() => {
    setPageIsMounted(true);
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/tam11a/ckzveakco00uw14rw8yzx9au2",
    });
  }, []);

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
