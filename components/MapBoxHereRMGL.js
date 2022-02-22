import { useEffect, useState } from "react";
import theme from "../styles/theme/theme";
import Map, { Layer, Marker, Source } from "react-map-gl";
import MarkerPin from "./MarkerPin";

const MapBoxHere = () => {
  const [coordinates, setCoordinates] = useState([
    [-121.415061, 40.506229],
    [-121.354465, 40.488737],
    [-121.505184, 40.488084],
  ]);

  const [geoList, setGeoList] = useState([]);
  useEffect(() => {
    setGeoList({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: coordinates,
          },
        },
      ],
    });
  }, [coordinates]);

  return (
    <Map
      initialViewState={{
        longitude: coordinates[0][0],
        latitude: coordinates[0][1],
        zoom: 12,
      }}
      style={{ position: "absolute", height: "100%", width: "100%" }}
      mapStyle="mapbox://styles/tam11a/ckzveakco00uw14rw8yzx9au2"
      mapboxAccessToken="pk.eyJ1IjoidGFtMTFhIiwiYSI6ImNrenEzOTQxeTA1MDQydW85enRvb2h5MmsifQ.neUR9ekfXCBsAYwGeg_3EA"
    >
      <Source id="polylineLayer" type="geojson" data={geoList}>
        <Layer
          id="lineLayer"
          type="line"
          source="tracks"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": theme.palette.primary.light,
            "line-width": 0.5,
          }}
        />
      </Source>
      {coordinates?.map((coordinate, index) => (
        <AddMarker
          longitude={coordinate[0]}
          latitude={coordinate[1]}
          description={"Hello World"}
          key={index}
        />
      ))}
    </Map>
  );
};

const AddMarker = ({ longitude, latitude, description }) => {
  return (
    <>
      <Marker
        longitude={longitude}
        latitude={latitude}
        color={theme.palette.primary.main}
      >
        <MarkerPin
          onClick={() => {
            alert(description);
          }}
        />
      </Marker>
    </>
  );
};

export default MapBoxHere;
