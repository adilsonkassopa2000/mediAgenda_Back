import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Especialidade
 *
 */
export type EspecialidadeModel = runtime.Types.Result.DefaultSelection<Prisma.$EspecialidadePayload>;
export type AggregateEspecialidade = {
    _count: EspecialidadeCountAggregateOutputType | null;
    _min: EspecialidadeMinAggregateOutputType | null;
    _max: EspecialidadeMaxAggregateOutputType | null;
};
export type EspecialidadeMinAggregateOutputType = {
    Id: string | null;
    especialidade: string | null;
    descricao: string | null;
    img: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EspecialidadeMaxAggregateOutputType = {
    Id: string | null;
    especialidade: string | null;
    descricao: string | null;
    img: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EspecialidadeCountAggregateOutputType = {
    Id: number;
    especialidade: number;
    descricao: number;
    img: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EspecialidadeMinAggregateInputType = {
    Id?: true;
    especialidade?: true;
    descricao?: true;
    img?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EspecialidadeMaxAggregateInputType = {
    Id?: true;
    especialidade?: true;
    descricao?: true;
    img?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EspecialidadeCountAggregateInputType = {
    Id?: true;
    especialidade?: true;
    descricao?: true;
    img?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EspecialidadeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidade to aggregate.
     */
    where?: Prisma.EspecialidadeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: Prisma.EspecialidadeOrderByWithRelationInput | Prisma.EspecialidadeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EspecialidadeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Especialidades
    **/
    _count?: true | EspecialidadeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadeMaxAggregateInputType;
};
export type GetEspecialidadeAggregateType<T extends EspecialidadeAggregateArgs> = {
    [P in keyof T & keyof AggregateEspecialidade]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEspecialidade[P]> : Prisma.GetScalarType<T[P], AggregateEspecialidade[P]>;
};
export type EspecialidadeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EspecialidadeWhereInput;
    orderBy?: Prisma.EspecialidadeOrderByWithAggregationInput | Prisma.EspecialidadeOrderByWithAggregationInput[];
    by: Prisma.EspecialidadeScalarFieldEnum[] | Prisma.EspecialidadeScalarFieldEnum;
    having?: Prisma.EspecialidadeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EspecialidadeCountAggregateInputType | true;
    _min?: EspecialidadeMinAggregateInputType;
    _max?: EspecialidadeMaxAggregateInputType;
};
export type EspecialidadeGroupByOutputType = {
    Id: string;
    especialidade: string;
    descricao: string;
    img: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EspecialidadeCountAggregateOutputType | null;
    _min: EspecialidadeMinAggregateOutputType | null;
    _max: EspecialidadeMaxAggregateOutputType | null;
};
type GetEspecialidadeGroupByPayload<T extends EspecialidadeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EspecialidadeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EspecialidadeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EspecialidadeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>;
}>>;
export type EspecialidadeWhereInput = {
    AND?: Prisma.EspecialidadeWhereInput | Prisma.EspecialidadeWhereInput[];
    OR?: Prisma.EspecialidadeWhereInput[];
    NOT?: Prisma.EspecialidadeWhereInput | Prisma.EspecialidadeWhereInput[];
    Id?: Prisma.StringFilter<"Especialidade"> | string;
    especialidade?: Prisma.StringFilter<"Especialidade"> | string;
    descricao?: Prisma.StringFilter<"Especialidade"> | string;
    img?: Prisma.StringNullableFilter<"Especialidade"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Especialidade"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Especialidade"> | Date | string;
    medico?: Prisma.MedicoListRelationFilter;
    consulta?: Prisma.ConsultaListRelationFilter;
};
export type EspecialidadeOrderByWithRelationInput = {
    Id?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    img?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    medico?: Prisma.MedicoOrderByRelationAggregateInput;
    consulta?: Prisma.ConsultaOrderByRelationAggregateInput;
};
export type EspecialidadeWhereUniqueInput = Prisma.AtLeast<{
    Id?: string;
    AND?: Prisma.EspecialidadeWhereInput | Prisma.EspecialidadeWhereInput[];
    OR?: Prisma.EspecialidadeWhereInput[];
    NOT?: Prisma.EspecialidadeWhereInput | Prisma.EspecialidadeWhereInput[];
    especialidade?: Prisma.StringFilter<"Especialidade"> | string;
    descricao?: Prisma.StringFilter<"Especialidade"> | string;
    img?: Prisma.StringNullableFilter<"Especialidade"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Especialidade"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Especialidade"> | Date | string;
    medico?: Prisma.MedicoListRelationFilter;
    consulta?: Prisma.ConsultaListRelationFilter;
}, "Id">;
export type EspecialidadeOrderByWithAggregationInput = {
    Id?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    img?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EspecialidadeCountOrderByAggregateInput;
    _max?: Prisma.EspecialidadeMaxOrderByAggregateInput;
    _min?: Prisma.EspecialidadeMinOrderByAggregateInput;
};
export type EspecialidadeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EspecialidadeScalarWhereWithAggregatesInput | Prisma.EspecialidadeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EspecialidadeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EspecialidadeScalarWhereWithAggregatesInput | Prisma.EspecialidadeScalarWhereWithAggregatesInput[];
    Id?: Prisma.StringWithAggregatesFilter<"Especialidade"> | string;
    especialidade?: Prisma.StringWithAggregatesFilter<"Especialidade"> | string;
    descricao?: Prisma.StringWithAggregatesFilter<"Especialidade"> | string;
    img?: Prisma.StringNullableWithAggregatesFilter<"Especialidade"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Especialidade"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Especialidade"> | Date | string;
};
export type EspecialidadeCreateInput = {
    Id?: string;
    especialidade: string;
    descricao: string;
    img?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    medico?: Prisma.MedicoCreateNestedManyWithoutEspecialidadeInput;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutEspecialidadeInput;
};
export type EspecialidadeUncheckedCreateInput = {
    Id?: string;
    especialidade: string;
    descricao: string;
    img?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    medico?: Prisma.MedicoUncheckedCreateNestedManyWithoutEspecialidadeInput;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutEspecialidadeInput;
};
export type EspecialidadeUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medico?: Prisma.MedicoUpdateManyWithoutEspecialidadeNestedInput;
    consulta?: Prisma.ConsultaUpdateManyWithoutEspecialidadeNestedInput;
};
export type EspecialidadeUncheckedUpdateInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medico?: Prisma.MedicoUncheckedUpdateManyWithoutEspecialidadeNestedInput;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutEspecialidadeNestedInput;
};
export type EspecialidadeCreateManyInput = {
    Id?: string;
    especialidade: string;
    descricao: string;
    img?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EspecialidadeUpdateManyMutationInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EspecialidadeUncheckedUpdateManyInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EspecialidadeScalarRelationFilter = {
    is?: Prisma.EspecialidadeWhereInput;
    isNot?: Prisma.EspecialidadeWhereInput;
};
export type EspecialidadeCountOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    img?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EspecialidadeMaxOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    img?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EspecialidadeMinOrderByAggregateInput = {
    Id?: Prisma.SortOrder;
    especialidade?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    img?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EspecialidadeCreateNestedOneWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.EspecialidadeCreateWithoutMedicoInput, Prisma.EspecialidadeUncheckedCreateWithoutMedicoInput>;
    connectOrCreate?: Prisma.EspecialidadeCreateOrConnectWithoutMedicoInput;
    connect?: Prisma.EspecialidadeWhereUniqueInput;
};
export type EspecialidadeUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.EspecialidadeCreateWithoutMedicoInput, Prisma.EspecialidadeUncheckedCreateWithoutMedicoInput>;
    connectOrCreate?: Prisma.EspecialidadeCreateOrConnectWithoutMedicoInput;
    upsert?: Prisma.EspecialidadeUpsertWithoutMedicoInput;
    connect?: Prisma.EspecialidadeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EspecialidadeUpdateToOneWithWhereWithoutMedicoInput, Prisma.EspecialidadeUpdateWithoutMedicoInput>, Prisma.EspecialidadeUncheckedUpdateWithoutMedicoInput>;
};
export type EspecialidadeCreateNestedOneWithoutConsultaInput = {
    create?: Prisma.XOR<Prisma.EspecialidadeCreateWithoutConsultaInput, Prisma.EspecialidadeUncheckedCreateWithoutConsultaInput>;
    connectOrCreate?: Prisma.EspecialidadeCreateOrConnectWithoutConsultaInput;
    connect?: Prisma.EspecialidadeWhereUniqueInput;
};
export type EspecialidadeUpdateOneRequiredWithoutConsultaNestedInput = {
    create?: Prisma.XOR<Prisma.EspecialidadeCreateWithoutConsultaInput, Prisma.EspecialidadeUncheckedCreateWithoutConsultaInput>;
    connectOrCreate?: Prisma.EspecialidadeCreateOrConnectWithoutConsultaInput;
    upsert?: Prisma.EspecialidadeUpsertWithoutConsultaInput;
    connect?: Prisma.EspecialidadeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EspecialidadeUpdateToOneWithWhereWithoutConsultaInput, Prisma.EspecialidadeUpdateWithoutConsultaInput>, Prisma.EspecialidadeUncheckedUpdateWithoutConsultaInput>;
};
export type EspecialidadeCreateWithoutMedicoInput = {
    Id?: string;
    especialidade: string;
    descricao: string;
    img?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaCreateNestedManyWithoutEspecialidadeInput;
};
export type EspecialidadeUncheckedCreateWithoutMedicoInput = {
    Id?: string;
    especialidade: string;
    descricao: string;
    img?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    consulta?: Prisma.ConsultaUncheckedCreateNestedManyWithoutEspecialidadeInput;
};
export type EspecialidadeCreateOrConnectWithoutMedicoInput = {
    where: Prisma.EspecialidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EspecialidadeCreateWithoutMedicoInput, Prisma.EspecialidadeUncheckedCreateWithoutMedicoInput>;
};
export type EspecialidadeUpsertWithoutMedicoInput = {
    update: Prisma.XOR<Prisma.EspecialidadeUpdateWithoutMedicoInput, Prisma.EspecialidadeUncheckedUpdateWithoutMedicoInput>;
    create: Prisma.XOR<Prisma.EspecialidadeCreateWithoutMedicoInput, Prisma.EspecialidadeUncheckedCreateWithoutMedicoInput>;
    where?: Prisma.EspecialidadeWhereInput;
};
export type EspecialidadeUpdateToOneWithWhereWithoutMedicoInput = {
    where?: Prisma.EspecialidadeWhereInput;
    data: Prisma.XOR<Prisma.EspecialidadeUpdateWithoutMedicoInput, Prisma.EspecialidadeUncheckedUpdateWithoutMedicoInput>;
};
export type EspecialidadeUpdateWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUpdateManyWithoutEspecialidadeNestedInput;
};
export type EspecialidadeUncheckedUpdateWithoutMedicoInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consulta?: Prisma.ConsultaUncheckedUpdateManyWithoutEspecialidadeNestedInput;
};
export type EspecialidadeCreateWithoutConsultaInput = {
    Id?: string;
    especialidade: string;
    descricao: string;
    img?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    medico?: Prisma.MedicoCreateNestedManyWithoutEspecialidadeInput;
};
export type EspecialidadeUncheckedCreateWithoutConsultaInput = {
    Id?: string;
    especialidade: string;
    descricao: string;
    img?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    medico?: Prisma.MedicoUncheckedCreateNestedManyWithoutEspecialidadeInput;
};
export type EspecialidadeCreateOrConnectWithoutConsultaInput = {
    where: Prisma.EspecialidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EspecialidadeCreateWithoutConsultaInput, Prisma.EspecialidadeUncheckedCreateWithoutConsultaInput>;
};
export type EspecialidadeUpsertWithoutConsultaInput = {
    update: Prisma.XOR<Prisma.EspecialidadeUpdateWithoutConsultaInput, Prisma.EspecialidadeUncheckedUpdateWithoutConsultaInput>;
    create: Prisma.XOR<Prisma.EspecialidadeCreateWithoutConsultaInput, Prisma.EspecialidadeUncheckedCreateWithoutConsultaInput>;
    where?: Prisma.EspecialidadeWhereInput;
};
export type EspecialidadeUpdateToOneWithWhereWithoutConsultaInput = {
    where?: Prisma.EspecialidadeWhereInput;
    data: Prisma.XOR<Prisma.EspecialidadeUpdateWithoutConsultaInput, Prisma.EspecialidadeUncheckedUpdateWithoutConsultaInput>;
};
export type EspecialidadeUpdateWithoutConsultaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medico?: Prisma.MedicoUpdateManyWithoutEspecialidadeNestedInput;
};
export type EspecialidadeUncheckedUpdateWithoutConsultaInput = {
    Id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidade?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    img?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    medico?: Prisma.MedicoUncheckedUpdateManyWithoutEspecialidadeNestedInput;
};
/**
 * Count Type EspecialidadeCountOutputType
 */
