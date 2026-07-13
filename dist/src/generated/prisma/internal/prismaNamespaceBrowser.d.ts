import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#6@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#7@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#5@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Medico: "Medico";
    readonly Paciente: "Paciente";
    readonly Especialidade: "Especialidade";
    readonly Consulta: "Consulta";
    readonly Estado: "Estado";
    readonly Vaga: "Vaga";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly Id: "Id";
    readonly email: "email";
    readonly senha: "senha";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const MedicoScalarFieldEnum: {
    readonly Id: "Id";
    readonly nome: "nome";
    readonly escola: "escola";
    readonly anoExperiencia: "anoExperiencia";
    readonly CRM: "CRM";
    readonly phone: "phone";
    readonly especialidadeId: "especialidadeId";
    readonly estadoId: "estadoId";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum];
export declare const PacienteScalarFieldEnum: {
    readonly Id: "Id";
    readonly nome: "nome";
    readonly NIF: "NIF";
    readonly SNS: "SNS";
    readonly dataNascimento: "dataNascimento";
    readonly sexo: "sexo";
    readonly phone: "phone";
    readonly morada: "morada";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum];
export declare const EspecialidadeScalarFieldEnum: {
    readonly Id: "Id";
    readonly especialidade: "especialidade";
    readonly descricao: "descricao";
    readonly img: "img";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EspecialidadeScalarFieldEnum = (typeof EspecialidadeScalarFieldEnum)[keyof typeof EspecialidadeScalarFieldEnum];
export declare const ConsultaScalarFieldEnum: {
    readonly Id: "Id";
    readonly pacienteId: "pacienteId";
    readonly especialidadeId: "especialidadeId";
    readonly estadoId: "estadoId";
    readonly medicoId: "medicoId";
    readonly vagaId: "vagaId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum];
export declare const EstadoScalarFieldEnum: {
    readonly Id: "Id";
    readonly estado: "estado";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum];
export declare const VagaScalarFieldEnum: {
    readonly Id: "Id";
    readonly data: "data";
    readonly hora: "hora";
    readonly medicoId: "medicoId";
    readonly estadoId: "estadoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VagaScalarFieldEnum = (typeof VagaScalarFieldEnum)[keyof typeof VagaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map