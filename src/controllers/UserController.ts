import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import { FindAllUsersServices } from "../services/FindAllUsersService";
import { FindOneUserServices } from "../services/FindOneUserService";

class UserController {
    async index(req: Request, res: Response): Promise<Response> {
        try {
            const userService = new FindAllUsersServices();

            const users = userService.execeute();

            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async find(req: Request, res: Response): Promise<Response> {
        const { id, document } = req.body;

        const userService = new FindOneUserServices();

        try {
            const user = userService.execeute({ id, document });

            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const {
                document,
                password,
                name,
                phone,
                photo,
                day_price,
                cod_prodile,
                active,
            } = req.body;
            const userService = new CreateUserService();

            const user = await userService.execute({
                document,
                password,
                name,
                phone,
                photo,
                day_price,
                cod_prodile,
                active,
            });
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async update(req: Request, res: Response) {}
    async disable(req: Request, res: Response) {}
}

export { UserController };
