const express = require("express");
const dotenv = require("dotenv");

const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
require("./auth");
const db = require("./db");
const indexRoutes = require("./routes/index.routes");
const authRoutes = require("./routes/auth.routes");
const comicsRoutes = require("./routes/comics.routes");

db.connect();
dotenv.config();
const PORT = process.env.PORT || 3200;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
    },
    store: MongoStore.create({ mongoUrl: db.DB_URL }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/comics", comicsRoutes);

app.use("*", (req, res, next) => {
  const error = new Error("Path not found");

  return res.status(404).render("error", {
    message: error.message,
    status: 404,
  });
});

app.use((error, req, res, next) => {
  console.log(error);

  return res.status(error.status || 500).render("error", {
    message: error.message || "Unexpected error, try again",
    status: error.status || 500,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
