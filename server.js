// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

//API end points

app.get("/api/v1/", (req, res) => {
  res.json({
    message: "Welcome to API",
  });
});

app.use("/", (req, res) => {
  //   const person = {
  //     name: "Krishna",
  //     lastName: "Shrestha",
  //   };
  res.json({ message: "You have reached to the api of not to do Application" });
  //   res.json(person);
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running http://localhost:${PORT}`);
});
