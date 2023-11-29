
import exp from "constants";
import {Request, Response} from "express"
import UserModel from "../model/UserModel"

export class UserController{
    public async index(req: Request, res: Response): Promise<Response>{
        let user = await UserModel.find()
        return res.json(user)
    }

    public async Create(req: Request, res: Response): Promise<Response>{
        const {nome_usuario, comentario} = req.body
        let user = await UserModel.create(req.body)
        return res.json(user)
    }

}

export default UserController
