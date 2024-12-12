import api from "@core/services/api";

import { TFetchMoviesQueryResponse } from "@core/types/services/api/movie";

const fetchMoviesQuery = async () => {
  const response = await api.get<TFetchMoviesQueryResponse>("/movies");

  return response.data;
};

export default fetchMoviesQuery;
