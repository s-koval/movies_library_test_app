import api from "@core/services/api";

import { TUpdateMovieData } from "@core/types/services/api/movie";

const updateMovieMutation = async (id: string, data: TUpdateMovieData) => {
  const formData = new FormData();

  Object.entries(data).forEach(([k, v]) => {
    formData.append(k, v);
  });

  await api.put("/movies/" + id, formData);
};

export default updateMovieMutation;
