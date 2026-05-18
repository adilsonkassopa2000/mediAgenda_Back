-- CreateTable
CREATE TABLE "users" (
    "Id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "Id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "escola" TEXT NOT NULL,
    "anoExperiencia" TEXT NOT NULL,
    "especialidadeId" TEXT NOT NULL,
    "estadoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "Id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "NIF" TEXT NOT NULL,
    "SNS" TEXT,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "morada" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "especialidades" (
    "Id" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "especialidades_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "consultas" (
    "Id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "especialidadeId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "estadoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "estados" (
    "Id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "estados_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "vagas" (
    "Id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "medicoId" TEXT NOT NULL,

    CONSTRAINT "vagas_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "medicos_userId_key" ON "medicos"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_userId_key" ON "pacientes"("userId");

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_especialidadeId_fkey" FOREIGN KEY ("especialidadeId") REFERENCES "especialidades"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estados"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pacientes" ADD CONSTRAINT "pacientes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estados"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_especialidadeId_fkey" FOREIGN KEY ("especialidadeId") REFERENCES "especialidades"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vagas" ADD CONSTRAINT "vagas_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
