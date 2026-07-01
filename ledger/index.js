const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>CI/CD nothing updated</title>
            <style>
                body{
                    font-family: Arial;
                    text-align:center;
                    margin-top:100px;
                    background:#f4f4f4;
                }
                h1{
                    color:#2c3e50;
                }
                p{
                    font-size:22px;
                }
            </style>
        </head>

        <body>
            <h1>🚀 CI/CD Automation in the House</h1>
            <p>Application Version : <b>Version 1.0</b></p>
            <p>If you can see this page, deployment was successful. Hurrey you have done</p>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
