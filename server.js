const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// connecting to db
connectDB();

app.use(cors());

// middlewares
app.use(express.json());

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
