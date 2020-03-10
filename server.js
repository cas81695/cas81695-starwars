const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

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
        routeName: 'obiwankenobi',
        name: "Obi Wan Kenobi",
        role: "Jedi Master",
        age: 55,
        forcePoints: 1800
    },
    {
        routeName: 'darthvader',
        name: "Darth Vader",
        role: "Sith Lord",
        age: 45,
        forcePoints: 1900
    },
    {
        routeName: 'lukeskywalker',
        name: "Luke Skywalker",
        role: "Jedi Knight",
        age: 22,
        forcePoints: 1950
    },
    {
        routeName: 'darthmaul',
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    }
];

app.get("/", (reg, res) => {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/", (reg, res) => {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
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

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});