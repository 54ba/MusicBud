const router = require("express").Router();
const budsConroller = require("../controllers/buds");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

module.exports = () => {
  router.get("/get-buds-by-artist", isLoggedIn, budsConroller.getBudsByArtists);
  router.get("/get-buds-by-track", isLoggedIn, budsConroller.getBudsByTracks);
  router.get(
    "/get-buds-by-artist-and-track",
    isLoggedIn,
    budsConroller.getBudsByArtistsAndTracks
  );
  router.stack.forEach((l) => console.log(l.route.path, l.route.methods));

  return router;
};
