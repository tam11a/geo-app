import { useEffect, useState } from "react";
import theme from "../styles/theme/theme";
import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from "react-map-gl";
import MarkerPin from "./MarkerPin";
import BottomDrawer from "./BottomDrawer";
import { DEFAULT_VIEWPORT } from "../utilities/constants";
/*
import io from "Socket.IO-client";
let socket;
*/
const MapBoxHere = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT);
  const [resList, setResList] = useState([]);

  const [geoList, setGeoList] = useState({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [],
        },
      },
    ],
  });

  useEffect(async () => {
    const res = await fetch("/api/dummy");
    const data = await res.json();
    setResList(data.geolist);
  }, []);

  useEffect(() => {
    // if(!!!resList)
    //console.log(resList);
    if (!!!resList.length) return;

    let coorList = [];
    for (const i in resList) {
      coorList.push(resList[i].coordinates);
    }
    setCoordinates(coorList);
  }, [resList]);

  useEffect(() => {
    if (!!!coordinates.length) return;
    // console.log(coordinates);
    setViewport({
      ...viewport,
      longitude: coordinates[coordinates.length - 1][0],
      latitude: coordinates[coordinates.length - 1][1],
    });
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
  /*
  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("update-input", (msg) => {
      console.log(msg);
    });
  };*/

  return (
    coordinates.length && (
      <ReactMapGL
        initialViewState={{
          ...viewport,
          longitude: coordinates[coordinates.length - 1][0],
          latitude: coordinates[coordinates.length - 1][1],
        }}
        style={{ position: "absolute", height: "100%", width: "100%" }}
        mapStyle="mapbox://styles/tam11a/ckzveakco00uw14rw8yzx9au2"
        mapboxAccessToken="pk.eyJ1IjoidGFtMTFhIiwiYSI6ImNrenEzOTQxeTA1MDQydW85enRvb2h5MmsifQ.neUR9ekfXCBsAYwGeg_3EA"
        attributionControl={false}
        // {...viewport}
        // viewState={viewport}
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
        {resList?.map(
          (res, index) => res && <AddMarker data={res} key={index} />
        )}
        <NavigationControl />
      </ReactMapGL>
    )
  );
};

const AddMarker = ({ data }) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Marker
        longitude={data.coordinates[0]}
        latitude={data.coordinates[1]}
        color={theme.palette.primary.main}
      >
        <MarkerPin onClick={() => setDrawer(true)} />
      </Marker>
      <BottomDrawer drawer={drawer} setDrawer={setDrawer} data={data} />
    </>
  );
};

export default MapBoxHere;
