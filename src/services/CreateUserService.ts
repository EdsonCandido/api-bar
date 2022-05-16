import {hash} from 'bcryptjs';
import db from "../database/connection";

interface IRequest {
    document: string;
    password: string;
    name: string;
    phone: string;
    photo: string;
    day_price?: number;
    cod_prodile: number;
    active: number;
}

class CreateUserService {
    public async execute({
        document,
        password,
        name,
        phone,
        photo,
        day_price,
        cod_prodile,
        active,
    }: IRequest): Promise<any> {

        if(!name || !document || !password ){
            throw new Error("Dados incompletos");
        }

        const documentExists = await db('users').where({document});
        
        if(documentExists){
            throw new Error('CPF já cadastrado');
        }

        const hashedPassword = await hash(password, 8);

        const newUser = await db("users").insert({
            document,
            password : hashedPassword,
            name,
            phone,
            photo,
            day_price,
            cod_prodile,
            active,
        });

        return newUser;
    }
}

export default CreateUserService;
