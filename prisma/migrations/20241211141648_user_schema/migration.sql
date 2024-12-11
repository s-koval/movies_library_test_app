-- CreateTable
CREATE TABLE "User" (
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
