import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Vaga
 *
 */
export type VagaModel = runtime.Types.Result.DefaultSelection<Prisma.$VagaPayload>;
export type AggregateVaga = {
    _count: VagaCountAggregateOutputType | null;
    _min: VagaMinAggregateOutputType | null;
    _max: VagaMaxAggregateOutputType | null;
};
export type VagaMinAggregateOutputType = {
    Id: string | null;
    data: Date | null;
    hora: Date | null;
    medicoId: string | null;
    estadoId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VagaMaxAggregateOutputType = {
    Id: string | null;
    data: Date | null;
    hora: Date | null;
    medicoId: string | null;
    estadoId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VagaCountAggregateOutputType = {
    Id: number;
    data: number;
    hora: number;
    medicoId: number;
    estadoId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VagaMinAggregateInputType = {
    Id?: true;
    data?: true;
    hora?: true;
    medicoId?: true;
    estadoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VagaMaxAggregateInputType = {
    Id?: true;
    data?: true;
    hora?: true;
    medicoId?: true;
    estadoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VagaCountAggregateInputType = {
    Id?: true;
    data?: true;
    hora?: true;
    medicoId?: true;
    estadoId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VagaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Vaga to aggregate.
     */
    where?: Prisma.VagaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vagas to fetch.
     */
    orderBy?: Prisma.VagaOrderByWithRelationInput | Prisma.VagaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VagaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vagas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Vagas
    **/
    _count?: true | VagaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VagaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VagaMaxAggregateInputType;
};
export type GetVagaAggregateType<T extends VagaAggregateArgs> = {
    [P in keyof T & keyof AggregateVaga]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVaga[P]> : Prisma.GetScalarType<T[P], AggregateVaga[P]>;
};
export type VagaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VagaWhereInput;
    orderBy?: Prisma.VagaOrderByWithAggregationInput | Prisma.VagaOrderByWithAggregationInput[];
    by: Prisma.VagaScalarFieldEnum[] | Prisma.VagaScalarFieldEnum;
    having?: Prisma.VagaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VagaCountAggregateInputType | true;
    _min?: VagaMinAggregateInputType;
    _max?: VagaMaxAggregateInputType;
};
export type VagaGroupByOutputType = {
    Id: string;
    data: Date;
    hora: Date;
    medicoId: string;
    estadoId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: VagaCountAggregateOutputType | null;
    _min: VagaMinAggregateOutputType | null;
    _max: VagaMaxAggregateOutputType | null;
};
type GetVagaGroupByPayload<T extends VagaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VagaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VagaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VagaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VagaGroupByOutputType[P]>;
}>>;
export type VagaWhereInput = {
    AND?: Prisma.VagaWhereInput | Prisma.VagaWhereInput[];
    OR?: Prisma.VagaWhereInput[];
    NOT?: Prisma.VagaWhereInput | Prisma.VagaWhereInput[];
    Id?: Prisma.StringFilter<"Vaga"> | string;
    data?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    hora?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    medicoId?: Prisma.StringFilter<"Vaga"> | string;
    estadoId?: Prisma.StringFilter<"Vaga"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    consulta?: Prisma.ConsultaListRelationFilter;
    medico?: Prisma.XOR<Prisma.MedicoScalarRelationFilter, Prisma.MedicoWhereInput>;
    estado?: Prisma.XOR<Prisma.EstadoScalarRelationFilter, Prisma.EstadoWhereInput>;
};
export type VagaOrderByWithRelationInput = {
    Id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    consulta?: Prisma.ConsultaOrderByRelationAggregateInput;
    medico?: Prisma.MedicoOrderByWithRelationInput;
    estado?: Prisma.EstadoOrderByWithRelationInput;
};
export type VagaWhereUniqueInput = Prisma.AtLeast<{
    Id?: string;
    AND?: Prisma.VagaWhereInput | Prisma.VagaWhereInput[];
    OR?: Prisma.VagaWhereInput[];
    NOT?: Prisma.VagaWhereInput | Prisma.VagaWhereInput[];
    data?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    hora?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    medicoId?: Prisma.StringFilter<"Vaga"> | string;
    estadoId?: Prisma.StringFilter<"Vaga"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    consulta?: Prisma.ConsultaListRelationFilter;
    medico?: Prisma.XOR<Prisma.MedicoScalarRelationFilter, Prisma.MedicoWhereInput>;
    estado?: Prisma.XOR<Prisma.EstadoScalarRelationFilter, Prisma.EstadoWhereInput>;
}, "Id">;
export type VagaOrderByWithAggregationInput = {
    Id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VagaCountOrderByAggregateInput;
    _max?: Prisma.VagaMaxOrderByAggregateInput;
    _min?: Prisma.VagaMinOrderByAggregateInput;
};
export type VagaScalarWhereWithAggregatesInput = {
    AND?: Prisma.VagaScalarWhereWithAggregatesInput | Prisma.VagaScalarWhereWithAggregatesInput[];
    OR?: Prisma.VagaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VagaScalarWhereWithAggregatesInput | Prisma.VagaScalarWhereWithAggregatesInput[];
    Id?: Prisma.StringWithAggregatesFilter<"Vaga"> | string;
    data?: Prisma.DateTimeWithAggregatesFilter<"Vaga"> | Date | string;
    hora?: Prisma.DateTimeWithAggregatesFilter<"Vaga"> | Date | string;
    medicoId?: Prisma.StringWithAggregatesFilter<"Vaga"> | string;
    estadoId?: Prisma.StringWithAggregatesFilter<"Vaga"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Vaga"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Vaga"> | Date | string;
};
export type VagaCreateInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutVagaInput;
    medico: Prisma.MedicoCreateNestedOneWithoutVagaInput;
    estado: Prisma.EstadoCreateNestedOneWithoutVagaInput;
};
export type VagaUncheckedCreateInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    medicoId: string;
    estadoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutVagaInput;
};
export type VagaUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUpdateManyWithoutVagaNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutVagaNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutVagaNestedInput;
};
export type VagaUncheckedUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutVagaNestedInput;
};
export type VagaCreateManyInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    medicoId: string;
    estadoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VagaUpdateManyMutationInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VagaUncheckedUpdateManyInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VagaListRelationFilter = {
    every?: Prisma.VagaWhereInput;
    some?: Prisma.VagaWhereInput;
    none?: Prisma.VagaWhereInput;
};
export type VagaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VagaScalarRelationFilter = {
    is?: Prisma.VagaWhereInput;
    isNot?: Prisma.VagaWhereInput;
};
export type VagaCountOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VagaMaxOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VagaMinOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VagaCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutMedicoInput, Prisma.VagaUncheckedCreateWithoutMedicoInput> | Prisma.VagaCreateWithoutMedicoInput[] | Prisma.VagaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutMedicoInput | Prisma.VagaCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.VagaCreateManyMedicoInputEnvelope;
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
};
export type VagaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutMedicoInput, Prisma.VagaUncheckedCreateWithoutMedicoInput> | Prisma.VagaCreateWithoutMedicoInput[] | Prisma.VagaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutMedicoInput | Prisma.VagaCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.VagaCreateManyMedicoInputEnvelope;
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
};
export type VagaUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutMedicoInput, Prisma.VagaUncheckedCreateWithoutMedicoInput> | Prisma.VagaCreateWithoutMedicoInput[] | Prisma.VagaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutMedicoInput | Prisma.VagaCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.VagaUpsertWithWhereUniqueWithoutMedicoInput | Prisma.VagaUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.VagaCreateManyMedicoInputEnvelope;
    set?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    disconnect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    delete?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    update?: Prisma.VagaUpdateWithWhereUniqueWithoutMedicoInput | Prisma.VagaUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.VagaUpdateManyWithWhereWithoutMedicoInput | Prisma.VagaUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.VagaScalarWhereInput | Prisma.VagaScalarWhereInput[];
};
export type VagaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutMedicoInput, Prisma.VagaUncheckedCreateWithoutMedicoInput> | Prisma.VagaCreateWithoutMedicoInput[] | Prisma.VagaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutMedicoInput | Prisma.VagaCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.VagaUpsertWithWhereUniqueWithoutMedicoInput | Prisma.VagaUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.VagaCreateManyMedicoInputEnvelope;
    set?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    disconnect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    delete?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    update?: Prisma.VagaUpdateWithWhereUniqueWithoutMedicoInput | Prisma.VagaUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.VagaUpdateManyWithWhereWithoutMedicoInput | Prisma.VagaUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.VagaScalarWhereInput | Prisma.VagaScalarWhereInput[];
};
export type VagaCreateNestedOneWithoutConsultaInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutConsultaInput, Prisma.VagaUncheckedCreateWithoutConsultaInput>;
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutConsultaInput;
    connect?: Prisma.VagaWhereUniqueInput;
};
export type VagaUpdateOneRequiredWithoutConsultaNestedInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutConsultaInput, Prisma.VagaUncheckedCreateWithoutConsultaInput>;
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutConsultaInput;
    upsert?: Prisma.VagaUpsertWithoutConsultaInput;
    connect?: Prisma.VagaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VagaUpdateToOneWithWhereWithoutConsultaInput, Prisma.VagaUpdateWithoutConsultaInput>, Prisma.VagaUncheckedUpdateWithoutConsultaInput>;
};
export type VagaCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutEstadoInput, Prisma.VagaUncheckedCreateWithoutEstadoInput> | Prisma.VagaCreateWithoutEstadoInput[] | Prisma.VagaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutEstadoInput | Prisma.VagaCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.VagaCreateManyEstadoInputEnvelope;
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
};
export type VagaUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutEstadoInput, Prisma.VagaUncheckedCreateWithoutEstadoInput> | Prisma.VagaCreateWithoutEstadoInput[] | Prisma.VagaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutEstadoInput | Prisma.VagaCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.VagaCreateManyEstadoInputEnvelope;
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
};
export type VagaUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutEstadoInput, Prisma.VagaUncheckedCreateWithoutEstadoInput> | Prisma.VagaCreateWithoutEstadoInput[] | Prisma.VagaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutEstadoInput | Prisma.VagaCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.VagaUpsertWithWhereUniqueWithoutEstadoInput | Prisma.VagaUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.VagaCreateManyEstadoInputEnvelope;
    set?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    disconnect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    delete?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    update?: Prisma.VagaUpdateWithWhereUniqueWithoutEstadoInput | Prisma.VagaUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.VagaUpdateManyWithWhereWithoutEstadoInput | Prisma.VagaUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.VagaScalarWhereInput | Prisma.VagaScalarWhereInput[];
};
export type VagaUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.VagaCreateWithoutEstadoInput, Prisma.VagaUncheckedCreateWithoutEstadoInput> | Prisma.VagaCreateWithoutEstadoInput[] | Prisma.VagaUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.VagaCreateOrConnectWithoutEstadoInput | Prisma.VagaCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.VagaUpsertWithWhereUniqueWithoutEstadoInput | Prisma.VagaUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.VagaCreateManyEstadoInputEnvelope;
    set?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    disconnect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    delete?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    connect?: Prisma.VagaWhereUniqueInput | Prisma.VagaWhereUniqueInput[];
    update?: Prisma.VagaUpdateWithWhereUniqueWithoutEstadoInput | Prisma.VagaUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.VagaUpdateManyWithWhereWithoutEstadoInput | Prisma.VagaUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.VagaScalarWhereInput | Prisma.VagaScalarWhereInput[];
};
export type VagaCreateWithoutMedicoInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutVagaInput;
    estado: Prisma.EstadoCreateNestedOneWithoutVagaInput;
};
export type VagaUncheckedCreateWithoutMedicoInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    estadoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutVagaInput;
};
export type VagaCreateOrConnectWithoutMedicoInput = {
    where: Prisma.VagaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VagaCreateWithoutMedicoInput, Prisma.VagaUncheckedCreateWithoutMedicoInput>;
};
export type VagaCreateManyMedicoInputEnvelope = {
    data: Prisma.VagaCreateManyMedicoInput | Prisma.VagaCreateManyMedicoInput[];
    skipDuplicates?: boolean;
};
export type VagaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.VagaWhereUniqueInput;
    update: Prisma.XOR<Prisma.VagaUpdateWithoutMedicoInput, Prisma.VagaUncheckedUpdateWithoutMedicoInput>;
    create: Prisma.XOR<Prisma.VagaCreateWithoutMedicoInput, Prisma.VagaUncheckedCreateWithoutMedicoInput>;
};
export type VagaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.VagaWhereUniqueInput;
    data: Prisma.XOR<Prisma.VagaUpdateWithoutMedicoInput, Prisma.VagaUncheckedUpdateWithoutMedicoInput>;
};
export type VagaUpdateManyWithWhereWithoutMedicoInput = {
    where: Prisma.VagaScalarWhereInput;
    data: Prisma.XOR<Prisma.VagaUpdateManyMutationInput, Prisma.VagaUncheckedUpdateManyWithoutMedicoInput>;
};
export type VagaScalarWhereInput = {
    AND?: Prisma.VagaScalarWhereInput | Prisma.VagaScalarWhereInput[];
    OR?: Prisma.VagaScalarWhereInput[];
    NOT?: Prisma.VagaScalarWhereInput | Prisma.VagaScalarWhereInput[];
    Id?: Prisma.StringFilter<"Vaga"> | string;
    data?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    hora?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    medicoId?: Prisma.StringFilter<"Vaga"> | string;
    estadoId?: Prisma.StringFilter<"Vaga"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vaga"> | Date | string;
};
export type VagaCreateWithoutConsultaInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    medico: Prisma.MedicoCreateNestedOneWithoutVagaInput;
    estado: Prisma.EstadoCreateNestedOneWithoutVagaInput;
};
export type VagaUncheckedCreateWithoutConsultaInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    medicoId: string;
    estadoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VagaCreateOrConnectWithoutConsultaInput = {
    where: Prisma.VagaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VagaCreateWithoutConsultaInput, Prisma.VagaUncheckedCreateWithoutConsultaInput>;
};
export type VagaUpsertWithoutConsultaInput = {
    update: Prisma.XOR<Prisma.VagaUpdateWithoutConsultaInput, Prisma.VagaUncheckedUpdateWithoutConsultaInput>;
    create: Prisma.XOR<Prisma.VagaCreateWithoutConsultaInput, Prisma.VagaUncheckedCreateWithoutConsultaInput>;
    where?: Prisma.VagaWhereInput;
};
export type VagaUpdateToOneWithWhereWithoutConsultaInput = {
    where?: Prisma.VagaWhereInput;
    data: Prisma.XOR<Prisma.VagaUpdateWithoutConsultaInput, Prisma.VagaUncheckedUpdateWithoutConsultaInput>;
};
export type VagaUpdateWithoutConsultaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutVagaNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutVagaNestedInput;
};
export type VagaUncheckedUpdateWithoutConsultaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VagaCreateWithoutEstadoInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutVagaInput;
    medico: Prisma.MedicoCreateNestedOneWithoutVagaInput;
};
export type VagaUncheckedCreateWithoutEstadoInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    medicoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutVagaInput;
};
export type VagaCreateOrConnectWithoutEstadoInput = {
    where: Prisma.VagaWhereUniqueInput;
    create: Prisma.XOR<Prisma.VagaCreateWithoutEstadoInput, Prisma.VagaUncheckedCreateWithoutEstadoInput>;
};
export type VagaCreateManyEstadoInputEnvelope = {
    data: Prisma.VagaCreateManyEstadoInput | Prisma.VagaCreateManyEstadoInput[];
    skipDuplicates?: boolean;
};
export type VagaUpsertWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.VagaWhereUniqueInput;
    update: Prisma.XOR<Prisma.VagaUpdateWithoutEstadoInput, Prisma.VagaUncheckedUpdateWithoutEstadoInput>;
    create: Prisma.XOR<Prisma.VagaCreateWithoutEstadoInput, Prisma.VagaUncheckedCreateWithoutEstadoInput>;
};
export type VagaUpdateWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.VagaWhereUniqueInput;
    data: Prisma.XOR<Prisma.VagaUpdateWithoutEstadoInput, Prisma.VagaUncheckedUpdateWithoutEstadoInput>;
};
export type VagaUpdateManyWithWhereWithoutEstadoInput = {
    where: Prisma.VagaScalarWhereInput;
    data: Prisma.XOR<Prisma.VagaUpdateManyMutationInput, Prisma.VagaUncheckedUpdateManyWithoutEstadoInput>;
};
export type VagaCreateManyMedicoInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    estadoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VagaUpdateWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUpdateManyWithoutVagaNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutVagaNestedInput;
};
export type VagaUncheckedUpdateWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutVagaNestedInput;
};
export type VagaUncheckedUpdateManyWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VagaCreateManyEstadoInput = {
    Id?: string;
    data: Date | string;
    hora: Date | string;
    medicoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VagaUpdateWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUpdateManyWithoutVagaNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutVagaNestedInput;
};
export type VagaUncheckedUpdateWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutVagaNestedInput;
};
export type VagaUncheckedUpdateManyWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type VagaCountOutputType
 */
