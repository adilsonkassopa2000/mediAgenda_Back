import { log } from "console";
import { HashBcrypt } from "../../utils/hash.js";
import { IUserRepository } from "./repositories/IUserRepository.js";

const hashBcrypt = new HashBcrypt();



export class UserService{
    constructor(private iuserRepository:  IUserRepository){}
    async execute(email:string,senha:string){
        
        //verificar se os dados foram passados
        if(!email || !senha)
            throw new Error('os dados não foram passados')

        //verificar se já existe um usuario com este email
        const user = (await this.iuserRepository.get()).
        find(item => item.email === email)

        if(user)
            throw new Error('já existe um usuario com este email')

        senha = await hashBcrypt.hashPassword(senha)

        return await this.iuserRepository.creata(email,senha)
    }

    async get(){
        const user = await this.iuserRepository.get()

        //verificar se existe algum usuario registrado
        if(!user)
            throw new Error('Nenhum user encontrado')

        return await this.iuserRepository.get()
    }

    async login(email:string,senha:string){
        
        if(!email || !senha)
            throw new Error('os dados não foram passados')


        const user = (await this.iuserRepository.get()).find(item => item.email === email)
        let senhaBd=false
        if(!user)
            throw new Error('nenhum usuario com este email')

        senhaBd = await hashBcrypt.comparePassword(senha,user.senha)

        if(!senhaBd)
            throw new Error('Senha incorreta')

        return 'login realizado com sucesso'
    }
}