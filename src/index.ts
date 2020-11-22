import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import api from "./api/app";
import db from "./api/models";

const app = express();
const { PORT = 3000 } = process.env;

//options for cors midddleware
const corsOpts: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: false,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:*",
  preflightContinue: false,
};
app.use(cors(corsOpts));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(db.dbUrl);
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world!",
  });
});

app.use("/api/v1", api);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log("server started at http://localhost:" + PORT);
  });
}

export default app;
