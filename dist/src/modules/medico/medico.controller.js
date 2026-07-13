import { MedicoFactory } from "./medico.factory.js";
const medicoFactory = new MedicoFactory();
export class MedicoController {
    async create(request, response) {
        try {
            const { nome, escola, anoExperiencia, CRM, phone, especialidadeId, estadoId, userId } = request.body;
            return response.status(200).json(await medicoFactory.factory().execute({
                nome,
                escola,
                anoExperiencia,
                CRM,
                phone,
                especialidadeId,
                estadoId,
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
            return response.status(200).json(await medicoFactory.factory().get());
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
            return response.status(200).json(await medicoFactory.factory().update(id, data));
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
            return response.status(200).json(await medicoFactory.factory().delete(id));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
//# sourceMappingURL=medico.controller.js.map