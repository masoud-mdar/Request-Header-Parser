const express = require("express")
const path = require("path")
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
  res.send("Hello!")
})


app.get("/api/hello", (req, res) => {
  res.json({greeting: "Hello API"});
});

app.get("/whoami", function (req,res) {
  console.log(req.headers);
  let myIp = req.ip;
  let language = req.headers["accept-language"];
  let software = req.headers["user-agent"];
  res.json({"ipaddress": myIp, "language": language, "software": software});
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
})
