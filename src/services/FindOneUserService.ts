import db from "../database/connection";
import { IUser } from "../Interfaces/IUser";

interface IRequest{
    id?: number;
    document?: string;
}

export class FindOneUserServices {
    public async execeute({id, document}:IRequest): Promise<IUser> {

        let users = [];
        if(!document){
             users = await db("users").select(
                "id",
                "document",
                "name",
                "phone",
                "photo",
                "photo",
                "cod_profile",
                "cod_company",
                "active",
                "created_at",
                "updated_at"
            ).where({id})

            users = users[0];
        }

        if(!id){
            users = await db("users").select(
               "id",
               "document",
               "name",
               "phone",
               "photo",
               "photo",
               "cod_profile",
               "cod_company",
               "active",
               "created_at",
               "updated_at"
           ).where({document})
           users = users[0];
       }
      
        return users;
    }
}

