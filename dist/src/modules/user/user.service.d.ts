import { CData, IUserRepository } from "./repositories/IUserRepository.js";
export declare class UserService {
    private iuserRepository;
    constructor(iuserRepository: IUserRepository);
    execute(email: string, senha: string): Promise<import("./repositories/IUserRepository.js").save>;
    get(): Promise<import("./repositories/IUserRepository.js").save[]>;
    login(email: string, senha: string): Promise<import("./repositories/IUserRepository.js").save>;
    updatea(id: string, data: CData): Promise<import("./repositories/IUserRepository.js").save>;
}
//# sourceMappingURL=user.service.d.ts.map