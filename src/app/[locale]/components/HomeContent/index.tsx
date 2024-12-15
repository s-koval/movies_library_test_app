"use client";

import { FC } from "react";

import dynamic from "next/dynamic";

import MovieList from "../MovieList";

import Styled from "./styled";

const HomeHeading = dynamic(() => import("../HomeHeading"), { ssr: false });

const HomeContent: FC = () => {
  return (
    <Styled.Wrapper>
      <HomeHeading />
      <MovieList />
    </Styled.Wrapper>
  );
};

export default HomeContent;