export type VagaCountOutputType = {
    consulta: number;
};
export type VagaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consulta?: boolean | VagaCountOutputTypeCountConsultaArgs;
};
/**
 * VagaCountOutputType without action
 */
export type VagaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VagaCountOutputType
     */
    select?: Prisma.VagaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VagaCountOutputType without action
 */
export type VagaCountOutputTypeCountConsultaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
};
export type VagaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    data?: boolean;
    hora?: boolean;
    medicoId?: boolean;
    estadoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    consulta?: boolean | Prisma.Vaga$consultaArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.VagaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vaga"]>;
export type VagaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    data?: boolean;
    hora?: boolean;
    medicoId?: boolean;
    estadoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vaga"]>;
export type VagaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    data?: boolean;
    hora?: boolean;
    medicoId?: boolean;
    estadoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vaga"]>;
export type VagaSelectScalar = {
    Id?: boolean;
    data?: boolean;
    hora?: boolean;
    medicoId?: boolean;
    estadoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VagaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"Id" | "data" | "hora" | "medicoId" | "estadoId" | "createdAt" | "updatedAt", ExtArgs["result"]["vaga"]>;
export type VagaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consulta?: boolean | Prisma.Vaga$consultaArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.VagaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VagaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
};
export type VagaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
};
export type $VagaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vaga";
    objects: {
        consulta: Prisma.$ConsultaPayload<ExtArgs>[];
        medico: Prisma.$MedicoPayload<ExtArgs>;
        estado: Prisma.$EstadoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        Id: string;
        data: Date;
        hora: Date;
        medicoId: string;
        estadoId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["vaga"]>;
    composites: {};
};
export type VagaGetPayload<S extends boolean | null | undefined | VagaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VagaPayload, S>;
export type VagaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VagaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VagaCountAggregateInputType | true;
};
export interface VagaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vaga'];
        meta: {
            name: 'Vaga';
        };
    };
    /**
     * Find zero or one Vaga that matches the filter.
     * @param {VagaFindUniqueArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VagaFindUniqueArgs>(args: Prisma.SelectSubset<T, VagaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Vaga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VagaFindUniqueOrThrowArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VagaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VagaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Vaga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindFirstArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VagaFindFirstArgs>(args?: Prisma.SelectSubset<T, VagaFindFirstArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Vaga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindFirstOrThrowArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VagaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VagaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Vagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vagas
     * const vagas = await prisma.vaga.findMany()
     *
     * // Get first 10 Vagas
     * const vagas = await prisma.vaga.findMany({ take: 10 })
     *
     * // Only select the `Id`
     * const vagaWithIdOnly = await prisma.vaga.findMany({ select: { Id: true } })
     *
     */
    findMany<T extends VagaFindManyArgs>(args?: Prisma.SelectSubset<T, VagaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Vaga.
     * @param {VagaCreateArgs} args - Arguments to create a Vaga.
     * @example
     * // Create one Vaga
     * const Vaga = await prisma.vaga.create({
     *   data: {
     *     // ... data to create a Vaga
     *   }
     * })
     *
     */
    create<T extends VagaCreateArgs>(args: Prisma.SelectSubset<T, VagaCreateArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Vagas.
     * @param {VagaCreateManyArgs} args - Arguments to create many Vagas.
     * @example
     * // Create many Vagas
     * const vaga = await prisma.vaga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VagaCreateManyArgs>(args?: Prisma.SelectSubset<T, VagaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Vagas and returns the data saved in the database.
     * @param {VagaCreateManyAndReturnArgs} args - Arguments to create many Vagas.
     * @example
     * // Create many Vagas
     * const vaga = await prisma.vaga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Vagas and only return the `Id`
     * const vagaWithIdOnly = await prisma.vaga.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VagaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VagaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Vaga.
     * @param {VagaDeleteArgs} args - Arguments to delete one Vaga.
     * @example
     * // Delete one Vaga
     * const Vaga = await prisma.vaga.delete({
     *   where: {
     *     // ... filter to delete one Vaga
     *   }
     * })
     *
     */
    delete<T extends VagaDeleteArgs>(args: Prisma.SelectSubset<T, VagaDeleteArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Vaga.
     * @param {VagaUpdateArgs} args - Arguments to update one Vaga.
     * @example
     * // Update one Vaga
     * const vaga = await prisma.vaga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VagaUpdateArgs>(args: Prisma.SelectSubset<T, VagaUpdateArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Vagas.
     * @param {VagaDeleteManyArgs} args - Arguments to filter Vagas to delete.
     * @example
     * // Delete a few Vagas
     * const { count } = await prisma.vaga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VagaDeleteManyArgs>(args?: Prisma.SelectSubset<T, VagaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vagas
     * const vaga = await prisma.vaga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VagaUpdateManyArgs>(args: Prisma.SelectSubset<T, VagaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Vagas and returns the data updated in the database.
     * @param {VagaUpdateManyAndReturnArgs} args - Arguments to update many Vagas.
     * @example
     * // Update many Vagas
     * const vaga = await prisma.vaga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Vagas and only return the `Id`
     * const vagaWithIdOnly = await prisma.vaga.updateManyAndReturn({
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
    updateManyAndReturn<T extends VagaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VagaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Vaga.
     * @param {VagaUpsertArgs} args - Arguments to update or create a Vaga.
     * @example
     * // Update or create a Vaga
     * const vaga = await prisma.vaga.upsert({
     *   create: {
     *     // ... data to create a Vaga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaga we want to update
     *   }
     * })
     */
    upsert<T extends VagaUpsertArgs>(args: Prisma.SelectSubset<T, VagaUpsertArgs<ExtArgs>>): Prisma.Prisma__VagaClient<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaCountArgs} args - Arguments to filter Vagas to count.
     * @example
     * // Count the number of Vagas
     * const count = await prisma.vaga.count({
     *   where: {
     *     // ... the filter for the Vagas we want to count
     *   }
     * })
    **/
    count<T extends VagaCountArgs>(args?: Prisma.Subset<T, VagaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VagaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Vaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VagaAggregateArgs>(args: Prisma.Subset<T, VagaAggregateArgs>): Prisma.PrismaPromise<GetVagaAggregateType<T>>;
    /**
     * Group by Vaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VagaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VagaGroupByArgs['orderBy'];
    } : {
        orderBy?: VagaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VagaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVagaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Vaga model
     */
    readonly fields: VagaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Vaga.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VagaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    consulta<T extends Prisma.Vaga$consultaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vaga$consultaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    medico<T extends Prisma.MedicoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MedicoDefaultArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    estado<T extends Prisma.EstadoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EstadoDefaultArgs<ExtArgs>>): Prisma.Prisma__EstadoClient<runtime.Types.Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Vaga model
 */
export interface VagaFieldRefs {
    readonly Id: Prisma.FieldRef<"Vaga", 'String'>;
    readonly data: Prisma.FieldRef<"Vaga", 'DateTime'>;
    readonly hora: Prisma.FieldRef<"Vaga", 'DateTime'>;
    readonly medicoId: Prisma.FieldRef<"Vaga", 'String'>;
    readonly estadoId: Prisma.FieldRef<"Vaga", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Vaga", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Vaga", 'DateTime'>;
}
/**
 * Vaga findUnique
 */
export type VagaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * Filter, which Vaga to fetch.
     */
    where: Prisma.VagaWhereUniqueInput;
};
/**
 * Vaga findUniqueOrThrow
 */
export type VagaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * Filter, which Vaga to fetch.
     */
    where: Prisma.VagaWhereUniqueInput;
};
/**
 * Vaga findFirst
 */
export type VagaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * Filter, which Vaga to fetch.
     */
    where?: Prisma.VagaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vagas to fetch.
     */
    orderBy?: Prisma.VagaOrderByWithRelationInput | Prisma.VagaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vagas.
     */
    cursor?: Prisma.VagaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vagas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vagas.
     */
    distinct?: Prisma.VagaScalarFieldEnum | Prisma.VagaScalarFieldEnum[];
};
/**
 * Vaga findFirstOrThrow
 */
export type VagaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * Filter, which Vaga to fetch.
     */
    where?: Prisma.VagaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vagas to fetch.
     */
    orderBy?: Prisma.VagaOrderByWithRelationInput | Prisma.VagaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Vagas.
     */
    cursor?: Prisma.VagaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vagas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Vagas.
     */
    distinct?: Prisma.VagaScalarFieldEnum | Prisma.VagaScalarFieldEnum[];
};
/**
 * Vaga findMany
 */
export type VagaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * Filter, which Vagas to fetch.
     */
    where?: Prisma.VagaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Vagas to fetch.
     */
    orderBy?: Prisma.VagaOrderByWithRelationInput | Prisma.VagaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Vagas.
     */
    cursor?: Prisma.VagaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Vagas.
     */
    skip?: number;
    distinct?: Prisma.VagaScalarFieldEnum | Prisma.VagaScalarFieldEnum[];
};
/**
 * Vaga create
 */
export type VagaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Vaga.
     */
    data: Prisma.XOR<Prisma.VagaCreateInput, Prisma.VagaUncheckedCreateInput>;
};
/**
 * Vaga createMany
 */
export type VagaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vagas.
     */
    data: Prisma.VagaCreateManyInput | Prisma.VagaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Vaga createManyAndReturn
 */
export type VagaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * The data used to create many Vagas.
     */
    data: Prisma.VagaCreateManyInput | Prisma.VagaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Vaga update
 */
export type VagaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Vaga.
     */
    data: Prisma.XOR<Prisma.VagaUpdateInput, Prisma.VagaUncheckedUpdateInput>;
    /**
     * Choose, which Vaga to update.
     */
    where: Prisma.VagaWhereUniqueInput;
};
/**
 * Vaga updateMany
 */
export type VagaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Vagas.
     */
    data: Prisma.XOR<Prisma.VagaUpdateManyMutationInput, Prisma.VagaUncheckedUpdateManyInput>;
    /**
     * Filter which Vagas to update
     */
    where?: Prisma.VagaWhereInput;
    /**
     * Limit how many Vagas to update.
     */
    limit?: number;
};
/**
 * Vaga updateManyAndReturn
 */
