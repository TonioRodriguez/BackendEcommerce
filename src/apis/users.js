const express = require("express");
const router = express.Router();
const UserModel = require("../models/users");
const UserService = require("../services/users");

const userService = new UserService(UserModel);

router.get("/me", async (req, res) => {
  const sessionUser = req.user;

  if (!sessionUser) {
    return res.status(403).send({
      message: "No tienes acceso"
    });
  }

  res.send({
    username: sessionUser.username,
    email: sessionUser.email
  });
});

router.post("/", async (req, res) => {
  console.log("req");
  const body = req.body;
  const user = await userService.create(body);

  res.status(201).send(user);
});

module.exports = router;
