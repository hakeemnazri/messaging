import express from "express";
import { appServer } from "./setupServer";
class Application {
    public init() : void {
        const app = express();
        const server = new appServer(app);
        server.start();
    }
}

const application = new Application();
application.init();