import { EspecialidadeFactory } from "./especialidade.Factory.js";
const especialidadeFactory = new EspecialidadeFactory();
export class EspecialidadeController {
    async create(request, response) {
        try {
            const { especialidade, descricao, img } = request.body;
            return response.status(200).json(await especialidadeFactory.factory().execute({
                especialidade,
                descricao,
                img
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
            return response.status(200).json(await especialidadeFactory.factory().get());
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
    async update(request, response) {
        try {
            const { id, especialidade, descricao, img } = request.body;
            return response.status(200).json(await especialidadeFactory.factory().update(id, {
                especialidade,
                descricao,
                img
            }));
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
            return response.status(200).json(await especialidadeFactory.factory().delete(id));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
//# sourceMappingURL=especilaidade.Controller.js.map