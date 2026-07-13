import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Medico
 *
 */
export type MedicoModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicoPayload>;
export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null;
    _avg: MedicoAvgAggregateOutputType | null;
    _sum: MedicoSumAggregateOutputType | null;
    _min: MedicoMinAggregateOutputType | null;
    _max: MedicoMaxAggregateOutputType | null;
};
export type MedicoAvgAggregateOutputType = {
    CRM: number | null;
    phone: number | null;
};
export type MedicoSumAggregateOutputType = {
    CRM: number | null;
    phone: number | null;
};
export type MedicoMinAggregateOutputType = {
    Id: string | null;
    nome: string | null;
    escola: string | null;
    anoExperiencia: string | null;
    CRM: number | null;
    phone: number | null;
    especialidadeId: string | null;
    estadoId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MedicoMaxAggregateOutputType = {
    Id: string | null;
    nome: string | null;
    escola: string | null;
    anoExperiencia: string | null;
    CRM: number | null;
    phone: number | null;
    especialidadeId: string | null;
    estadoId: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MedicoCountAggregateOutputType = {
    Id: number;
    nome: number;
    escola: number;
    anoExperiencia: number;
    CRM: number;
    phone: number;
    especialidadeId: number;
    estadoId: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MedicoAvgAggregateInputType = {
    CRM?: true;
    phone?: true;
};
export type MedicoSumAggregateInputType = {
    CRM?: true;
    phone?: true;
};
export type MedicoMinAggregateInputType = {
    Id?: true;
    nome?: true;
    escola?: true;
    anoExperiencia?: true;
    CRM?: true;
    phone?: true;
    especialidadeId?: true;
    estadoId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MedicoMaxAggregateInputType = {
    Id?: true;
    nome?: true;
    escola?: true;
    anoExperiencia?: true;
    CRM?: true;
    phone?: true;
    especialidadeId?: true;
    estadoId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MedicoCountAggregateInputType = {
    Id?: true;
    nome?: true;
    escola?: true;
    anoExperiencia?: true;
    CRM?: true;
    phone?: true;
    especialidadeId?: true;
    estadoId?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MedicoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Medico to aggregate.
     */
    where?: Prisma.MedicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicos to fetch.
     */
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MedicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Medicos
    **/
    _count?: true | MedicoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MedicoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MedicoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MedicoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MedicoMaxAggregateInputType;
};
export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
    [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedico[P]> : Prisma.GetScalarType<T[P], AggregateMedico[P]>;
};
export type MedicoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithAggregationInput | Prisma.MedicoOrderByWithAggregationInput[];
    by: Prisma.MedicoScalarFieldEnum[] | Prisma.MedicoScalarFieldEnum;
    having?: Prisma.MedicoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicoCountAggregateInputType | true;
    _avg?: MedicoAvgAggregateInputType;
    _sum?: MedicoSumAggregateInputType;
    _min?: MedicoMinAggregateInputType;
    _max?: MedicoMaxAggregateInputType;
};
export type MedicoGroupByOutputType = {
    Id: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    estadoId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MedicoCountAggregateOutputType | null;
    _avg: MedicoAvgAggregateOutputType | null;
    _sum: MedicoSumAggregateOutputType | null;
    _min: MedicoMinAggregateOutputType | null;
    _max: MedicoMaxAggregateOutputType | null;
};
type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicoGroupByOutputType[P]>;
}>>;
export type MedicoWhereInput = {
    AND?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    OR?: Prisma.MedicoWhereInput[];
    NOT?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    Id?: Prisma.StringFilter<"Medico"> | string;
    nome?: Prisma.StringFilter<"Medico"> | string;
    escola?: Prisma.StringFilter<"Medico"> | string;
    anoExperiencia?: Prisma.StringFilter<"Medico"> | string;
    CRM?: Prisma.IntFilter<"Medico"> | number;
    phone?: Prisma.IntFilter<"Medico"> | number;
    especialidadeId?: Prisma.StringFilter<"Medico"> | string;
    estadoId?: Prisma.StringFilter<"Medico"> | string;
    userId?: Prisma.StringFilter<"Medico"> | string;
    createdAt?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    vaga?: Prisma.VagaListRelationFilter;
    consulta?: Prisma.ConsultaListRelationFilter;
    especialidade?: Prisma.XOR<Prisma.EspecialidadeScalarRelationFilter, Prisma.EspecialidadeWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    estado?: Prisma.XOR<Prisma.EstadoScalarRelationFilter, Prisma.EstadoWhereInput>;
};
export type MedicoOrderByWithRelationInput = {
    Id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    escola?: Prisma.SortOrder;
    anoExperiencia?: Prisma.SortOrder;
    CRM?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    vaga?: Prisma.VagaOrderByRelationAggregateInput;
    consulta?: Prisma.ConsultaOrderByRelationAggregateInput;
    especialidade?: Prisma.EspecialidadeOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    estado?: Prisma.EstadoOrderByWithRelationInput;
};
export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    Id?: string;
    userId?: string;
    AND?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    OR?: Prisma.MedicoWhereInput[];
    NOT?: Prisma.MedicoWhereInput | Prisma.MedicoWhereInput[];
    nome?: Prisma.StringFilter<"Medico"> | string;
    escola?: Prisma.StringFilter<"Medico"> | string;
    anoExperiencia?: Prisma.StringFilter<"Medico"> | string;
    CRM?: Prisma.IntFilter<"Medico"> | number;
    phone?: Prisma.IntFilter<"Medico"> | number;
    especialidadeId?: Prisma.StringFilter<"Medico"> | string;
    estadoId?: Prisma.StringFilter<"Medico"> | string;
    createdAt?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    vaga?: Prisma.VagaListRelationFilter;
    consulta?: Prisma.ConsultaListRelationFilter;
    especialidade?: Prisma.XOR<Prisma.EspecialidadeScalarRelationFilter, Prisma.EspecialidadeWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    estado?: Prisma.XOR<Prisma.EstadoScalarRelationFilter, Prisma.EstadoWhereInput>;
}, "Id" | "userId">;
export type MedicoOrderByWithAggregationInput = {
    Id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    escola?: Prisma.SortOrder;
    anoExperiencia?: Prisma.SortOrder;
    CRM?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MedicoCountOrderByAggregateInput;
    _avg?: Prisma.MedicoAvgOrderByAggregateInput;
    _max?: Prisma.MedicoMaxOrderByAggregateInput;
    _min?: Prisma.MedicoMinOrderByAggregateInput;
    _sum?: Prisma.MedicoSumOrderByAggregateInput;
};
export type MedicoScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicoScalarWhereWithAggregatesInput | Prisma.MedicoScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicoScalarWhereWithAggregatesInput | Prisma.MedicoScalarWhereWithAggregatesInput[];
    Id?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    escola?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    anoExperiencia?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    CRM?: Prisma.IntWithAggregatesFilter<"Medico"> | number;
    phone?: Prisma.IntWithAggregatesFilter<"Medico"> | number;
    especialidadeId?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    estadoId?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Medico"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Medico"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Medico"> | Date | string;
};
export type MedicoCreateInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutMedicoInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutMedicoInput;
    user: Prisma.UserCreateNestedOneWithoutMedicoInput;
    estado: Prisma.EstadoCreateNestedOneWithoutMedicoInput;
};
export type MedicoUncheckedCreateInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    estadoId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaUncheckedCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUpdateManyWithoutMedicoNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutMedicoNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMedicoNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUncheckedUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoCreateManyInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    estadoId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MedicoUpdateManyMutationInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicoUncheckedUpdateManyInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicoNullableScalarRelationFilter = {
    is?: Prisma.MedicoWhereInput | null;
    isNot?: Prisma.MedicoWhereInput | null;
};
export type MedicoCountOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    escola?: Prisma.SortOrder;
    anoExperiencia?: Prisma.SortOrder;
    CRM?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MedicoAvgOrderByAggregateInput = {
    CRM?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type MedicoMaxOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    escola?: Prisma.SortOrder;
    anoExperiencia?: Prisma.SortOrder;
    CRM?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MedicoMinOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    escola?: Prisma.SortOrder;
    anoExperiencia?: Prisma.SortOrder;
    CRM?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    especialidadeId?: Prisma.SortOrder;
    estadoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MedicoSumOrderByAggregateInput = {
    CRM?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
};
export type MedicoListRelationFilter = {
    every?: Prisma.MedicoWhereInput;
    some?: Prisma.MedicoWhereInput;
    none?: Prisma.MedicoWhereInput;
};
export type MedicoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MedicoScalarRelationFilter = {
    is?: Prisma.MedicoWhereInput;
    isNot?: Prisma.MedicoWhereInput;
};
export type MedicoCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput;
    connect?: Prisma.MedicoWhereUniqueInput;
};
export type MedicoUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput;
    connect?: Prisma.MedicoWhereUniqueInput;
};
export type MedicoUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput;
    upsert?: Prisma.MedicoUpsertWithoutUserInput;
    disconnect?: Prisma.MedicoWhereInput | boolean;
    delete?: Prisma.MedicoWhereInput | boolean;
    connect?: Prisma.MedicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicoUpdateToOneWithWhereWithoutUserInput, Prisma.MedicoUpdateWithoutUserInput>, Prisma.MedicoUncheckedUpdateWithoutUserInput>;
};
export type MedicoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutUserInput;
    upsert?: Prisma.MedicoUpsertWithoutUserInput;
    disconnect?: Prisma.MedicoWhereInput | boolean;
    delete?: Prisma.MedicoWhereInput | boolean;
    connect?: Prisma.MedicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicoUpdateToOneWithWhereWithoutUserInput, Prisma.MedicoUpdateWithoutUserInput>, Prisma.MedicoUncheckedUpdateWithoutUserInput>;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MedicoCreateNestedManyWithoutEspecialidadeInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadeInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput> | Prisma.MedicoCreateWithoutEspecialidadeInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadeInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUncheckedCreateNestedManyWithoutEspecialidadeInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadeInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput> | Prisma.MedicoCreateWithoutEspecialidadeInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadeInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUpdateManyWithoutEspecialidadeNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadeInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput> | Prisma.MedicoCreateWithoutEspecialidadeInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadeInput | Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadeInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadeInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadeInput | Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadeInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadeInput | Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadeInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoUncheckedUpdateManyWithoutEspecialidadeNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadeInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput> | Prisma.MedicoCreateWithoutEspecialidadeInput[] | Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput | Prisma.MedicoCreateOrConnectWithoutEspecialidadeInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadeInput | Prisma.MedicoUpsertWithWhereUniqueWithoutEspecialidadeInput[];
    createMany?: Prisma.MedicoCreateManyEspecialidadeInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadeInput | Prisma.MedicoUpdateWithWhereUniqueWithoutEspecialidadeInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadeInput | Prisma.MedicoUpdateManyWithWhereWithoutEspecialidadeInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoCreateNestedOneWithoutConsultaInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutConsultaInput, Prisma.MedicoUncheckedCreateWithoutConsultaInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutConsultaInput;
    connect?: Prisma.MedicoWhereUniqueInput;
};
export type MedicoUpdateOneRequiredWithoutConsultaNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutConsultaInput, Prisma.MedicoUncheckedCreateWithoutConsultaInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutConsultaInput;
    upsert?: Prisma.MedicoUpsertWithoutConsultaInput;
    connect?: Prisma.MedicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicoUpdateToOneWithWhereWithoutConsultaInput, Prisma.MedicoUpdateWithoutConsultaInput>, Prisma.MedicoUncheckedUpdateWithoutConsultaInput>;
};
export type MedicoCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEstadoInput, Prisma.MedicoUncheckedCreateWithoutEstadoInput> | Prisma.MedicoCreateWithoutEstadoInput[] | Prisma.MedicoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEstadoInput | Prisma.MedicoCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.MedicoCreateManyEstadoInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEstadoInput, Prisma.MedicoUncheckedCreateWithoutEstadoInput> | Prisma.MedicoCreateWithoutEstadoInput[] | Prisma.MedicoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEstadoInput | Prisma.MedicoCreateOrConnectWithoutEstadoInput[];
    createMany?: Prisma.MedicoCreateManyEstadoInputEnvelope;
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
};
export type MedicoUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEstadoInput, Prisma.MedicoUncheckedCreateWithoutEstadoInput> | Prisma.MedicoCreateWithoutEstadoInput[] | Prisma.MedicoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEstadoInput | Prisma.MedicoCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutEstadoInput | Prisma.MedicoUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.MedicoCreateManyEstadoInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutEstadoInput | Prisma.MedicoUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutEstadoInput | Prisma.MedicoUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutEstadoInput, Prisma.MedicoUncheckedCreateWithoutEstadoInput> | Prisma.MedicoCreateWithoutEstadoInput[] | Prisma.MedicoUncheckedCreateWithoutEstadoInput[];
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutEstadoInput | Prisma.MedicoCreateOrConnectWithoutEstadoInput[];
    upsert?: Prisma.MedicoUpsertWithWhereUniqueWithoutEstadoInput | Prisma.MedicoUpsertWithWhereUniqueWithoutEstadoInput[];
    createMany?: Prisma.MedicoCreateManyEstadoInputEnvelope;
    set?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    disconnect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    delete?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    connect?: Prisma.MedicoWhereUniqueInput | Prisma.MedicoWhereUniqueInput[];
    update?: Prisma.MedicoUpdateWithWhereUniqueWithoutEstadoInput | Prisma.MedicoUpdateWithWhereUniqueWithoutEstadoInput[];
    updateMany?: Prisma.MedicoUpdateManyWithWhereWithoutEstadoInput | Prisma.MedicoUpdateManyWithWhereWithoutEstadoInput[];
    deleteMany?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
};
export type MedicoCreateNestedOneWithoutVagaInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutVagaInput, Prisma.MedicoUncheckedCreateWithoutVagaInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutVagaInput;
    connect?: Prisma.MedicoWhereUniqueInput;
};
export type MedicoUpdateOneRequiredWithoutVagaNestedInput = {
    create?: Prisma.XOR<Prisma.MedicoCreateWithoutVagaInput, Prisma.MedicoUncheckedCreateWithoutVagaInput>;
    connectOrCreate?: Prisma.MedicoCreateOrConnectWithoutVagaInput;
    upsert?: Prisma.MedicoUpsertWithoutVagaInput;
    connect?: Prisma.MedicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicoUpdateToOneWithWhereWithoutVagaInput, Prisma.MedicoUpdateWithoutVagaInput>, Prisma.MedicoUncheckedUpdateWithoutVagaInput>;
};
export type MedicoCreateWithoutUserInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutMedicoInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutMedicoInput;
    estado: Prisma.EstadoCreateNestedOneWithoutMedicoInput;
};
export type MedicoUncheckedCreateWithoutUserInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    estadoId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaUncheckedCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoCreateOrConnectWithoutUserInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
};
export type MedicoUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutUserInput, Prisma.MedicoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutUserInput, Prisma.MedicoUncheckedCreateWithoutUserInput>;
    where?: Prisma.MedicoWhereInput;
};
export type MedicoUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.MedicoWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutUserInput, Prisma.MedicoUncheckedUpdateWithoutUserInput>;
};
export type MedicoUpdateWithoutUserInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUpdateManyWithoutMedicoNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutMedicoNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateWithoutUserInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUncheckedUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoCreateWithoutEspecialidadeInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutMedicoInput;
    user: Prisma.UserCreateNestedOneWithoutMedicoInput;
    estado: Prisma.EstadoCreateNestedOneWithoutMedicoInput;
};
export type MedicoUncheckedCreateWithoutEspecialidadeInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    estadoId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaUncheckedCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoCreateOrConnectWithoutEspecialidadeInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadeInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput>;
};
export type MedicoCreateManyEspecialidadeInputEnvelope = {
    data: Prisma.MedicoCreateManyEspecialidadeInput | Prisma.MedicoCreateManyEspecialidadeInput[];
    skipDuplicates?: boolean;
};
export type MedicoUpsertWithWhereUniqueWithoutEspecialidadeInput = {
    where: Prisma.MedicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutEspecialidadeInput, Prisma.MedicoUncheckedUpdateWithoutEspecialidadeInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutEspecialidadeInput, Prisma.MedicoUncheckedCreateWithoutEspecialidadeInput>;
};
export type MedicoUpdateWithWhereUniqueWithoutEspecialidadeInput = {
    where: Prisma.MedicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutEspecialidadeInput, Prisma.MedicoUncheckedUpdateWithoutEspecialidadeInput>;
};
export type MedicoUpdateManyWithWhereWithoutEspecialidadeInput = {
    where: Prisma.MedicoScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyWithoutEspecialidadeInput>;
};
export type MedicoScalarWhereInput = {
    AND?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
    OR?: Prisma.MedicoScalarWhereInput[];
    NOT?: Prisma.MedicoScalarWhereInput | Prisma.MedicoScalarWhereInput[];
    Id?: Prisma.StringFilter<"Medico"> | string;
    nome?: Prisma.StringFilter<"Medico"> | string;
    escola?: Prisma.StringFilter<"Medico"> | string;
    anoExperiencia?: Prisma.StringFilter<"Medico"> | string;
    CRM?: Prisma.IntFilter<"Medico"> | number;
    phone?: Prisma.IntFilter<"Medico"> | number;
    especialidadeId?: Prisma.StringFilter<"Medico"> | string;
    estadoId?: Prisma.StringFilter<"Medico"> | string;
    userId?: Prisma.StringFilter<"Medico"> | string;
    createdAt?: Prisma.DateTimeFilter<"Medico"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Medico"> | Date | string;
};
export type MedicoCreateWithoutConsultaInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaCreateNestedManyWithoutMedicoInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutMedicoInput;
    user: Prisma.UserCreateNestedOneWithoutMedicoInput;
    estado: Prisma.EstadoCreateNestedOneWithoutMedicoInput;
};
export type MedicoUncheckedCreateWithoutConsultaInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    estadoId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoCreateOrConnectWithoutConsultaInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutConsultaInput, Prisma.MedicoUncheckedCreateWithoutConsultaInput>;
};
export type MedicoUpsertWithoutConsultaInput = {
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutConsultaInput, Prisma.MedicoUncheckedUpdateWithoutConsultaInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutConsultaInput, Prisma.MedicoUncheckedCreateWithoutConsultaInput>;
    where?: Prisma.MedicoWhereInput;
};
export type MedicoUpdateToOneWithWhereWithoutConsultaInput = {
    where?: Prisma.MedicoWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutConsultaInput, Prisma.MedicoUncheckedUpdateWithoutConsultaInput>;
};
export type MedicoUpdateWithoutConsultaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUpdateManyWithoutMedicoNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutMedicoNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMedicoNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateWithoutConsultaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoCreateWithoutEstadoInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutMedicoInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutMedicoInput;
    user: Prisma.UserCreateNestedOneWithoutMedicoInput;
};
export type MedicoUncheckedCreateWithoutEstadoInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vaga?: Prisma.VagaUncheckedCreateNestedManyWithoutMedicoInput;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoCreateOrConnectWithoutEstadoInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutEstadoInput, Prisma.MedicoUncheckedCreateWithoutEstadoInput>;
};
export type MedicoCreateManyEstadoInputEnvelope = {
    data: Prisma.MedicoCreateManyEstadoInput | Prisma.MedicoCreateManyEstadoInput[];
    skipDuplicates?: boolean;
};
export type MedicoUpsertWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.MedicoWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutEstadoInput, Prisma.MedicoUncheckedUpdateWithoutEstadoInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutEstadoInput, Prisma.MedicoUncheckedCreateWithoutEstadoInput>;
};
export type MedicoUpdateWithWhereUniqueWithoutEstadoInput = {
    where: Prisma.MedicoWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutEstadoInput, Prisma.MedicoUncheckedUpdateWithoutEstadoInput>;
};
export type MedicoUpdateManyWithWhereWithoutEstadoInput = {
    where: Prisma.MedicoScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyWithoutEstadoInput>;
};
export type MedicoCreateWithoutVagaInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutMedicoInput;
    especialidade: Prisma.EspecialidadeCreateNestedOneWithoutMedicoInput;
    user: Prisma.UserCreateNestedOneWithoutMedicoInput;
    estado: Prisma.EstadoCreateNestedOneWithoutMedicoInput;
};
export type MedicoUncheckedCreateWithoutVagaInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    estadoId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutMedicoInput;
};
export type MedicoCreateOrConnectWithoutVagaInput = {
    where: Prisma.MedicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutVagaInput, Prisma.MedicoUncheckedCreateWithoutVagaInput>;
};
export type MedicoUpsertWithoutVagaInput = {
    update: Prisma.XOR<Prisma.MedicoUpdateWithoutVagaInput, Prisma.MedicoUncheckedUpdateWithoutVagaInput>;
    create: Prisma.XOR<Prisma.MedicoCreateWithoutVagaInput, Prisma.MedicoUncheckedCreateWithoutVagaInput>;
    where?: Prisma.MedicoWhereInput;
};
export type MedicoUpdateToOneWithWhereWithoutVagaInput = {
    where?: Prisma.MedicoWhereInput;
    data: Prisma.XOR<Prisma.MedicoUpdateWithoutVagaInput, Prisma.MedicoUncheckedUpdateWithoutVagaInput>;
};
export type MedicoUpdateWithoutVagaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUpdateManyWithoutMedicoNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutMedicoNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMedicoNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateWithoutVagaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoCreateManyEspecialidadeInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    estadoId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MedicoUpdateWithoutEspecialidadeInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUpdateManyWithoutMedicoNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMedicoNestedInput;
    estado?: Prisma.EstadoUpdateOneRequiredWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateWithoutEspecialidadeInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUncheckedUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateManyWithoutEspecialidadeInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    estadoId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicoCreateManyEstadoInput = {
    Id?: string;
    nome: string;
    escola: string;
    anoExperiencia: string;
    CRM: number;
    phone: number;
    especialidadeId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MedicoUpdateWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUpdateManyWithoutMedicoNestedInput;
    especialidade?: Prisma.EspecialidadeUpdateOneRequiredWithoutMedicoNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vaga?: Prisma.VagaUncheckedUpdateManyWithoutMedicoNestedInput;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutMedicoNestedInput;
};
export type MedicoUncheckedUpdateManyWithoutEstadoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    escola?: Prisma.StringFieldUpdateOperationsInput | string;
    anoExperiencia?: Prisma.StringFieldUpdateOperationsInput | string;
    CRM?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.IntFieldUpdateOperationsInput | number;
    especialidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MedicoCountOutputType
 */
