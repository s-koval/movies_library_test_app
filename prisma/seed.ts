import { PrismaClient } from "@prisma/client";

import * as bcrypt from "bcrypt";

const client = new PrismaClient();

const main = async () => {
  const hashedPassword = await bcrypt.hash(
    "password",
    parseInt(process.env.HASH_SALT || "10")
  );

  await client.users.upsert({
    create: {
      email: "test@email.com",
      password: hashedPassword,
    },
    update: {},
    where: {
      email: "test@email.com",
    },
  });
};

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);

    await client.$disconnect();

    process.exit(1);
  });
