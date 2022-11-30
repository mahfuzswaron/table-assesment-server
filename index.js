const express = require("express");
const app = express();
const PORT = 5000;
const hello = require("./api/Hello");

app.use("/api/hello", hello);



app.listen(PORT, () => {
    console.log(`Hello sadia's heart, this app is running on port ${PORT} `)
})