const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cros = require("cors");

const connectmongo = require("../API/server/database/connectionDB");

const app = express();
app.use(cros());

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8000;

// parser request to bady-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", require("./server/routes/registration"));

// MongoDb connection
connectmongo();

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})