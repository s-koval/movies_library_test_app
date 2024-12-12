import { Prisma, User } from "@prisma/client";

export type TUser = User;

export type TUserFindByProps = Prisma.UserFindFirstArgs;

export type TUserJwtPayload = {
  id: string;
};
