import express from "express";
import { appServer } from "./setupServer";
import initDatabase from "./setupDatabase";
import { config } from "./config";
class Application {
    public init() : void {
        this.loadConfig();
        initDatabase();
        const app = express();
        const server = new appServer(app);
        server.start();
    }

    private loadConfig() : void{
        config.validateConfig();
    }
}

const application = new Application();
application.init();