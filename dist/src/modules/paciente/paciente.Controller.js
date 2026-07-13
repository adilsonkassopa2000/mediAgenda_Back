import { PacienteFactory } from "./paciente.Factory.js";
const pacienteFactory = new PacienteFactory();
export class PacienteController {
    async create(request, response) {
        try {
            const { nome, NIF, SNS, dataNascimento, sexo, phone, morada, userId } = request.body;
            return response.status(200).json(await pacienteFactory.factory().execute({
                nome,
                NIF,
                SNS,
                dataNascimento,
                sexo,
                phone,
                morada,
                userId
            }));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
    async get(request, response) {
        try {
            return response.status(200).json(await pacienteFactory.factory().get());
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
    async update(request, response) {
        try {
            const { id, data } = request.body;
            return response.status(200).json(await pacienteFactory.factory().update(id, data));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
    async delete(request, response) {
        try {
            const { id } = request.body;
            return response.status(200).json(await pacienteFactory.factory().delete(id));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
//# sourceMappingURL=paciente.Controller.js.map