export type EspecialidadeCountOutputType = {
    medico: number;
    consulta: number;
};
export type EspecialidadeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    medico?: boolean | EspecialidadeCountOutputTypeCountMedicoArgs;
    consulta?: boolean | EspecialidadeCountOutputTypeCountConsultaArgs;
};
/**
 * EspecialidadeCountOutputType without action
 */
export type EspecialidadeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadeCountOutputType
     */
    select?: Prisma.EspecialidadeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EspecialidadeCountOutputType without action
 */
export type EspecialidadeCountOutputTypeCountMedicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
};
/**
 * EspecialidadeCountOutputType without action
 */
export type EspecialidadeCountOutputTypeCountConsultaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultaWhereInput;
};
export type EspecialidadeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    especialidade?: boolean;
    descricao?: boolean;
    img?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    medico?: boolean | Prisma.Especialidade$medicoArgs<ExtArgs>;
    consulta?: boolean | Prisma.Especialidade$consultaArgs<ExtArgs>;
    _count?: boolean | Prisma.EspecialidadeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["especialidade"]>;
export type EspecialidadeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    especialidade?: boolean;
    descricao?: boolean;
    img?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["especialidade"]>;
export type EspecialidadeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    Id?: boolean;
    especialidade?: boolean;
    descricao?: boolean;
    img?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["especialidade"]>;
