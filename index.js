import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import sql from "mssql/msnodesqlv8.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import authRouter from "./routes/authRoute.js";
import courseRoute from "./routes/courseRoute.js";
import courseRegdRoute from "./routes/courseRegdRoute.js";
import usersRoute from "./routes/usersRoute.js";
import trainerRoute from "./routes/trainerRoute.js";
import trainerProfileRoute from "./routes/trainerProfileRoute.js";
import traineeProfileRoute from "./routes/traineeProfileRoute.js";
import trainerEarningsRoute from "./routes/trainerEarningRoute.js";
import zoomRoute from "./routes/zoomRoute.js";
import config from "./config/dbconfig.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/hello-world", async (req, res) => {
  const date = new Date().toLocaleDateString();
  const time = new Date().getTime();
  // res.send(
  //   `The server is working fine on this date: ${date} and time: ${time}`
  // );
  sql.connect(config, function (err) {
    if (err) {
      res.json(err.message);
      console.log(err);
    } else {
      // create request object
      var request = new sql.Request();
      // query to the database
      request.query("select * from users_dtls", function (err, result) {
        if (err) {
          res.send(err.message);
        } else {
          res.send(result.recordset);
          console.log(result.recordset);
        }
      });
    }
  });
});

app.use("/api/auth", authRouter);
app.use("/api/courses/new", courseRegdRoute);
app.use("/api/courses", courseRoute);
app.use("/api/trainee", traineeProfileRoute);
app.use("/api/earnings", trainerEarningsRoute);
app.use("/api/trainer/profile", trainerProfileRoute);
app.use("/api/trainer", trainerRoute);
app.use("/api/users", usersRoute);
app.use("/api/zoom", zoomRoute);
app.listen(port, (req, res) => {
  console.log("listening on port " + port);
});
