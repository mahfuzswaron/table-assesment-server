const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const hello = require("./api/Hello");

app.use("/api/hello", hello);



app.listen(PORT, () => {
    console.log(`Hello, this app is running on port ${PORT} `)
})