import api from "@core/services/api";

import {
  TFetchMoviesQueryProps,
  TFetchMoviesQueryResponse,
} from "@core/types/services/api/movie";

const fetchMoviesQuery = async (props: TFetchMoviesQueryProps = {}) => {
  const response = await api.get<TFetchMoviesQueryResponse>("/movies", {
    params: props,
  });

  return response.data;
};

export default fetchMoviesQuery;
