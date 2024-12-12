import { FC } from "react";

import Typography from "@core/components/Typography";

import { TMovie } from "@core/types/services/movie";

import Styled from "./styled";

type TMovieCardProps = {
  movie: TMovie;
};

const MovieCard: FC<TMovieCardProps> = ({ movie }) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={`/uploads/${movie.image}`} />
      <Styled.Content>
        <Typography variant="body-lg" brightness={0}>
          {movie.title}
        </Typography>
        <Typography variant="body-sm" brightness={0}>
          {movie.publishYear}
        </Typography>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default MovieCard;
