import api from "@core/services/api";

import { TLoginData } from "@core/types/services/api/auth";

const loginMutation = async (data: TLoginData) => {
  await api.post("/auth/login", data);
};

export default loginMutation;
