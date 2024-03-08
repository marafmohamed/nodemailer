const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { sendMail } = require("./Controller/MailController");
app.use(cors());
app.use(express.json());
app.post("/api/sendMail",sendMail)
  PORT = process.env.PORT || 4000;
  const server = app.listen(PORT, () => {
    console.log(
      "connected to the db and listening at port : ",
      process.env.PORT
    );
  });
