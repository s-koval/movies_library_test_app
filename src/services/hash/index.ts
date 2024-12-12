import * as bcrypt from "bcrypt";

import { TCompareProps } from "@core/types/services/hash";

import { IHashService } from "@core/interfaces/services/hash";

export class HashService implements IHashService {
  async compare(props: TCompareProps): Promise<boolean> {
    return await bcrypt.compare(props.value, props.hash);
  }
}
