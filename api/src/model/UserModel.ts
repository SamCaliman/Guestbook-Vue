import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserModel = new Schema({
    nome_usuario: String,
    comentario: String,
},
{timestamps:true})

export default mongoose.model('user', UserModel)