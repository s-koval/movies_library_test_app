import { TUsersFindFirstProps, TUser } from "@core/types/services/user";

export interface IUserService {
  findFirst(props: TUsersFindFirstProps): Promise<TUser | null>;
}
