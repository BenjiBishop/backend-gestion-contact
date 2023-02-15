/*
  Warnings:

  - Added the required column `numero` to the `contact` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_contact" ("email", "id", "nom", "prenom") SELECT "email", "id", "nom", "prenom" FROM "contact";
DROP TABLE "contact";
ALTER TABLE "new_contact" RENAME TO "contact";
CREATE UNIQUE INDEX "contact_email_key" ON "contact"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