export type MedicoCountOutputType = {
    vaga: number;
    consulta: number;
};
export type MedicoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vaga?: boolean | MedicoCountOutputTypeCountVagaArgs;
    consulta?: boolean | MedicoCountOutputTypeCountConsultaArgs;
};
/**
 * MedicoCountOutputType without action
 */
export type MedicoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicoCountOutputType
     */
    select?: Prisma.MedicoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MedicoCountOutputType without action
 */
export type MedicoCountOutputTypeCountVagaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VagaWhereInput;
};
/**
 * MedicoCountOutputType without action
 */
export type MedicoCountOutputTypeCountConsultaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
};
export type MedicoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    nome?: boolean;
    escola?: boolean;
    anoExperiencia?: boolean;
    CRM?: boolean;
    phone?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    vaga?: boolean | Prisma.Medico$vagaArgs<ExtArgs>;
    consulta?: boolean | Prisma.Medico$consultaArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medico"]>;
export type MedicoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    nome?: boolean;
    escola?: boolean;
    anoExperiencia?: boolean;
    CRM?: boolean;
    phone?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medico"]>;
export type MedicoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    nome?: boolean;
    escola?: boolean;
    anoExperiencia?: boolean;
    CRM?: boolean;
    phone?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medico"]>;
export type MedicoSelectScalar = {
    Id?: boolean;
    nome?: boolean;
    escola?: boolean;
    anoExperiencia?: boolean;
    CRM?: boolean;
    phone?: boolean;
    especialidadeId?: boolean;
    estadoId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MedicoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"Id" | "nome" | "escola" | "anoExperiencia" | "CRM" | "phone" | "especialidadeId" | "estadoId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["medico"]>;
export type MedicoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vaga?: boolean | Prisma.Medico$vagaArgs<ExtArgs>;
    consulta?: boolean | Prisma.Medico$consultaArgs<ExtArgs>;
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MedicoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
};
export type MedicoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    especialidade?: boolean | Prisma.EspecialidadeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    estado?: boolean | Prisma.EstadoDefaultArgs<ExtArgs>;
};
export type $MedicoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medico";
    objects: {
        vaga: Prisma.$VagaPayload<ExtArgs>[];
        consulta: Prisma.$ConsultaPayload<ExtArgs>[];
        especialidade: Prisma.$EspecialidadePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
        estado: Prisma.$EstadoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        Id: string;
        nome: string;
        escola: string;
        anoExperiencia: string;
        CRM: number;
        phone: number;
        especialidadeId: string;
        estadoId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["medico"]>;
    composites: {};
};
export type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicoPayload, S>;
export type MedicoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicoCountAggregateInputType | true;
};
export interface MedicoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medico'];
        meta: {
            name: 'Medico';
        };
    };
    /**
     * Find zero or one Medico that matches the filter.
     * @param {MedicoFindUniqueArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicoFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Medico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicoFindUniqueOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Medico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicoFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Medico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medico.findMany()
     *
     * // Get first 10 Medicos
     * const medicos = await prisma.medico.findMany({ take: 10 })
     *
     * // Only select the `Id`
     * const medicoWithIdOnly = await prisma.medico.findMany({ select: { Id: true } })
     *
     */
    findMany<T extends MedicoFindManyArgs>(args?: Prisma.SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Medico.
     * @param {MedicoCreateArgs} args - Arguments to create a Medico.
     * @example
     * // Create one Medico
     * const Medico = await prisma.medico.create({
     *   data: {
     *     // ... data to create a Medico
     *   }
     * })
     *
     */
    create<T extends MedicoCreateArgs>(args: Prisma.SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Medicos.
     * @param {MedicoCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MedicoCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Medicos and returns the data saved in the database.
     * @param {MedicoCreateManyAndReturnArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Medicos and only return the `Id`
     * const medicoWithIdOnly = await prisma.medico.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MedicoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Medico.
     * @param {MedicoDeleteArgs} args - Arguments to delete one Medico.
     * @example
     * // Delete one Medico
     * const Medico = await prisma.medico.delete({
     *   where: {
     *     // ... filter to delete one Medico
     *   }
     * })
     *
     */
    delete<T extends MedicoDeleteArgs>(args: Prisma.SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Medico.
     * @param {MedicoUpdateArgs} args - Arguments to update one Medico.
     * @example
     * // Update one Medico
     * const medico = await prisma.medico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MedicoUpdateArgs>(args: Prisma.SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Medicos.
     * @param {MedicoDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MedicoDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MedicoUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Medicos and returns the data updated in the database.
     * @param {MedicoUpdateManyAndReturnArgs} args - Arguments to update many Medicos.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Medicos and only return the `Id`
     * const medicoWithIdOnly = await prisma.medico.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Medico.
     * @param {MedicoUpsertArgs} args - Arguments to update or create a Medico.
     * @example
     * // Update or create a Medico
     * const medico = await prisma.medico.upsert({
     *   create: {
     *     // ... data to create a Medico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico we want to update
     *   }
     * })
     */
    upsert<T extends MedicoUpsertArgs>(args: Prisma.SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medico.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends MedicoCountArgs>(args?: Prisma.Subset<T, MedicoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicoAggregateArgs>(args: Prisma.Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>;
    /**
     * Group by Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MedicoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicoGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Medico model
     */
    readonly fields: MedicoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Medico.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vaga<T extends Prisma.Medico$vagaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medico$vagaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consulta<T extends Prisma.Medico$consultaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medico$consultaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    especialidade<T extends Prisma.EspecialidadeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EspecialidadeDefaultArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Medico model
 */
export interface MedicoFieldRefs {
    readonly Id: Prisma.FieldRef<"Medico", 'String'>;
    readonly nome: Prisma.FieldRef<"Medico", 'String'>;
    readonly escola: Prisma.FieldRef<"Medico", 'String'>;
    readonly anoExperiencia: Prisma.FieldRef<"Medico", 'String'>;
    readonly CRM: Prisma.FieldRef<"Medico", 'Int'>;
    readonly phone: Prisma.FieldRef<"Medico", 'Int'>;
    readonly especialidadeId: Prisma.FieldRef<"Medico", 'String'>;
    readonly estadoId: Prisma.FieldRef<"Medico", 'String'>;
    readonly userId: Prisma.FieldRef<"Medico", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Medico", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Medico", 'DateTime'>;
}
/**
 * Medico findUnique
 */
export type MedicoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * Filter, which Medico to fetch.
     */
    where: Prisma.MedicoWhereUniqueInput;
};
/**
 * Medico findUniqueOrThrow
 */
export type MedicoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * Filter, which Medico to fetch.
     */
    where: Prisma.MedicoWhereUniqueInput;
};
/**
 * Medico findFirst
 */
export type MedicoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * Filter, which Medico to fetch.
     */
    where?: Prisma.MedicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicos to fetch.
     */
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Medicos.
     */
    cursor?: Prisma.MedicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Medicos.
     */
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
/**
 * Medico findFirstOrThrow
 */
export type MedicoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * Filter, which Medico to fetch.
     */
    where?: Prisma.MedicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicos to fetch.
     */
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Medicos.
     */
    cursor?: Prisma.MedicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Medicos.
     */
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
/**
 * Medico findMany
 */
export type MedicoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * Filter, which Medicos to fetch.
     */
    where?: Prisma.MedicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicos to fetch.
     */
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Medicos.
     */
    cursor?: Prisma.MedicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicos.
     */
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
/**
 * Medico create
 */
export type MedicoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * The data needed to create a Medico.
     */
    data: Prisma.XOR<Prisma.MedicoCreateInput, Prisma.MedicoUncheckedCreateInput>;
};
/**
 * Medico createMany
 */
export type MedicoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicos.
     */
    data: Prisma.MedicoCreateManyInput | Prisma.MedicoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Medico createManyAndReturn
 */
export type MedicoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * The data used to create many Medicos.
     */
    data: Prisma.MedicoCreateManyInput | Prisma.MedicoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Medico update
 */
export type MedicoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * The data needed to update a Medico.
     */
    data: Prisma.XOR<Prisma.MedicoUpdateInput, Prisma.MedicoUncheckedUpdateInput>;
    /**
     * Choose, which Medico to update.
     */
    where: Prisma.MedicoWhereUniqueInput;
};
/**
 * Medico updateMany
 */
export type MedicoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicos.
     */
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyInput>;
    /**
     * Filter which Medicos to update
     */
    where?: Prisma.MedicoWhereInput;
    /**
     * Limit how many Medicos to update.
     */
    limit?: number;
};
/**
 * Medico updateManyAndReturn
 */
export type MedicoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * The data used to update Medicos.
     */
    data: Prisma.XOR<Prisma.MedicoUpdateManyMutationInput, Prisma.MedicoUncheckedUpdateManyInput>;
    /**
     * Filter which Medicos to update
     */
    where?: Prisma.MedicoWhereInput;
    /**
     * Limit how many Medicos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Medico upsert
 */
export type MedicoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * The filter to search for the Medico to update in case it exists.
     */
    where: Prisma.MedicoWhereUniqueInput;
    /**
     * In case the Medico found by the `where` argument doesn't exist, create a new Medico with this data.
     */
    create: Prisma.XOR<Prisma.MedicoCreateInput, Prisma.MedicoUncheckedCreateInput>;
    /**
     * In case the Medico was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MedicoUpdateInput, Prisma.MedicoUncheckedUpdateInput>;
};
/**
 * Medico delete
 */
export type MedicoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    /**
     * Filter which Medico to delete.
     */
    where: Prisma.MedicoWhereUniqueInput;
};
/**
 * Medico deleteMany
 */
export type MedicoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Medicos to delete
     */
    where?: Prisma.MedicoWhereInput;
    /**
     * Limit how many Medicos to delete.
     */
    limit?: number;
};
/**
 * Medico.vaga
 */
export type Medico$vagaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.VagaWhereInput;
    orderBy?: Prisma.VagaOrderByWithRelationInput | Prisma.VagaOrderByWithRelationInput[];
    cursor?: Prisma.VagaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VagaScalarFieldEnum | Prisma.VagaScalarFieldEnum[];
};
/**
 * Medico.consulta
 */
export type Medico$consultaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Medico without action
 */
export type MedicoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medico
     */
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Medico.d.ts.map