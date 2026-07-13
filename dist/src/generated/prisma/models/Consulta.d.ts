import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Consulta
 *
 */
export type ConsultaModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsultaPayload>;
export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null;
    _min: ConsultaMinAggregateOutputType | null;
    _max: ConsultaMaxAggregateOutputType | null;
};
export type ConsultaMinAggregateOutputType = {
    Id: string | null;
    pacienteId: string | null;
    especialidadeId: string | null;
    estadoId: string | null;
    medicoId: string | null;
    vagaId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConsultaMaxAggregateOutputType = {
    Id: string | null;
    pacienteId: string | null;
    especialidadeId: string | null;
    estadoId: string | null;
    medicoId: string | null;
    vagaId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConsultaCountAggregateOutputType = {
    Id: number;
    pacienteId: number;
    especialidadeId: number;
    estadoId: number;
    medicoId: number;
    vagaId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ConsultaMinAggregateInputType = {
    Id?: true;
    pacienteId?: true;
    especialidadeId?: true;
    estadoId?: true;
    medicoId?: true;
    vagaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConsultaMaxAggregateInputType = {
    Id?: true;
    pacienteId?: true;
    especialidadeId?: true;
    estadoId?: true;
    medicoId?: true;
    vagaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConsultaCountAggregateInputType = {
    Id?: true;
    pacienteId?: true;
    especialidadeId?: true;
    estadoId?: true;
    medicoId?: true;
    vagaId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConsultaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: Prisma.ConsultaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultas to fetch.
     */
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConsultaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType;
};
export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
    [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsulta[P]> : Prisma.GetScalarType<T[P], AggregateConsulta[P]>;
};
export type ConsultaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
    orderBy?: Prisma.ConsultaOrderByWithAggregationInput | Prisma.ConsultaOrderByWithAggregationInput[];
    by: Prisma.ConsultaScalarFieldEnum[] | Prisma.ConsultaScalarFieldEnum;
    having?: Prisma.ConsultaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsultaCountAggregateInputType | true;
    _min?: ConsultaMinAggregateInputType;
    _max?: ConsultaMaxAggregateInputType;
};
export type ConsultaGroupByOutputType = {
    Id: string;
    pacienteId: string;
    especialidadeId: string;
    estadoId: string;
    medicoId: string;
    vagaId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ConsultaCountAggregateOutputType | null;
    _min: ConsultaMinAggregateOutputType | null;
    _max: ConsultaMaxAggregateOutputType | null;
};
type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsultaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsultaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsultaGroupByOutputType[P]>;
}>>;
export type ConsultaWhereInput = {
    AND?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    OR?: Prisma.ConsultaWhereInput[];
    NOT?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    Id?: Prisma.StringFilter<"Consulta"> | string;
    pacienteId?: Prisma.StringFilter<"Consulta"> | string;
    especialidadeId?: Prisma.StringFilter<"Consulta"> | string;
    estadoId?: Prisma.StringFilter<"Consulta"> | string;
    medicoId?: Prisma.StringFilter<"Consulta"> | string;
    vagaId?: Prisma.StringFilter<"Consulta"> | string;
    createdAt?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    estado?: Prisma.XOR<Prisma.EstadoScalarRelationFilter, Prisma.EstadoWhereInput>;
    especialidade?: Prisma.XOR<Prisma.EspecialidadeScalarRelationFilter, Prisma.EspecialidadeWhereInput>;
    paciente?: Prisma.XOR<Prisma.PacienteScalarRelationFilter, Prisma.PacienteWhereInput>;
    medico?: Prisma.XOR<Prisma.MedicoScalarRelationFilter, Prisma.MedicoWhereInput>;
    vaga?: Prisma.XOR<Prisma.VagaScalarRelationFilter, Prisma.VagaWhereInput>;
};
export type ConsultaOrderByWithRelationInput = {
    Id?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    vagaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    estado?: Prisma.EstadoOrderByWithRelationInput;
    especialidade?: Prisma.EspecialidadeOrderByWithRelationInput;
    paciente?: Prisma.PacienteOrderByWithRelationInput;
    medico?: Prisma.MedicoOrderByWithRelationInput;
    vaga?: Prisma.VagaOrderByWithRelationInput;
};
export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    Id?: string;
    AND?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    OR?: Prisma.ConsultaWhereInput[];
    NOT?: Prisma.ConsultaWhereInput | Prisma.ConsultaWhereInput[];
    pacienteId?: Prisma.StringFilter<"Consulta"> | string;
    especialidadeId?: Prisma.StringFilter<"Consulta"> | string;
    estadoId?: Prisma.StringFilter<"Consulta"> | string;
    medicoId?: Prisma.StringFilter<"Consulta"> | string;
    vagaId?: Prisma.StringFilter<"Consulta"> | string;
    createdAt?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    estado?: Prisma.XOR<Prisma.EstadoScalarRelationFilter, Prisma.EstadoWhereInput>;
    especialidade?: Prisma.XOR<Prisma.EspecialidadeScalarRelationFilter, Prisma.EspecialidadeWhereInput>;
    paciente?: Prisma.XOR<Prisma.PacienteScalarRelationFilter, Prisma.PacienteWhereInput>;
    medico?: Prisma.XOR<Prisma.MedicoScalarRelationFilter, Prisma.MedicoWhereInput>;
    vaga?: Prisma.XOR<Prisma.VagaScalarRelationFilter, Prisma.VagaWhereInput>;
}, "Id">;
export type ConsultaOrderByWithAggregationInput = {
    Id?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    vagaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConsultaCountOrderByAggregateInput;
    _max?: Prisma.ConsultaMaxOrderByAggregateInput;
    _min?: Prisma.ConsultaMinOrderByAggregateInput;
};
export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsultaScalarWhereWithAggregatesInput | Prisma.ConsultaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsultaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsultaScalarWhereWithAggregatesInput | Prisma.ConsultaScalarWhereWithAggregatesInput[];
    Id?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    pacienteId?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    especialidadeId?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    estadoId?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    medicoId?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    vagaId?: Prisma.StringWithAggregatesFilter<"Consulta"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Consulta"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Consulta"> | Date | string;
};
export type ConsultaCreateInput = {
    Id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    estado: Prisma.EstadoCreateNestedOneWithoutConsultaInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutConsultaInput;
    paciente: Prisma.PacienteCreateNestedOneWithoutConsultaInput;
    medico: Prisma.MedicoCreateNestedOneWithoutConsultaInput;
    vaga: Prisma.VagaCreateNestedOneWithoutConsultaInput;
};
export type ConsultaUncheckedCreateInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    estadoId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutConsultaNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutConsultaNestedInput;
    paciente?: Prisma.PacienteUpdateOneRequiredWithoutConsultaNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutConsultaNestedInput;
    vaga?: Prisma.VagaUpdateOneRequiredWithoutConsultaNestedInput;
};
export type ConsultaUncheckedUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaCreateManyInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    estadoId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaUpdateManyMutationInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaUncheckedUpdateManyInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaListRelationFilter = {
    every?: Prisma.ConsultaWhereInput;
    some?: Prisma.ConsultaWhereInput;
    none?: Prisma.ConsultaWhereInput;
};
export type ConsultaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConsultaCountOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    vagaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsultaMaxOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    vagaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsultaMinOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    vagaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsultaCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutMedicoInput, Prisma.ConsultaUncheckedCreateWithoutMedicoInput> | Prisma.ConsultaCreateWithoutMedicoInput[] | Prisma.ConsultaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutMedicoInput | Prisma.ConsultaCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.ConsultaCreateManyMedicoInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutMedicoInput, Prisma.ConsultaUncheckedCreateWithoutMedicoInput> | Prisma.ConsultaCreateWithoutMedicoInput[] | Prisma.ConsultaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutMedicoInput | Prisma.ConsultaCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.ConsultaCreateManyMedicoInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutMedicoInput, Prisma.ConsultaUncheckedCreateWithoutMedicoInput> | Prisma.ConsultaCreateWithoutMedicoInput[] | Prisma.ConsultaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutMedicoInput | Prisma.ConsultaCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutMedicoInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.ConsultaCreateManyMedicoInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutMedicoInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutMedicoInput | Prisma.ConsultaUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutMedicoInput, Prisma.ConsultaUncheckedCreateWithoutMedicoInput> | Prisma.ConsultaCreateWithoutMedicoInput[] | Prisma.ConsultaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutMedicoInput | Prisma.ConsultaCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutMedicoInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.ConsultaCreateManyMedicoInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutMedicoInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutMedicoInput | Prisma.ConsultaUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaCreateNestedManyWithoutPacienteInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPacienteInput, Prisma.ConsultaUncheckedCreateWithoutPacienteInput> | Prisma.ConsultaCreateWithoutPacienteInput[] | Prisma.ConsultaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPacienteInput | Prisma.ConsultaCreateOrConnectWithoutPacienteInput[];
    createMany?: Prisma.ConsultaCreateManyPacienteInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPacienteInput, Prisma.ConsultaUncheckedCreateWithoutPacienteInput> | Prisma.ConsultaCreateWithoutPacienteInput[] | Prisma.ConsultaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPacienteInput | Prisma.ConsultaCreateOrConnectWithoutPacienteInput[];
    createMany?: Prisma.ConsultaCreateManyPacienteInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutPacienteNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPacienteInput, Prisma.ConsultaUncheckedCreateWithoutPacienteInput> | Prisma.ConsultaCreateWithoutPacienteInput[] | Prisma.ConsultaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPacienteInput | Prisma.ConsultaCreateOrConnectWithoutPacienteInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutPacienteInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutPacienteInput[];
    createMany?: Prisma.ConsultaCreateManyPacienteInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutPacienteInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutPacienteInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutPacienteInput | Prisma.ConsultaUpdateManyWithWhereWithoutPacienteInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutPacienteInput, Prisma.ConsultaUncheckedCreateWithoutPacienteInput> | Prisma.ConsultaCreateWithoutPacienteInput[] | Prisma.ConsultaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutPacienteInput | Prisma.ConsultaCreateOrConnectWithoutPacienteInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutPacienteInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutPacienteInput[];
    createMany?: Prisma.ConsultaCreateManyPacienteInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutPacienteInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutPacienteInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutPacienteInput | Prisma.ConsultaUpdateManyWithWhereWithoutPacienteInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaCreateNestedManyWithoutEspecialidadeInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput> | Prisma.ConsultaCreateWithoutEspecialidadeInput[] | Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput | Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput[];
    createMany?: Prisma.ConsultaCreateManyEspecialidadeInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutEspecialidadeInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput> | Prisma.ConsultaCreateWithoutEspecialidadeInput[] | Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput | Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput[];
    createMany?: Prisma.ConsultaCreateManyEspecialidadeInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutEspecialidadeNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput> | Prisma.ConsultaCreateWithoutEspecialidadeInput[] | Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput | Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutEspecialidadeInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutEspecialidadeInput[];
    createMany?: Prisma.ConsultaCreateManyEspecialidadeInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutEspecialidadeInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutEspecialidadeInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutEspecialidadeInput | Prisma.ConsultaUpdateManyWithWhereWithoutEspecialidadeInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutEspecialidadeNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput> | Prisma.ConsultaCreateWithoutEspecialidadeInput[] | Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput | Prisma.ConsultaCreateOrConnectWithoutEspecialidadeInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutEspecialidadeInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutEspecialidadeInput[];
    createMany?: Prisma.ConsultaCreateManyEspecialidadeInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutEspecialidadeInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutEspecialidadeInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutEspecialidadeInput | Prisma.ConsultaUpdateManyWithWhereWithoutEspecialidadeInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEstadoInput, Prisma.ConsultaUncheckedCreateWithoutEstadoInput> | Prisma.ConsultaCreateWithoutEstadoInput[] | Prisma.ConsultaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEstadoInput | Prisma.ConsultaCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.ConsultaCreateManyEstadoInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEstadoInput, Prisma.ConsultaUncheckedCreateWithoutEstadoInput> | Prisma.ConsultaCreateWithoutEstadoInput[] | Prisma.ConsultaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEstadoInput | Prisma.ConsultaCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.ConsultaCreateManyEstadoInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEstadoInput, Prisma.ConsultaUncheckedCreateWithoutEstadoInput> | Prisma.ConsultaCreateWithoutEstadoInput[] | Prisma.ConsultaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEstadoInput | Prisma.ConsultaCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutEstadoInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.ConsultaCreateManyEstadoInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutEstadoInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutEstadoInput | Prisma.ConsultaUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutEstadoInput, Prisma.ConsultaUncheckedCreateWithoutEstadoInput> | Prisma.ConsultaCreateWithoutEstadoInput[] | Prisma.ConsultaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutEstadoInput | Prisma.ConsultaCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutEstadoInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.ConsultaCreateManyEstadoInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutEstadoInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutEstadoInput | Prisma.ConsultaUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaCreateNestedManyWithoutVagaInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutVagaInput, Prisma.ConsultaUncheckedCreateWithoutVagaInput> | Prisma.ConsultaCreateWithoutVagaInput[] | Prisma.ConsultaUncheckedCreateWithoutVagaInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutVagaInput | Prisma.ConsultaCreateOrConnectWithoutVagaInput[];
    createMany?: Prisma.ConsultaCreateManyVagaInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUncheckedCreateNestedManyWithoutVagaInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutVagaInput, Prisma.ConsultaUncheckedCreateWithoutVagaInput> | Prisma.ConsultaCreateWithoutVagaInput[] | Prisma.ConsultaUncheckedCreateWithoutVagaInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutVagaInput | Prisma.ConsultaCreateOrConnectWithoutVagaInput[];
    createMany?: Prisma.ConsultaCreateManyVagaInputEnvelope;
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
};
export type ConsultaUpdateManyWithoutVagaNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutVagaInput, Prisma.ConsultaUncheckedCreateWithoutVagaInput> | Prisma.ConsultaCreateWithoutVagaInput[] | Prisma.ConsultaUncheckedCreateWithoutVagaInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutVagaInput | Prisma.ConsultaCreateOrConnectWithoutVagaInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutVagaInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutVagaInput[];
    createMany?: Prisma.ConsultaCreateManyVagaInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutVagaInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutVagaInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutVagaInput | Prisma.ConsultaUpdateManyWithWhereWithoutVagaInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaUncheckedUpdateManyWithoutVagaNestedInput = {
    create?: Prisma.XOR<Prisma.ConsultaCreateWithoutVagaInput, Prisma.ConsultaUncheckedCreateWithoutVagaInput> | Prisma.ConsultaCreateWithoutVagaInput[] | Prisma.ConsultaUncheckedCreateWithoutVagaInput[];
    connectOrCreate?: Prisma.ConsultaCreateOrConnectWithoutVagaInput | Prisma.ConsultaCreateOrConnectWithoutVagaInput[];
    upsert?: Prisma.ConsultaUpsertWithWhereUniqueWithoutVagaInput | Prisma.ConsultaUpsertWithWhereUniqueWithoutVagaInput[];
    createMany?: Prisma.ConsultaCreateManyVagaInputEnvelope;
    set?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    disconnect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    delete?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    connect?: Prisma.ConsultaWhereUniqueInput | Prisma.ConsultaWhereUniqueInput[];
    update?: Prisma.ConsultaUpdateWithWhereUniqueWithoutVagaInput | Prisma.ConsultaUpdateWithWhereUniqueWithoutVagaInput[];
    updateMany?: Prisma.ConsultaUpdateManyWithWhereWithoutVagaInput | Prisma.ConsultaUpdateManyWithWhereWithoutVagaInput[];
    deleteMany?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
};
export type ConsultaCreateWithoutMedicoInput = {
    Id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    estado: Prisma.EstadoCreateNestedOneWithoutConsultaInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutConsultaInput;
    paciente: Prisma.PacienteCreateNestedOneWithoutConsultaInput;
    vaga: Prisma.VagaCreateNestedOneWithoutConsultaInput;
};
export type ConsultaUncheckedCreateWithoutMedicoInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    estadoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaCreateOrConnectWithoutMedicoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutMedicoInput, Prisma.ConsultaUncheckedCreateWithoutMedicoInput>;
};
export type ConsultaCreateManyMedicoInputEnvelope = {
    data: Prisma.ConsultaCreateManyMedicoInput | Prisma.ConsultaCreateManyMedicoInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutMedicoInput, Prisma.ConsultaUncheckedUpdateWithoutMedicoInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutMedicoInput, Prisma.ConsultaUncheckedCreateWithoutMedicoInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutMedicoInput, Prisma.ConsultaUncheckedUpdateWithoutMedicoInput>;
};
export type ConsultaUpdateManyWithWhereWithoutMedicoInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutMedicoInput>;
};
export type ConsultaScalarWhereInput = {
    AND?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
    OR?: Prisma.ConsultaScalarWhereInput[];
    NOT?: Prisma.ConsultaScalarWhereInput | Prisma.ConsultaScalarWhereInput[];
    Id?: Prisma.StringFilter<"Consulta"> | string;
    pacienteId?: Prisma.StringFilter<"Consulta"> | string;
    especialidadeId?: Prisma.StringFilter<"Consulta"> | string;
    estadoId?: Prisma.StringFilter<"Consulta"> | string;
    medicoId?: Prisma.StringFilter<"Consulta"> | string;
    vagaId?: Prisma.StringFilter<"Consulta"> | string;
    createdAt?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Consulta"> | Date | string;
};
export type ConsultaCreateWithoutPacienteInput = {
    Id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    estado: Prisma.EstadoCreateNestedOneWithoutConsultaInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutConsultaInput;
    medico: Prisma.MedicoCreateNestedOneWithoutConsultaInput;
    vaga: Prisma.VagaCreateNestedOneWithoutConsultaInput;
};
export type ConsultaUncheckedCreateWithoutPacienteInput = {
    Id?: string;
    especialidadeId: string;
    estadoId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutPacienteInput, Prisma.ConsultaUncheckedCreateWithoutPacienteInput>;
};
export type ConsultaCreateManyPacienteInputEnvelope = {
    data: Prisma.ConsultaCreateManyPacienteInput | Prisma.ConsultaCreateManyPacienteInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutPacienteInput, Prisma.ConsultaUncheckedUpdateWithoutPacienteInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutPacienteInput, Prisma.ConsultaUncheckedCreateWithoutPacienteInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutPacienteInput, Prisma.ConsultaUncheckedUpdateWithoutPacienteInput>;
};
export type ConsultaUpdateManyWithWhereWithoutPacienteInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutPacienteInput>;
};
export type ConsultaCreateWithoutEspecialidadeInput = {
    Id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    estado: Prisma.EstadoCreateNestedOneWithoutConsultaInput;
    paciente: Prisma.PacienteCreateNestedOneWithoutConsultaInput;
    medico: Prisma.MedicoCreateNestedOneWithoutConsultaInput;
    vaga: Prisma.VagaCreateNestedOneWithoutConsultaInput;
};
export type ConsultaUncheckedCreateWithoutEspecialidadeInput = {
    Id?: string;
    pacienteId: string;
    estadoId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaCreateOrConnectWithoutEspecialidadeInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput>;
};
export type ConsultaCreateManyEspecialidadeInputEnvelope = {
    data: Prisma.ConsultaCreateManyEspecialidadeInput | Prisma.ConsultaCreateManyEspecialidadeInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutEspecialidadeInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedUpdateWithoutEspecialidadeInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedCreateWithoutEspecialidadeInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutEspecialidadeInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutEspecialidadeInput, Prisma.ConsultaUncheckedUpdateWithoutEspecialidadeInput>;
};
export type ConsultaUpdateManyWithWhereWithoutEspecialidadeInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutEspecialidadeInput>;
};
export type ConsultaCreateWithoutEstadoInput = {
    Id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutConsultaInput;
    paciente: Prisma.PacienteCreateNestedOneWithoutConsultaInput;
    medico: Prisma.MedicoCreateNestedOneWithoutConsultaInput;
    vaga: Prisma.VagaCreateNestedOneWithoutConsultaInput;
};
export type ConsultaUncheckedCreateWithoutEstadoInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaCreateOrConnectWithoutEstadoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutEstadoInput, Prisma.ConsultaUncheckedCreateWithoutEstadoInput>;
};
export type ConsultaCreateManyEstadoInputEnvelope = {
    data: Prisma.ConsultaCreateManyEstadoInput | Prisma.ConsultaCreateManyEstadoInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutEstadoInput, Prisma.ConsultaUncheckedUpdateWithoutEstadoInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutEstadoInput, Prisma.ConsultaUncheckedCreateWithoutEstadoInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutEstadoInput, Prisma.ConsultaUncheckedUpdateWithoutEstadoInput>;
};
export type ConsultaUpdateManyWithWhereWithoutEstadoInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutEstadoInput>;
};
export type ConsultaCreateWithoutVagaInput = {
    Id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    estado: Prisma.EstadoCreateNestedOneWithoutConsultaInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutConsultaInput;
    paciente: Prisma.PacienteCreateNestedOneWithoutConsultaInput;
    medico: Prisma.MedicoCreateNestedOneWithoutConsultaInput;
};
export type ConsultaUncheckedCreateWithoutVagaInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    estadoId: string;
    medicoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaCreateOrConnectWithoutVagaInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutVagaInput, Prisma.ConsultaUncheckedCreateWithoutVagaInput>;
};
export type ConsultaCreateManyVagaInputEnvelope = {
    data: Prisma.ConsultaCreateManyVagaInput | Prisma.ConsultaCreateManyVagaInput[];
    skipDuplicates?: boolean;
};
export type ConsultaUpsertWithWhereUniqueWithoutVagaInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsultaUpdateWithoutVagaInput, Prisma.ConsultaUncheckedUpdateWithoutVagaInput>;
    create: Prisma.XOR<Prisma.ConsultaCreateWithoutVagaInput, Prisma.ConsultaUncheckedCreateWithoutVagaInput>;
};
export type ConsultaUpdateWithWhereUniqueWithoutVagaInput = {
    where: Prisma.ConsultaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateWithoutVagaInput, Prisma.ConsultaUncheckedUpdateWithoutVagaInput>;
};
export type ConsultaUpdateManyWithWhereWithoutVagaInput = {
    where: Prisma.ConsultaScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyWithoutVagaInput>;
};
export type ConsultaCreateManyMedicoInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    estadoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaUpdateWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutConsultaNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutConsultaNestedInput;
    paciente?: Prisma.PacienteUpdateOneRequiredWithoutConsultaNestedInput;
    vaga?: Prisma.VagaUpdateOneRequiredWithoutConsultaNestedInput;
};
export type ConsultaUncheckedUpdateWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaUncheckedUpdateManyWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaCreateManyPacienteInput = {
    Id?: string;
    especialidadeId: string;
    estadoId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaUpdateWithoutPacienteInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutConsultaNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutConsultaNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutConsultaNestedInput;
    vaga?: Prisma.VagaUpdateOneRequiredWithoutConsultaNestedInput;
};
export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaUncheckedUpdateManyWithoutPacienteInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaCreateManyEspecialidadeInput = {
    Id?: string;
    pacienteId: string;
    estadoId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaUpdateWithoutEspecialidadeInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutConsultaNestedInput;
    paciente?: Prisma.PacienteUpdateOneRequiredWithoutConsultaNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutConsultaNestedInput;
    vaga?: Prisma.VagaUpdateOneRequiredWithoutConsultaNestedInput;
};
export type ConsultaUncheckedUpdateWithoutEspecialidadeInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaUncheckedUpdateManyWithoutEspecialidadeInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaCreateManyEstadoInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    medicoId: string;
    vagaId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaUpdateWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutConsultaNestedInput;
    paciente?: Prisma.PacienteUpdateOneRequiredWithoutConsultaNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutConsultaNestedInput;
    vaga?: Prisma.VagaUpdateOneRequiredWithoutConsultaNestedInput;
};
export type ConsultaUncheckedUpdateWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaUncheckedUpdateManyWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    vagaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaCreateManyVagaInput = {
    Id?: string;
    pacienteId: string;
    especialidadeId: string;
    estadoId: string;
    medicoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsultaUpdateWithoutVagaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutConsultaNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutConsultaNestedInput;
    paciente?: Prisma.PacienteUpdateOneRequiredWithoutConsultaNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutConsultaNestedInput;
};
export type ConsultaUncheckedUpdateWithoutVagaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaUncheckedUpdateManyWithoutVagaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    pacienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsultaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    pacienteId?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    medicoId?: boolean;
    vagaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    vaga?: boolean | Prisma.VagaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consulta"]>;
