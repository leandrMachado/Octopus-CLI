const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(require("cors")({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.get("/", (req, res) => { 
    res.status(200).send(`
        <html>
        <head>
            <style>
                body {
                    font-family: monospace;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            </style>
        </head>
        <body>
            🍍
            <p>This is Érre API</p>
        </body>
        </html>
    `)
});

module.exports = app;