export type VagaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * The data used to update Vagas.
     */
    data: Prisma.XOR<Prisma.VagaUpdateManyMutationInput, Prisma.VagaUncheckedUpdateManyInput>;
    /**
     * Filter which Vagas to update
     */
    where?: Prisma.VagaWhereInput;
    /**
     * Limit how many Vagas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Vaga upsert
 */
export type VagaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Vaga to update in case it exists.
     */
    where: Prisma.VagaWhereUniqueInput;
    /**
     * In case the Vaga found by the `where` argument doesn't exist, create a new Vaga with this data.
     */
    create: Prisma.XOR<Prisma.VagaCreateInput, Prisma.VagaUncheckedCreateInput>;
    /**
     * In case the Vaga was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VagaUpdateInput, Prisma.VagaUncheckedUpdateInput>;
};
/**
 * Vaga delete
 */
export type VagaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
    /**
     * Filter which Vaga to delete.
     */
    where: Prisma.VagaWhereUniqueInput;
};
/**
 * Vaga deleteMany
 */
export type VagaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Vagas to delete
     */
    where?: Prisma.VagaWhereInput;
    /**
     * Limit how many Vagas to delete.
     */
    limit?: number;
};
/**
 * Vaga.consulta
 */
export type Vaga$consultaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ConsultaWhereInput;
    orderBy?: Prisma.ConsultaOrderByWithRelationInput | Prisma.ConsultaOrderByWithRelationInput[];
    cursor?: Prisma.ConsultaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultaScalarFieldEnum | Prisma.ConsultaScalarFieldEnum[];
};
/**
 * Vaga without action
 */
export type VagaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: Prisma.VagaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vaga
     */
    omit?: Prisma.VagaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VagaInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Vaga.d.ts.map