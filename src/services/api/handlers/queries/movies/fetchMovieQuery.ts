import api from "@core/services/api";

import { TFetchMovieQueryResponse } from "@core/types/services/api/movie";

const fetchMovieQuery = async (id: string) => {
  const response = await api.get<TFetchMovieQueryResponse>("/movies/" + id);

  return response.data;
};

export default fetchMovieQuery;
