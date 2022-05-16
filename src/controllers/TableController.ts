import { Response, Request } from "express";

export class TableController{
    async index(req: Request, res: Response): Promise<Response>{}
    async find(req: Request, res: Response): Promise<Response>{}
    async create(req: Request, res: Response): Promise<Response>{}
    async update(req: Request, res: Response): Promise<Response>{}
    async closeTable(req: Request, res: Response): Promise<Response>{}
    async getAllConsumption(req: Request, res: Response): Promise<Response>{}
}