const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Import Routers
const roleRouter = require("./routes/role");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const categoryRouter =require("./routes/category");
// Routes Middleware
app.use("/roles",roleRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);
app.use("/catogory",categoryRouter);
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});








