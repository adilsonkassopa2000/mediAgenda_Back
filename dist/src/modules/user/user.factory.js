import { UserPrismaRepository } from "./repositories/UserPrismaRepository.js";
import { UserService } from "./user.service.js";
export class UserFactory {
    factory() {
        const userPrismaRepository = new UserPrismaRepository();
        const userService = new UserService(userPrismaRepository);
        return userService;
    }
}
//# sourceMappingURL=user.factory.js.map