import { TUserFindByProps, TUser } from "@core/types/services/user";

export interface IUserService {
  findBy(props: TUserFindByProps): Promise<TUser | null>;
}
