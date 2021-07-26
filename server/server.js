const express = require("express");
const app = express();
const port = 8000;
const db_name = "not-netflix-api";

const cors = require("cors");
const mongoose = require("mongoose");
const cookies = require("cookie-parser");


app.use(express.json(), express.urlencoded({extended: true}), cors({
    credentials: true, origin: "http://localhost:3000"}), cookies());


require("./server/routes/movie.routes")(app);
require("./server/routes/users.routes")(app);

require("./server/config/mongoose.config");




app.listen(port, () => console.log(`running on port ${port} is a new way I be`));