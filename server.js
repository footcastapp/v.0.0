const express = require("express");
const cors = require("cors");
const fs = require("fs");
const readline = require("readline");
const rstream = fs.createReadStream(
  __dirname + "/API/1-premierleague.txt",
  "utf8"
);

const wstream = fs.createWriteStream(__dirname + "/API/week.txt", "utf8");
rl = readline.createInterface({
  input: rstream,
  terminal: false
});
let txt = "";
let start = false;
let count = 0;
let count2 = 0;
let i = 0;
rl.on("line", line => {
  if (start === true) {
    if (!(count === 12)) {
      if (line.includes("[")) {
        line = line.substring(1, 11);
        if (count2 > 0) {
          txt += '],"' + line + '":[';
        } else {
          txt += '"' + line + '":[';
        }
        count2++;
      } else {
        let arr = line.split(" ");
        arr = arr.filter(function(str) {
          return /\S/.test(str);
        });
        if (txt[txt.length - 1] === "[") {
          txt += '{ "Home": "';
        } else {
          txt += ',{ "Home": "';
        }
        for (i = 0; i < arr.length; i++) {
          if (/\d/.test(arr[i])) {
            break;
          } else {
            txt += arr[i];
          }
        }
        txt += '"';
        txt += ', "Score": ';
        txt += '"' + arr[i] + '"';
        i++;
        txt += ', "Away": "';
        for (; i < arr.length; i++) {
          if (i == arr.length - 1) {
            txt += arr[i];
          } else {
            txt += arr[i] + " ";
          }
        }
        txt += '"}';
      }
      count++;
    }
  }
  if (line === "Matchday 28") {
    txt += '[{"' + line + '":{';
    start = true;
  }
});
rl.on("close", () => {
  txt += "]}}]";
  wstream.write(txt);
});
const app = express();
app.use(cors());

app.use("/static", express.static(__dirname + "/react/src/Images"));
app.use("/api", express.static(__dirname + "/API"));

app.get("/api/Clubs.json", (req, res) => {
  res.json(Clubs);
});

const port = 5000;

app.listen(port, () => console.log("server has started on port:" + port));
