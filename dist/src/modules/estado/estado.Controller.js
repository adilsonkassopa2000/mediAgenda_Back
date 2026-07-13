import { EstadoFactory } from "./estado.Factory.js";
const estadoFactory = new EstadoFactory();
export class EstadoController {
    async create(request, response) {
        try {
            const { estado } = request.body;
            return response.status(200).json(await estadoFactory.factory().execute(estado));
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
    async get(request, response) {
        try {
            return response.status(200).json(await estadoFactory.factory().get());
        }
        catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}
//# sourceMappingURL=estado.Controller.js.map