import { graphQLResolver } from "../graphql/resolver/index";
import graphQLSchema from "../graphql/schema/index";
import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import morgan from "morgan";

export class App {
  app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.listen();
  }

  private settings() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }

  private middlewares() {
    this.app.use(bodyParser.json());
    this.cores();
    this.verifyAuth();
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private cores() {
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      if (req.method === "OPTIONS") {
        return res.sendStatus(200);
      }
      next();
    });
  }

  private verifyAuth() {
    this.app.use((req, res, next) => {
      const authHeader = req.get("Authorization");
      if (!authHeader) {
        req.isAuth = false;
        return next();
      }
      const token = authHeader.split(" ")[1];
      if (!token || token === "") {
        req.isAuth = false;
        return next();
      }
      let decodedToken: any;
      try {
        decodedToken = jwt.verify(token, "somethingsupersecret");
      } catch (error) {
        req.isAuth = false;
        return next();
      }
      if (!decodedToken) {
        req.isAuth = false;
        return next();
      }
      req.isAuth = true;
      req.userId = decodedToken.userId;
      next();
    });
  }

  private routes() {
    this.app.use(
      "/graphql",
      graphqlHTTP({
        schema: graphQLSchema,
        rootValue: graphQLResolver,
        graphiql: true,
      })
    );
  }

  public async listen(): Promise<void> {
    this.app.listen(this.app.get("port"));
    console.log(`Server on port ${this.app.get("port")}`);
  }
}
