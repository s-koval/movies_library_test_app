-- CreateTable
CREATE TABLE "Movies" (
    "id" UUID NOT NULL,
    "title" VARCHAR NOT NULL,
    "publishYear" SMALLINT NOT NULL,
    "image" VARCHAR NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_id_key" ON "Movies"("id");
