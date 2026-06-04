-- Add column `crm` to medicos
PRAGMA foreign_keys=off;
BEGIN TRANSACTION;
ALTER TABLE "medicos" ADD COLUMN "crm" TEXT;
COMMIT;
PRAGMA foreign_keys=on;