export type ConsultaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    pacienteId?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    medicoId?: boolean;
    vagaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    vaga?: boolean | Prisma.VagaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consulta"]>;
export type ConsultaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    pacienteId?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    medicoId?: boolean;
    vagaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    vaga?: boolean | Prisma.VagaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consulta"]>;
export type ConsultaSelectScalar = {
    Id?: boolean;
    pacienteId?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    medicoId?: boolean;
    vagaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ConsultaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"Id" | "pacienteId" | "especialidadeId" | "estadoId" | "medicoId" | "vagaId" | "createdAt" | "updatedAt", ExtArgs["result"]["consulta"]>;
export type ConsultaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    vaga?: boolean | Prisma.VagaDefaultArgs<ExtArgs>;
};
export type ConsultaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    vaga?: boolean | Prisma.VagaDefaultArgs<ExtArgs>;
};
export type ConsultaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    vaga?: boolean | Prisma.VagaDefaultArgs<ExtArgs>;
};
export type $ConsultaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Consulta";
    objects: {
        estado: Prisma.$EstadoPayload<ExtArgs>;
        especialidade: Prisma.$EspecialidadePayload<ExtArgs>;
        paciente: Prisma.$PacientePayload<ExtArgs>;
        medico: Prisma.$MedicoPayload<ExtArgs>;
        vaga: Prisma.$VagaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        Id: string;
        pacienteId: string;
        especialidadeId: string;
        estadoId: string;
        medicoId: string;
        vagaId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["consulta"]>;
    composites: {};
};
export type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsultaPayload, S>;
export type ConsultaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsultaCountAggregateInputType | true;
};
export interface ConsultaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Consulta'];
        meta: {
            name: 'Consulta';
        };
    };
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     *
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     *
     * // Only select the `Id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { Id: true } })
     *
     */
    findMany<T extends ConsultaFindManyArgs>(args?: Prisma.SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     *
     */
    create<T extends ConsultaCreateArgs>(args: Prisma.SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {ConsultaCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Consultas and only return the `Id`
     * const consultaWithIdOnly = await prisma.consulta.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConsultaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsultaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     *
     */
    delete<T extends ConsultaDeleteArgs>(args: Prisma.SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConsultaUpdateArgs>(args: Prisma.SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {ConsultaUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Consultas and only return the `Id`
     * const consultaWithIdOnly = await prisma.consulta.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ConsultaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsultaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: Prisma.SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsultaClient<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(args?: Prisma.Subset<T, ConsultaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsultaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultaAggregateArgs>(args: Prisma.Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>;
    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ConsultaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsultaGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsultaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Consulta model
     */
    readonly fields: ConsultaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Consulta.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    estado<T extends Prisma.EstadoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstadoDefaultArgs<ExtArgs>>): Prisma.Prisma__EstadoClient<runtime.Types.Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    especialidade<T extends Prisma.EspecialidadeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EspecialidadeDefaultArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    paciente<T extends Prisma.PacienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PacienteDefaultArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    medico<T extends Prisma.MedicoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MedicoDefaultArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vaga<T extends Prisma.VagaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VagaDefaultArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Consulta model
 */
export interface ConsultaFieldRefs {
    readonly Id: Prisma.FieldRef<"Consulta", 'String'>;
    readonly pacienteId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly especialidadeId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly estadoId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly medicoId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly vagaId: Prisma.FieldRef<"Consulta", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Consulta", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Consulta", 'DateTime'>;
}
/**
 * Consulta findUnique
 */
export type ConsultaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * Filter, which Consulta to fetch.
     */
    where: Prisma.ConsultaWhereUniqueInput;
};
/**
 * Consulta findUniqueOrThrow
 */
export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * Filter, which Consulta to fetch.
     */
    where: Prisma.ConsultaWhereUniqueInput;
};
/**
 * Consulta findFirst
 */
export type ConsultaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * Filter, which Consulta to fetch.
     */
    where?: Prisma.ConsultaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultas to fetch.
     */
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Consultas.
     */
    cursor?: Prisma.ConsultaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Consultas.
     */
    distinct?: Prisma.ConsultaScalarFieldEnum | Prisma.ConsultaScalarFieldEnum[];
};
/**
 * Consulta findFirstOrThrow
 */
export type ConsultaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * Filter, which Consulta to fetch.
     */
    where?: Prisma.ConsultaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultas to fetch.
     */
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Consultas.
     */
    cursor?: Prisma.ConsultaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Consultas.
     */
    distinct?: Prisma.ConsultaScalarFieldEnum | Prisma.ConsultaScalarFieldEnum[];
};
/**
 * Consulta findMany
 */
export type ConsultaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * Filter, which Consultas to fetch.
     */
    where?: Prisma.ConsultaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consultas to fetch.
     */
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Consultas.
     */
    cursor?: Prisma.ConsultaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consultas.
     */
    skip?: number;
    distinct?: Prisma.ConsultaScalarFieldEnum | Prisma.ConsultaScalarFieldEnum[];
};
/**
 * Consulta create
 */
export type ConsultaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Consulta.
     */
    data: Prisma.XOR<Prisma.ConsultaCreateInput, Prisma.ConsultaUncheckedCreateInput>;
};
/**
 * Consulta createMany
 */
export type ConsultaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: Prisma.ConsultaCreateManyInput | Prisma.ConsultaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Consulta createManyAndReturn
 */
export type ConsultaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * The data used to create many Consultas.
     */
    data: Prisma.ConsultaCreateManyInput | Prisma.ConsultaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Consulta update
 */
export type ConsultaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Consulta.
     */
    data: Prisma.XOR<Prisma.ConsultaUpdateInput, Prisma.ConsultaUncheckedUpdateInput>;
    /**
     * Choose, which Consulta to update.
     */
    where: Prisma.ConsultaWhereUniqueInput;
};
/**
 * Consulta updateMany
 */
