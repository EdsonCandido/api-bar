import { Response, Request } from "express";

export class ProductController{
    async index(req: Request, res: Response): Promise<Response>{}
    async find(req: Request, res: Response): Promise<Response>{}
    async create(req: Request, res: Response): Promise<Response>{}
    async update(req: Request, res: Response): Promise<Response>{}
    async storeUpdate(req: Request, res: Response): Promise<Response>{}
    async disable(req: Request, res: Response): Promise<Response>{}
}