import express from "express";
import { appServer } from "./setupServer";
import initDatabase from "./setupDatabase";
class Application {
    public init() : void {
        initDatabase();
        const app = express();
        const server = new appServer(app);
        server.start();
    }
}

const application = new Application();
application.init();