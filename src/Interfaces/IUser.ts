export interface IUser{
    id?: number;
    document:string;
    password?:string;
    name:string;
    phone:string;
    photo: string;
    day_price?: number;
    cod_profile: number;
    cod_company: number;
    active: boolean;
    created_at?: Date;
    updated_at?: Date
}