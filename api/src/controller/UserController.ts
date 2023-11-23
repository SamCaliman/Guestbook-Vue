
import exp from "constants";
import {Request, Response} from "express"
import UserModel from "../model/UserModel"

export class UserController{
    public async index(req: Request, res: Response): Promise<Response>{
        /*const{Name, Message} = req.body;
        return res.json({Name, Message, date: new Date()});*/
        let user = await UserModel.find()
        return res.json(user)
    }

    public async findById(req: Request, res: Response): Promise<Response>{
        const {id} = req.params
        let user = await UserModel.findById(id)
        return res.json(user)
    }
    public async Create(req: Request, res: Response): Promise<Response>{
        const {nome_usuario, comentario} = req.body
        let user = await UserModel.create(req.body)
        return res.json(user)
    }

}

export default UserController
