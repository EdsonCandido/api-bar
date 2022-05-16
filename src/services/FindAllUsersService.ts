import db from "../database/connection";
import { IUser } from "../Interfaces/IUser";

export class FindAllUsersServices {
    public async execeute(): Promise<IUser[]> {
        const users = await db("users").select(
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
        );

        return users;
    }
}

