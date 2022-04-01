const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(400, () => console.log("sever running on port 4000"));

app.get("/weather/: temperature", (req, res) => {
    const phrase = '<h3> It was ${req.param.temprature} today</h3>';
    res.status(200).send(phrase);
});