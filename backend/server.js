import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt-nodejs";

import userSchema from "./models/users";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/authAPI";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middle wares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

const authenticateUser = async (req, res, next) => {
  try {
    const accessToken = req.header("Authorization");
    const user = await User.findOne({ accessToken });
    if (!user) {
      throw "User not found";
    }
    req.user = user;
    next();
  } catch (err) {
    const errorMessage = "Please try logging in again";
    console.log(errorMessage);
    res.status(401).json({ error: errorMessage });
  }
};

// Sign-up
app.post("/users", async (req, res) => {
  try {
    const {
      name,
      lastName,
      address,
      postalCode,
      city,
      email,
      password,
    } = req.body;
    const user = await new User({
      name,
      lastName,
      address,
      postalCode,
      city,
      email,
      password,
    });
    await user.save();
    res.status(201).json({
      userId: user._id,
      name: user.name,
      lastName: user.lastName,
      address: user.address,
      postalCode: user.postalCode,
      city: user.city,
      email: user.email,
      accessToken: user.accessToken,
      likes: user.likes,
      message: `Signup success for ${user.name}`,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create user", errors: err.errors });
  }
});

// Login
app.post("/sessions", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      user.accessToken = crypto.randomBytes(128).toString("hex");
      const updatedUser = await user.save();

      res.status(200).json({
        userId: updatedUser._id,
        name: updatedUser.name,
        lastName: updatedUser.lastName,
        address: updatedUser.address,
        postalCode: updatedUser.postalCode,
        city: updatedUser.city,
        email: updatedUser.email,
        accessToken: updatedUser.accessToken,
        likes: updatedUser.likes,
      });
    } else {
      throw "User not found";
    }
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
});

// Logout
app.post("/users/logout", authenticateUser);
app.post("/users/logout", async (req, res) => {
  try {
    const user = req.user;
    user.accessToken = null;
    await user.save();
    res.status(200).json({ loggedOut: true });
  } catch (err) {
    res.status(400).json({ error: "Could not logout", err });
  }
});

// Likes
app.post("/users/:id/likes", authenticateUser);
app.post("/users/:id/likes", async (req, res) => {
  try {
    const user = req.user;
    if (user.likes.includes(req.body.likeId)) {
      user.likes = user.likes.filter((like) => like !== req.body.likeId);
      await user.save();
    } else {
      user.likes.push(req.body.likeId);
      await user.save();
    }
    res.status(200).json({ message: "Success", likes: user.likes });
  } catch (err) {
    res.status(400).json({ error: "Could not like", err });
  }
});

// Get user specific information
app.get("/users/:id/secret", authenticateUser);
app.get("/users/:id/secret", async (req, res) => {
  try {
    const userId = req.params.id;
    if (userId != req.user._id) {
      console.log(
        "Authenticated user does not have access to this secret.  It's someone else's!"
      );
      throw "Access denied";
    }
    const secretMessage = `This is a secret message for ${req.user.name}`;
    res.status(200).json({ secretMessage });
  } catch (err) {
    res.status(403).json({ error: "Access Denied" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
