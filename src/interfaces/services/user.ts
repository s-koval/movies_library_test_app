import { TUserFindByProps, TUser } from "@core/types/services/user";

export interface IUserService {
  findFirst(props: TUserFindByProps): Promise<TUser | null>;
}
