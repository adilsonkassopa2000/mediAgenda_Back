import { ConsultaFactory } from "./consulta.Factory.js";
const consultaFactory = new ConsultaFactory();
export class ConsultaController {
    async create(request, response) {
        try {
            const { pacienteId, especialidadeId, medicoId, vagaId, estadoId } = request.body;
            return response.status(200).json(await consultaFactory.factory().execute({
                pacienteId,
                especialidadeId,
                medicoId,
                vagaId,
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
            return response.status(200).json(await consultaFactory.factory().get());
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
            return response.status(200).json(await consultaFactory.factory().update(id, data));
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
            return response.status(200).json(await consultaFactory.factory().delete(id));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
//# sourceMappingURL=consulta.Controller.js.map