const express = require("express");
require("dotenv").config();                 // Loads the environment variables in process.env
const UserRouter = require("./routes/user.routes");
const ProtectedRouter = require("./routes/protected.routes");
const RegisterRouter = require("./routes/register.routes")

const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.use("/api", ProtectedRouter);

app.listen(9090, () => console.log("App started at PORT : 9090"))