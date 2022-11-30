const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const hello = require("./api/Hello");

app.use("/api/hello", async (_, res) => {
    res.send({ "message": "hello world" })
});

app.use("/", async (_, res) => {
    res.send({ "message": "hi, this is running" })
})

app.listen(PORT, () => {
    console.log(`Hello, this app is running on port ${PORT} `)
})