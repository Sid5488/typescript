
import { Router } from "express"

import customerResource from ""

class UsersRoute {
    public routes:Router

    constructor() {
        this.routes = Router();

    }
}
export default new UsersRoute().routes