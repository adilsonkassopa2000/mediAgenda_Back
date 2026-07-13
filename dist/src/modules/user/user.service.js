import { HashBcrypt } from "../../utils/hash.js";
const hashBcrypt = new HashBcrypt();
export class UserService {
    iuserRepository;
    constructor(iuserRepository) {
        this.iuserRepository = iuserRepository;
    }
    async execute(email, senha) {
        //verificar se os dados foram passados
        if (!email || !senha)
            throw new Error('os dados não foram passados');
        //verificar se já existe um usuario com este email
        const user = (await this.iuserRepository.get()).
            find(item => item.email === email);
        if (user)
            throw new Error('já existe um usuario com este email');
        senha = await hashBcrypt.hashPassword(senha);
        return await this.iuserRepository.creata(email, senha);
    }
    async get() {
        const user = await this.iuserRepository.get();
        //verificar se existe algum usuario registrado
        if (!user)
            throw new Error('Nenhum user encontrado');
        return await this.iuserRepository.get();
    }
    async login(email, senha) {
        if (!email || !senha)
            throw new Error('os dados não foram passados');
        const user = (await this.iuserRepository.get()).find(item => item.email === email);
        let senhaBd = false;
        if (!user)
            throw new Error('nenhum usuario com este email');
        senhaBd = await hashBcrypt.comparePassword(senha, user.senha);
        if (!senhaBd)
            throw new Error('Senha incorreta');
        return user;
    }
    async updatea(id, data) {
        if (!id || !data)
            throw new Error(`${!id ? 'o id' : 'a senha'}  não foi passado`);
        const user = (await this.iuserRepository.get()).find(item => item.Id === id);
        if (!user)
            throw new Error("este usuario não existe");
        if (data?.senha) {
            const senhaBd = await hashBcrypt.comparePassword(data.senha, user.senha);
            if (senhaBd)
                throw new Error("introdusa uma nova senha");
        }
        data.senha = await hashBcrypt.hashPassword(data.senha);
        return await this.iuserRepository.update(id, data);
    }
}
//# sourceMappingURL=user.service.js.map