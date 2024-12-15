import { TUser, TUsersFindFirstProps } from "@core/types/services/user";

import { IUserService } from "@core/interfaces/services/user";

import prismaClient from "../db";

export class UserService implements IUserService {
  async findFirst(props: TUsersFindFirstProps): Promise<TUser | null> {
    return await prismaClient.users.findFirst(props);
  }
}
