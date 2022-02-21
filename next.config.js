const withPWA = require("next-pwa");

module.exports = withPWA({
  // reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  env: {
    MAPBOX_KEY:
      "pk.eyJ1IjoidGFtMTFhIiwiYSI6ImNrenEzOTQxeTA1MDQydW85enRvb2h5MmsifQ.neUR9ekfXCBsAYwGeg_3EA",
  },
});
