import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from express" });
});

app.listen(8000, () => {
  console.log("Server is up & running");
});
