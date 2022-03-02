// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getDB, pushDB } from "./db";
import io from "socket.io-client";
let socket;

/*socket = io("http://websocket-any.herokuapp.com/");

socket.on("connect", () => {
  console.log("connected");
});*/

export default async function handler(req, res) {
  //console.log(req.query);
  if (req.query.lng && req.query.lat && req.query.eval) {
    const data = {
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      evalution: req.query.eval,
    };
    pushDB(data);
    /*socket.emit("geoapp", {
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      evalution: parseFloat(req.query.eval),
      ts: Date.now(),
    });*/
    res.status(200).json({ status: "success", ts: Date.now() });
  } else {
    res.status(200).json({
      geolist: getDB(),
    });
  }
}

const dummyData = [
  {
    coordinates: [90.38868679397233, 23.758265540272912],
    evalution: 0,
    ts: 1645556227363,
  },
  {
    coordinates: [90.3878326262431, 23.758229996981562],
    evalution: 12,
    ts: 1645558274434,
  },
  {
    coordinates: [90.38741151988413, 23.758202993764744],
    evalution: 11,
    ts: 1645558284434,
  },
  {
    coordinates: [90.38589875392238, 23.758090068141392],
    evalution: 4,
    ts: 1645558294434,
  },
  {
    coordinates: [90.38446913597605, 23.757982052317537],
    evalution: 5,
    ts: 1645556227363,
  },
  {
    coordinates: [90.38446645390987, 23.757432152002014],
    evalution: 12,
    ts: 1645558274434,
  },
  {
    coordinates: [90.38445036094726, 23.756965716910496],
    evalution: 13,
    ts: 1645556227363,
  },
  {
    coordinates: [90.38399170280748, 23.756850336043026],
    evalution: 21,
    ts: 1645558274434,
  },
  {
    coordinates: [90.38383076989581, 23.756715314847405],
    evalution: 21,
    ts: 1645556227363,
  },
];
