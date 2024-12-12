"use client";

import { FC } from "react";

import HomeHeading from "../HomeHeading";
import MovieList from "../MovieList";

import Styled from "./styled";

const HomeContent: FC = () => {
  return (
    <Styled.Wrapper>
      <HomeHeading />
      <MovieList />
    </Styled.Wrapper>
  );
};

export default HomeContent;
