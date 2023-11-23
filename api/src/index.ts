import express from "express";
import { routes } from "./routes/route";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))

mongoose.connect("mongodb+srv://samcaliman:ZqfL5ipZ76f5YnC0@clusterguestbook.e5pbrfn.mongodb.net/")
.then((data)=>{
    console.log("Conectado")
})
.catch((err)=>{
    console.log("Erro na conexao", err.message)
})



app.use(express.json());

app.use(routes)

app.listen(3333);

console.log("olá")