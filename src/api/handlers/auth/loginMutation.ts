import api from "@core/api";

import { TLoginData } from "@core/types/api/auth";

const loginMutation = async (data: TLoginData) => {
  await api.post("/auth/login", data);
};

export default loginMutation;
