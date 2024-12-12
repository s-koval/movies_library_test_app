import { Prisma, User } from "@prisma/client";

// Data defenitions

export type TUser = User;

// Functions props

export type TUserFindByProps = Prisma.UserFindFirstArgs;
