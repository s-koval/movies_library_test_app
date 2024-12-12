import api from "@core/services/api";

import { TCreateMovieData } from "@core/types/services/api/movie";

const createMovieMutation = async (data: TCreateMovieData) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("publishYear", data.publishYear);
  formData.append("image", data.image);

  await api.post("/movies", formData);
};

export default createMovieMutation;
