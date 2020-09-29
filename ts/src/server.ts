import express, { Application } from 'express';
import routes from './routes'

class App {
    public server:Application;

    constructor() {
        this.server = express();
        this.routes()
    }
    public routes():void {
        this.server.use(routes)
    }
}

export default new App().server