export type EspecialidadeSelectScalar = {
    Id?: boolean;
    especialidade?: boolean;
    descricao?: boolean;
    img?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EspecialidadeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"Id" | "especialidade" | "descricao" | "img" | "createdAt" | "updatedAt", ExtArgs["result"]["especialidade"]>;
export type EspecialidadeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    medico?: boolean | Prisma.Especialidade$medicoArgs<ExtArgs>;
    consulta?: boolean | Prisma.Especialidade$consultaArgs<ExtArgs>;
    _count?: boolean | Prisma.EspecialidadeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EspecialidadeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EspecialidadeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EspecialidadePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Especialidade";
    objects: {
        medico: Prisma.$MedicoPayload<ExtArgs>[];
        consulta: Prisma.$ConsultaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        Id: string;
        especialidade: string;
        descricao: string;
        img: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["especialidade"]>;
    composites: {};
};
export type EspecialidadeGetPayload<S extends boolean | null | undefined | EspecialidadeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload, S>;
export type EspecialidadeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EspecialidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EspecialidadeCountAggregateInputType | true;
};
export interface EspecialidadeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Especialidade'];
        meta: {
            name: 'Especialidade';
        };
    };
    /**
     * Find zero or one Especialidade that matches the filter.
     * @param {EspecialidadeFindUniqueArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadeFindUniqueArgs>(args: Prisma.SelectSubset<T, EspecialidadeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Especialidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadeFindUniqueOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EspecialidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Especialidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadeFindFirstArgs>(args?: Prisma.SelectSubset<T, EspecialidadeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Especialidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EspecialidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidades
     * const especialidades = await prisma.especialidade.findMany()
     *
     * // Get first 10 Especialidades
     * const especialidades = await prisma.especialidade.findMany({ take: 10 })
     *
     * // Only select the `Id`
     * const especialidadeWithIdOnly = await prisma.especialidade.findMany({ select: { Id: true } })
     *
     */
    findMany<T extends EspecialidadeFindManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Especialidade.
     * @param {EspecialidadeCreateArgs} args - Arguments to create a Especialidade.
     * @example
     * // Create one Especialidade
     * const Especialidade = await prisma.especialidade.create({
     *   data: {
     *     // ... data to create a Especialidade
     *   }
     * })
     *
     */
    create<T extends EspecialidadeCreateArgs>(args: Prisma.SelectSubset<T, EspecialidadeCreateArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Especialidades.
     * @param {EspecialidadeCreateManyArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidade = await prisma.especialidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EspecialidadeCreateManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Especialidades and returns the data saved in the database.
     * @param {EspecialidadeCreateManyAndReturnArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidade = await prisma.especialidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Especialidades and only return the `Id`
     * const especialidadeWithIdOnly = await prisma.especialidade.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EspecialidadeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EspecialidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Especialidade.
     * @param {EspecialidadeDeleteArgs} args - Arguments to delete one Especialidade.
     * @example
     * // Delete one Especialidade
     * const Especialidade = await prisma.especialidade.delete({
     *   where: {
     *     // ... filter to delete one Especialidade
     *   }
     * })
     *
     */
    delete<T extends EspecialidadeDeleteArgs>(args: Prisma.SelectSubset<T, EspecialidadeDeleteArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Especialidade.
     * @param {EspecialidadeUpdateArgs} args - Arguments to update one Especialidade.
     * @example
     * // Update one Especialidade
     * const especialidade = await prisma.especialidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EspecialidadeUpdateArgs>(args: Prisma.SelectSubset<T, EspecialidadeUpdateArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Especialidades.
     * @param {EspecialidadeDeleteManyArgs} args - Arguments to filter Especialidades to delete.
     * @example
     * // Delete a few Especialidades
     * const { count } = await prisma.especialidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EspecialidadeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidades
     * const especialidade = await prisma.especialidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EspecialidadeUpdateManyArgs>(args: Prisma.SelectSubset<T, EspecialidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Especialidades and returns the data updated in the database.
     * @param {EspecialidadeUpdateManyAndReturnArgs} args - Arguments to update many Especialidades.
     * @example
     * // Update many Especialidades
     * const especialidade = await prisma.especialidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Especialidades and only return the `Id`
     * const especialidadeWithIdOnly = await prisma.especialidade.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspecialidadeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EspecialidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Especialidade.
     * @param {EspecialidadeUpsertArgs} args - Arguments to update or create a Especialidade.
     * @example
     * // Update or create a Especialidade
     * const especialidade = await prisma.especialidade.upsert({
     *   create: {
     *     // ... data to create a Especialidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidade we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadeUpsertArgs>(args: Prisma.SelectSubset<T, EspecialidadeUpsertArgs<ExtArgs>>): Prisma.Prisma__EspecialidadeClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeCountArgs} args - Arguments to filter Especialidades to count.
     * @example
     * // Count the number of Especialidades
     * const count = await prisma.especialidade.count({
     *   where: {
     *     // ... the filter for the Especialidades we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadeCountArgs>(args?: Prisma.Subset<T, EspecialidadeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EspecialidadeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadeAggregateArgs>(args: Prisma.Subset<T, EspecialidadeAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadeAggregateType<T>>;
    /**
     * Group by Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EspecialidadeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EspecialidadeGroupByArgs['orderBy'];
    } : {
        orderBy?: EspecialidadeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EspecialidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Especialidade model
     */
    readonly fields: EspecialidadeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Especialidade.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EspecialidadeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    medico<T extends Prisma.Especialidade$medicoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Especialidade$medicoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consulta<T extends Prisma.Especialidade$consultaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Especialidade$consultaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Especialidade model
 */
export interface EspecialidadeFieldRefs {
    readonly Id: Prisma.FieldRef<"Especialidade", 'String'>;
    readonly especialidade: Prisma.FieldRef<"Especialidade", 'String'>;
    readonly descricao: Prisma.FieldRef<"Especialidade", 'String'>;
    readonly img: Prisma.FieldRef<"Especialidade", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Especialidade", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Especialidade", 'DateTime'>;
}
/**
 * Especialidade findUnique
 */
export type EspecialidadeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidade to fetch.
     */
    where: Prisma.EspecialidadeWhereUniqueInput;
};
/**
 * Especialidade findUniqueOrThrow
 */
export type EspecialidadeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidade to fetch.
     */
    where: Prisma.EspecialidadeWhereUniqueInput;
};
/**
 * Especialidade findFirst
 */
export type EspecialidadeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: Prisma.EspecialidadeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: Prisma.EspecialidadeOrderByWithRelationInput | Prisma.EspecialidadeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Especialidades.
     */
    cursor?: Prisma.EspecialidadeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Especialidades.
     */
    distinct?: Prisma.EspecialidadeScalarFieldEnum | Prisma.EspecialidadeScalarFieldEnum[];
};
/**
 * Especialidade findFirstOrThrow
 */
export type EspecialidadeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: Prisma.EspecialidadeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: Prisma.EspecialidadeOrderByWithRelationInput | Prisma.EspecialidadeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Especialidades.
     */
    cursor?: Prisma.EspecialidadeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Especialidades.
     */
    distinct?: Prisma.EspecialidadeScalarFieldEnum | Prisma.EspecialidadeScalarFieldEnum[];
};
/**
 * Especialidade findMany
 */
export type EspecialidadeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * Filter, which Especialidades to fetch.
     */
    where?: Prisma.EspecialidadeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: Prisma.EspecialidadeOrderByWithRelationInput | Prisma.EspecialidadeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Especialidades.
     */
    cursor?: Prisma.EspecialidadeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Especialidades.
     */
    skip?: number;
    distinct?: Prisma.EspecialidadeScalarFieldEnum | Prisma.EspecialidadeScalarFieldEnum[];
};
/**
 * Especialidade create
 */
export type EspecialidadeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Especialidade.
     */
    data: Prisma.XOR<Prisma.EspecialidadeCreateInput, Prisma.EspecialidadeUncheckedCreateInput>;
};
/**
 * Especialidade createMany
 */
export type EspecialidadeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidades.
     */
    data: Prisma.EspecialidadeCreateManyInput | Prisma.EspecialidadeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Especialidade createManyAndReturn
 */
export type EspecialidadeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * The data used to create many Especialidades.
     */
    data: Prisma.EspecialidadeCreateManyInput | Prisma.EspecialidadeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Especialidade update
 */
export type EspecialidadeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Especialidade.
     */
    data: Prisma.XOR<Prisma.EspecialidadeUpdateInput, Prisma.EspecialidadeUncheckedUpdateInput>;
    /**
     * Choose, which Especialidade to update.
     */
    where: Prisma.EspecialidadeWhereUniqueInput;
};
/**
 * Especialidade updateMany
 */
export type EspecialidadeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidades.
     */
    data: Prisma.XOR<Prisma.EspecialidadeUpdateManyMutationInput, Prisma.EspecialidadeUncheckedUpdateManyInput>;
    /**
     * Filter which Especialidades to update
     */
    where?: Prisma.EspecialidadeWhereInput;
    /**
     * Limit how many Especialidades to update.
     */
    limit?: number;
};
/**
 * Especialidade updateManyAndReturn
 */
export type EspecialidadeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * The data used to update Especialidades.
     */
    data: Prisma.XOR<Prisma.EspecialidadeUpdateManyMutationInput, Prisma.EspecialidadeUncheckedUpdateManyInput>;
    /**
     * Filter which Especialidades to update
     */
    where?: Prisma.EspecialidadeWhereInput;
    /**
     * Limit how many Especialidades to update.
     */
    limit?: number;
};
/**
 * Especialidade upsert
 */
export type EspecialidadeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Especialidade to update in case it exists.
     */
    where: Prisma.EspecialidadeWhereUniqueInput;
    /**
     * In case the Especialidade found by the `where` argument doesn't exist, create a new Especialidade with this data.
     */
    create: Prisma.XOR<Prisma.EspecialidadeCreateInput, Prisma.EspecialidadeUncheckedCreateInput>;
    /**
     * In case the Especialidade was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EspecialidadeUpdateInput, Prisma.EspecialidadeUncheckedUpdateInput>;
};
/**
 * Especialidade delete
 */
export type EspecialidadeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
    /**
     * Filter which Especialidade to delete.
     */
    where: Prisma.EspecialidadeWhereUniqueInput;
};
/**
 * Especialidade deleteMany
 */
export type EspecialidadeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidades to delete
     */
    where?: Prisma.EspecialidadeWhereInput;
    /**
     * Limit how many Especialidades to delete.
     */
    limit?: number;
};
/**
 * Especialidade.medico
 */
export type Especialidade$medicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
/**
 * Especialidade.consulta
 */
export type Especialidade$consultaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Especialidade without action
 */
export type EspecialidadeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: Prisma.EspecialidadeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: Prisma.EspecialidadeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EspecialidadeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Especialidade.d.ts.map