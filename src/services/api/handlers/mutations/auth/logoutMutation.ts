import api from "@core/services/api";

const logoutMutation = async () => {
  await api.post("/auth/logout");
};

export default logoutMutation;
