import express, {Application} from 'express';

import routes from "./routes";

class App {
    public server:Application;

    constructor(){
        this.server = express()
        this.routes()
    }
}

export default new App().server