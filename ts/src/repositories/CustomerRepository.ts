import { EntityRepository, Repository } from "typeorm";
import {Customer} from "../models/Customer";

@EntityRepository(Customer)
class CustomerRepository extends Repository<Customer> {}

export default new CustomerRepository();