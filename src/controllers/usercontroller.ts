import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController{

    constructor(){}

    async createUser(req: Request, res: Response){
        const dados: Prisma.UserCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const novousuario = await UserService.createUser(dados)
            res.status(200).json({
                status: 'ok',
                novousuario: novousuario
            });
        }else{
            res.status(400).json({
                status: 'erro',
                message: ' Inserir os dados no corpo'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = UserService.listUsers();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UserController;