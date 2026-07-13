import { VagaFactory } from "./vaga.Factory.js";
const vagaFactory = new VagaFactory();
export class VagaController {
    async create(request, response) {
        try {
            const { data, hora, medicoId, estadoId } = request.body;
            return response.status(200).json(await vagaFactory.factory().execute({
                data,
                hora,
                medicoId,
                estadoId
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
            return response.status(200).json(await vagaFactory.factory().get());
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
            return response.status(200).json(await vagaFactory.factory().update(id, data));
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
            return response.status(200).json(await vagaFactory.factory().delete(id));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
//# sourceMappingURL=vaga.Controller.js.map