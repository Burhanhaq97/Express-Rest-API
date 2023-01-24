const express = require("express");
const app = express();

require("./db/connection");
const router = require("./routers/apiRouter");

app.use(express.json());
app.use(router);

app.listen(80, () => console.log(" express is listening on prot 80 "));
