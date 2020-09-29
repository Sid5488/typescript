import { Request, Response } from 'express';
import CustomerRepository from '../repositories/CustomerRepository';

class CustomerResource{
    public async index() {
        CustomerRepository.find();
    }

}

export default new CustomerResource();