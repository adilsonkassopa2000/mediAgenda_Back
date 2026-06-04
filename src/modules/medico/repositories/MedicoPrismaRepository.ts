import { prismaClient } from "../../../database/client.js";
import { IMedicoRepository, medico, medicoSave } from "./IMedicoRepository.js";

function isSameDate(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function withAppointmentCounts(medico: any, vagas: any[] = []): medicoSave {
    const today = new Date();
    return {
        ...medico,
        totalAppointments: vagas.length,
        todayAppointments: vagas.filter(v => isSameDate(v.data, today)).length,
    };
}

export class MedicoPrismaRepository implements IMedicoRepository{
    async create(data: medico): Promise<medicoSave> {
        const created = await prismaClient.medico.create({ data });
        return withAppointmentCounts(created, []);
    }
    async get(): Promise<medicoSave[]> {
        const medicos = await prismaClient.medico.findMany({
            include: {
                especialidade: true,
                estado: true,
                vaga: true,
            }
        });

        return medicos.map(({ vaga, ...medico }) => withAppointmentCounts(medico, vaga));
    }
    async update(id: string, data: medico): Promise<medicoSave> {
        const updated = await prismaClient.medico.update({
            where:{ Id:id },
            data:{ ...data }
        });
        return withAppointmentCounts(updated, []);
    }
    async delete(id: string): Promise<medicoSave> {
        const deleted = await prismaClient.medico.delete({
            where:{ Id:id }
        });
        return withAppointmentCounts(deleted, []);
    }

}