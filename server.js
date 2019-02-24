const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/static", express.static(__dirname + "/react/src/Images"));

app.get("/api/clubs", (req, res) => {
  const clubs = [
    {
      Club: "Arsenal",
      Stadium: "Emirites",
      img: "/static/ClubLogos/Arsenal.png"
    },
    {
      Club: "Bournemouth",
      Stadium: "Dean Court",
      img: "/static/ClubLogos/AFC_Bournemouth.png"
    },
    {
      Club: "Brighton and Hove Albion",
      Stadium: "Falmer",
      img: "/static/ClubLogos/Brighton.png"
    },
    {
      Club: "Burnley",
      Stadium: "Turf Moor",
      img: "/static/ClubLogos//Burnley.png"
    },
    {
      Club: "Cardiff City",
      Stadium: "Cardiff Arms Park",
      img: "/static/ClubLogos//Cardiff.png"
    },
    {
      Club: "Chelsea",
      Stadium: "Staford Bridge",
      img: "/static/ClubLogos//Chelsea.png"
    },
    {
      Club: "Crystal Palace",
      Stadium: "Selhurst Park",
      img: "/static/ClubLogos//CrystalPalace.png"
    },
    {
      Club: "Everton",
      Stadium: "Goodison Park",
      img: "/static/ClubLogos//Everton.png"
    },
    {
      Club: "Fulham",
      Stadium: "Craven Cottage",
      img: "/static/ClubLogos//Fulham.png"
    },
    {
      Club: "Huddersfield Town",
      Stadium: "John Smith's",
      img: "/static/ClubLogos//HuddersField.png"
    },
    {
      Club: "Leicester City",
      Stadium: "King Power",
      img: "/static/ClubLogos//LeicesterCity.png"
    },
    {
      Club: "Liverpool",
      Stadium: "Anfield",
      img: "/static/ClubLogos//Liverpool.png"
    },
    {
      Club: "Manchester City",
      Stadium: "Etihad",
      img: "/static/ClubLogos//ManchesterCity.png"
    },
    {
      Club: "Manchester United",
      Stadium: "Old Trafford",
      img: "/static/ClubLogos//ManchesterUnited.png"
    },
    {
      Club: "NewCastle United",
      Stadium: "st James",
      img: "/static/ClubLogos//NewCastleUnited.png"
    },
    {
      Club: "Southampton",
      Stadium: "St Mary's",
      img: "/static/ClubLogos//Southampton.png"
    },
    {
      Club: "Tottenham Hotspur",
      Stadium: "Wembley",
      img: "/static/ClubLogos//Tottenham.png"
    },
    {
      Club: "Watfoord",
      Stadium: "Vicarage Road",
      img: "/static/ClubLogos//Watford.png"
    },
    {
      Club: "West Ham United",
      Stadium: "London",
      img: "/static/ClubLogos//WestHam.png"
    },
    {
      Club: "Wolverthampton Wanderers",
      Stadium: "Molineux",
      img: "/static/ClubLogos//Wolverthampton.png"
    }
  ];
  res.json(clubs);
});

const port = 5000;

app.listen(port, () => console.log("server has started on port:" + port));
