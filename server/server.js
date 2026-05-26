const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let jobs = [];

app.get("/", (req, res) => {
  res.send("Maintenance API Running");
});

app.get("/jobs", (req, res) => {
  res.json(jobs);
});

app.post("/jobs", (req, res) => {
  jobs.push(req.body);

  res.json({
    message: "เพิ่มงานสำเร็จ",
  });
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
