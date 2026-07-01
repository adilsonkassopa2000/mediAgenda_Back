/*
  Warnings:

  - You are about to drop the column `data` on the `consultas` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `consultas` table. All the data in the column will be lost.
  - Added the required column `medicoId` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vagaId` to the `consultas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoId` to the `vagas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consultas" DROP COLUMN "data",
DROP COLUMN "hora",
ADD COLUMN     "medicoId" TEXT NOT NULL,
ADD COLUMN     "vagaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "vagas" ADD COLUMN     "estadoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "vagas"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vagas" ADD CONSTRAINT "vagas_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "estados"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
