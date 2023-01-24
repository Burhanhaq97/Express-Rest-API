const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/StudentDatabase")
  .then(() => console.log(" connected to mongodb"))
  .catch((error) => console.log(error));
