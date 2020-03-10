

const characters = require("../data/characters");

module.exports = function(app) {
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

}