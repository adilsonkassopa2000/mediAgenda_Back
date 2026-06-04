import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRota } from "./modules/user/routes.js";
import { consultaRota } from "./modules/consulta/routes.js";
import { medicoRota } from "./modules/medico/routes.js";
import { pacienteRota } from "./modules/paciente/routes.js";
import { especialidadeRota } from "./modules/especialidade/routes.js";
import { estadoRota } from "./modules/estado/routes.js";
import { vagaRota } from "./modules/vagas/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/user', userRota);
app.use('/medico',medicoRota)
app.use('/paciente',pacienteRota)
app.use('/especialidade',especialidadeRota)
app.use('/consulta',consultaRota)
app.use('/estado',estadoRota)
app.use('/vaga',vagaRota)

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));