export type ConsultaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyInput>;
    /**
     * Filter which Consultas to update
     */
    where?: Prisma.ConsultaWhereInput;
    /**
     * Limit how many Consultas to update.
     */
    limit?: number;
};
/**
 * Consulta updateManyAndReturn
 */
export type ConsultaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * The data used to update Consultas.
     */
    data: Prisma.XOR<Prisma.ConsultaUpdateManyMutationInput, Prisma.ConsultaUncheckedUpdateManyInput>;
    /**
     * Filter which Consultas to update
     */
    where?: Prisma.ConsultaWhereInput;
    /**
     * Limit how many Consultas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Consulta upsert
 */
export type ConsultaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: Prisma.ConsultaWhereUniqueInput;
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: Prisma.XOR<Prisma.ConsultaCreateInput, Prisma.ConsultaUncheckedCreateInput>;
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConsultaUpdateInput, Prisma.ConsultaUncheckedUpdateInput>;
};
/**
 * Consulta delete
 */
export type ConsultaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
    /**
     * Filter which Consulta to delete.
     */
    where: Prisma.ConsultaWhereUniqueInput;
};
/**
 * Consulta deleteMany
 */
export type ConsultaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: Prisma.ConsultaWhereInput;
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number;
};
/**
 * Consulta without action
 */
export type ConsultaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: Prisma.ConsultaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consulta
     */
    omit?: Prisma.ConsultaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultaInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Consulta.d.ts.map