import express, { Router } from 'express';
import CustomerResource from '../resources/CustomerResource'

class CustomerRoute{
    public routes:Router

    constructor(){
        this.routes = Router();

        this.getPublicRoutes()
    }

    public getPublicRoutes():void {
        this.routes.get("/customers", CustomerResource.index)
    }
}
export default new CustomerRoute().routes