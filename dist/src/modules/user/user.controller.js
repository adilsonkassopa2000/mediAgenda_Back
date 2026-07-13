import { UserFactory } from "./user.factory.js";
const userFactory = new UserFactory();
export class UserController {
    async create(request, response) {
        try {
            const { email, senha } = request.body;
            return response.status(200).json(await userFactory.factory().execute(email, senha));
        }
        catch (err) {
            response.status(400).json({
                message: err.message
            });
        }
    }
    async get(request, response) {
        try {
            return response.status(200).json(await userFactory.factory().get());
        }
        catch (err) {
            response.status(400).json({
                message: err.message
            });
        }
    }
    async login(request, response) {
        try {
            const { email, senha } = request.body;
            return response.status(200).json(await userFactory.factory().login(email, senha));
        }
        catch (err) {
            response.status(400).json({
                message: err.message
            });
        }
    }
    async update(request, response) {
        try {
            const { id, data } = request.body;
            return response.status(200).json(await userFactory.factory().updatea(id, data));
        }
        catch (err) {
            response.status(400).json({
                message: err.message
            });
        }
    }
}
//# sourceMappingURL=user.controller.js.map