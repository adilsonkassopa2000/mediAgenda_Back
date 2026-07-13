export type save = {
    Id: string;
    email: string;
    senha: string;
    createdAt: Date;
    updatedAt: Date;
};
export type CData = {
    email: string;
    senha: string;
};
export interface IUserRepository {
    creata(email: string, senha: string): Promise<save>;
    get(): Promise<save[]>;
    update(id: string, data: CData): Promise<save>;
}
//# sourceMappingURL=IUserRepository.d.ts.map