import cyclones from "./_handlers/cyclones.js";
import externalFeed from "./_handlers/external-feed.js";
import flights from "./_handlers/flights.js";
import launches from "./_handlers/launches.js";
import meteo from "./_handlers/meteo.js";
import news from "./_handlers/news.js";
import ocean from "./_handlers/ocean.js";
import orbital from "./_handlers/orbital.js";
import radio from "./_handlers/radio.js";
import solarFlares from "./_handlers/solar-flares.js";
import translate from "./_handlers/translate.js";
import tsunami from "./_handlers/tsunami.js";
import warzones from "./_handlers/warzones.js";

const handlers = {
  cyclones,
  "external-feed": externalFeed,
  flights,
  launches,
  meteo,
  news,
  ocean,
  orbital,
  radio,
  "solar-flares": solarFlares,
  translate,
  tsunami,
  warzones,
};

export default function handler(req, res) {
  const route = req.query.route;
  const fn = handlers[route];
  if (!fn) {
    return res.status(404).json({ error: `Unknown route: ${route}` });
  }
  return fn(req, res);
}
