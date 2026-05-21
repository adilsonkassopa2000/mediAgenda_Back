/*
  Warnings:

  - Added the required column `hora` to the `vagas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vagas" ADD COLUMN     "hora" TIMESTAMP(3) NOT NULL;
