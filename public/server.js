const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);

require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});
