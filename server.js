const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/clubs", (req, res) => {
  const clubs = [
    { Club: "AFC Bournemouth", Stadium: "Dean Court" },
    { Club: "Arsenal", Stadium: "Emirites" },
    { Club: "Brighton", Stadium: "Falmer" },
    { Club: "Burnley", Stadium: "Turf Moor" },
    { Club: "Cardiff", Stadium: "Cardiff Arms Park" },
    { Club: "Chelsea", Stadium: "Staford Bridge" },
    { Club: "Crystal Palace", Stadium: "Selhurst Park" },
    { Club: "Everton", Stadium: "Goodison Park" },
    { Club: "Fulham", Stadium: "Craven Cottage" },
    { Club: "Huddersfield Town", Stadium: "John Smith's" },
    { Club: "Leicester City", Stadium: "King Power" },
    { Club: "Liverpool", Stadium: "Anfield" },
    { Club: "Manchester City", Stadium: "Etihad" },
    { Club: "Manchester United", Stadium: "Old Trafford" },
    { Club: "Southampton", Stadium: "St Mary's" },
    { Club: "Tottenham Hotspur", Stadium: "Wembley" },
    { Club: "Watfoord", Stadium: "Vicarage Road" },
    { Club: "West Ham United", Stadium: "London" },
    { Club: "Wolverthampton Wanderers", Stadium: "Molineux" }
  ];
  res.json(clubs);
});

const port = 5000;

app.listen(port, () => console.log("server has started on port:" + port));
