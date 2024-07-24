const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const authRoute = require("./routes/auth");
const merchantRoute = require("./routes/merchant");
const customerRoute = require("./routes/customer");

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/merchant", merchantRoute);
app.use("/api/customer", customerRoute);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
