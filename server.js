const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const characters = [
  {
    routeName: 'yoda',
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: 'darthmaul',
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: 'obiwankenobi',
    name: "Obi Wan Kenobi",
    role: "Jedi",
    age: 55,
    forcePoints: 1000
  }
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/characters/:character", (req, res) => {
  const character = req.params.character;
  console.log(character);

  let found;

  characters.forEach(char => {
    if(character === char.routeName) {
      found = char;
    }
  });

  res.json(found || { success: false });
});

app.post("/api/characters", (req, res) => {
  const newCharacter = req.body;

  newCharacter.routeName = req.body.name.split(" ").join("").toLowerCase();

  characters.push(newCharacter);

  res.json(newCharacter);
});

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});
