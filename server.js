const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/static", express.static(__dirname + "/react/src/Images"));
app.use("/api", express.static(__dirname + "/API"));

app.get("/api/Clubs.json", (req, res) => {
  res.json(Clubs);
});

const port = 5000;

app.listen(port, () => console.log("server has started on port:" + port));
