import { ConsultaService } from "./consulta.Service.js";
import { ConsultaPrismaRepository } from "./repositories/ConsultaPrismaRepository.js";



export class ConsultaFactory{
    factory(){
        const consultaPrismaRepository = new ConsultaPrismaRepository()
        const consultaService = new ConsultaService(consultaPrismaRepository)

        return consultaService
    }
}