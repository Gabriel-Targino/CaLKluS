const fs = require("fs");
const express = require("express");
const { dbfile } = require("./db");
const Migration = require("./migrations");
const routes = require('./routers');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
(async () => {
  if (!fs.existsSync(dbfile)) {
    await Migration.up();  
  }
})();

const fs = require("fs");
const express = require("express");
const routes = require("./routes");
const Migration = require("./migrations");
const { dbFile } = require("./db");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const cors = require('cors');
const Auth = require('./middleware/auth');


const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: new SQLiteStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

app.listen(3000, () => {
  console.log("app is running");
}); 