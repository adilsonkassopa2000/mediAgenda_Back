import { CData, IUserRepository, save } from "./IUserRepository.js";
export declare class UserPrismaRepository implements IUserRepository {
    update(id: string, data: CData): Promise<save>;
    creata(email: string, senha: string): Promise<save>;
    get(): Promise<save[]>;
}
//# sourceMappingURL=UserPrismaRepository.d.ts.map