const express = require("express");
const cors = require("cors");
const fs = require("fs");
const readline = require("readline");

const rstream = fs.createReadStream(
  __dirname + "/API/1-premierleague.txt",
  "utf8"
);
let weekAPI = {
  txt: "",
  count: [0, 0],
  name: "Matchday 28"
};
let fixture = {
  txt: "",
  count: [0, 0],
  name: "Matchday 29"
};

const wStreamWeek = fs.createWriteStream(__dirname + "/API/week.txt", "utf8");
const wStreamFixture = fs.createWriteStream(
  __dirname + "/API/fixture.txt",
  "utf8"
);
rl = readline.createInterface({
  input: rstream,
  terminal: false
});
rl.on("line", line => {
  read(line, fixture);
  read(line, weekAPI);
});
rl.on("close", () => {
  weekAPI.txt += "]}}]";
  fixture.txt += "]}}]";
  wStreamWeek.write(weekAPI.txt);
  wStreamFixture.write(fixture.txt);
});
function read(line, week) {
  if (week.txt.includes("Matchday") && week.count[0] < 12) {
    if (line.includes("[")) {
      if (line.substring(1, 11).includes("]")) {
        line = line.substring(1, 10);
      } else {
        line = line.substring(1, 11);
      }
      if (week.count[1] > 0) {
        week.txt += '],"b":[';
      } else {
        week.txt += '"a":[';
      }
      week.count[1]++;
    } else {
      let arr = line.split(" ");
      arr = arr.filter(function(str) {
        return /\S/.test(str);
      });
      if (week.txt[week.txt.length - 1] === "}") {
        week.txt += ',{ "Home": "';
      } else {
        week.txt += '{ "Home": "';
      }
      for (i = 0; i < arr.length; i++) {
        if (/\d/.test(arr[i]) || arr[i].includes("-")) {
          break;
        } else {
          week.txt += arr[i];
        }
      }
      week.txt += '", "Score": "' + arr[i] + '", "Away": "';
      i++;
      for (; i < arr.length; i++) {
        if (i == arr.length - 1) {
          week.txt += arr[i];
        } else {
          week.txt += arr[i];
        }
      }
      week.txt += '"}';
    }
    week.count[0]++;
  } else if (line === week.name) {
    week.txt += '[{"Matchday":{';
  }
}

const app = express();
app.use(cors());

app.use("/static", express.static(__dirname + "/react/src/Images"));
app.use("/api", express.static(__dirname + "/API"));

app.get("/api/Clubs.json", (req, res) => {
  res.json(Clubs);
});

const port = 5000;

app.listen(port, () => console.log("server has started on port:" + port));
