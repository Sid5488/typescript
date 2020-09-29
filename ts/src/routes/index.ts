import { Router } from 'express';
import CustomerRoute from './CustomerRoute';

class Routes{
    public routes:Router; 

    constructor() {
        this.routes = Router()

        this.getPrivateRoutes()
    }

    private getPrivateRoutes():void {
        this.routes.use("/customers", CustomerRoute)
    }
}

export default new Routes().routes