import { FC } from "react";

import { useMediaQuery } from "@uidotdev/usehooks";

import Typography from "@core/components/Typography";

import { TMovie } from "@core/types/services/movie";

import Styled from "./styled";

type TMovieCardProps = {
  movie: TMovie;
  onClick: (id: string) => void;
};

const MovieCard: FC<TMovieCardProps> = ({ movie, onClick }) => {
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <Styled.Wrapper onClick={() => onClick(movie.id)}>
      <Styled.Image src={`/uploads/${movie.image}`} />
      <Styled.Content>
        <Typography variant={isTablet ? "body" : "body-lg"} brightness={0}>
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
