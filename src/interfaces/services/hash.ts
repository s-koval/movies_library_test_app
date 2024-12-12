import { TCompareProps } from "@core/types/services/hash";

export interface IHashService {
  compare(props: TCompareProps): Promise<boolean>;
}
