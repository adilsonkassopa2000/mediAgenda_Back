## Descrição do projecto (Casos de uso)

# CASO DE USO DO NEGOCIO

-CRIAR CONTA
-FAZER LOGIN
-CONSULTAR CONSULTAS PENDENTES OU CONFIRMADAS(PROXIMAS CONSULTAS)
-CONSULTAR CONSULTAS REALIZADAS(HISTORICO)
-AGENDAR CONSULTA
-COMENTAR ACERCA DO ATENDIMENTO
-GERAR COMPROVATIVO DA CONSULTA
-CANCELAR CONSULTA


# CASO DE USO DO SISTEMA
    ## ADMIN@GERAL
        -CONSULTAR CONSULTAS AGENDADAS 
        -ADICIONAR MEDICOS
        -CONSULTAR MEDICOS
        -CONSULTAR ESTATISTICAS
    
    ## MEDICO
        -CONSULTAR CONSULTAS MARCADAS
        -CONFIRMAR CONSULTAS
        -ADICIONAR VAGAS



## MODELOS E TABELAS 
    ##USERS
        -Id
        -email
        -senha
        -createdAt
        -updatedAt

        
    ##MEDICO
        -Id
        -nome
        -escola
        -experiencia
        -especialidadeId
        -estadoId?
        -userId
        -createdAt
        -updatedAt
    ##PACIENTE
        -Id
        -nome
        -NIF
        -SNS
        -data
        -sexo
        -phone
        -morada
        -userId
        -createdAt
        -updatedAt

    ##ESPECIALIDADES
        -Id
        -nome
        -descricao
        -img
        -createdAt
        -updatedAt


    ## CONSULTAS
        -Id
        -pacienteId
        -medicoId
        -especialidadeId
        -data
        -hora
        -estadoId
        -createdAt
        -updatedAt

    ## ESTADOS
        -Id
        -estado
        -createdAt
        -updatedAt

    ##VAGAS
        -Id
        -DATA
        -medicoId
        -createdAt
        -updatedAt