const userProfileController = require("../controllers/userProfile");
const router = require("express").Router();
const { catchAsync } = require("../middlewares/catchAsync");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

module.exports = () => {
  router.get("/login", userProfileController.login);
  router.get("/refresh-token", userProfileController.refreshToken);

  router.get("/callback", userProfileController.callback);

  router.post(
    "/update-my-likes",
    isLoggedIn,
    userProfileController.updateUserProfile
  );

  router.post(
    "/set-my-bio",
    isLoggedIn,
    userProfileController.setAndUpdateUserBio
  );

  router.get(
    "/get-my-profile",
    isLoggedIn,
    userProfileController.getUserProfile
  );
  router.get(
    "/get-bud-profile",
    isLoggedIn,
    userProfileController.getBudProfile
  );

  router.stack.forEach((l) => console.log(l.route.path, l.route.methods));

  return router;
};
