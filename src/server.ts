import express from "express";
import dotenv from "dotenv";
import { userRota } from "./modules/user/routes.js";
import { routerMedico } from "./modules/medico/routes.js";
import { routerPaciente } from "./modules/paciente/routes.js";
import { especialRouter } from "./modules/especialidade/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use('/user', userRota);
app.use('/medico',routerMedico)
app.use('/paciente',routerPaciente)
app.use('/especialidade',especialRouter)

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));