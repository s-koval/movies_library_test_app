import { Prisma, Users } from "@prisma/client";

export type TUser = Users;

export type TUsersFindFirstProps = Prisma.UsersFindFirstArgs;

export type TUserJwtPayload = {
  id: string;
};
