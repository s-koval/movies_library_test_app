"use client";

import { FC, Suspense } from "react";

import dynamic from "next/dynamic";

import MovieList from "../MovieList";

import Styled from "./styled";

const HomeHeading = dynamic(() => import("../HomeHeading"), { ssr: false });

const HomeContent: FC = () => {
  return (
    <Styled.Wrapper>
      <Suspense>
        <HomeHeading />
        <MovieList />
      </Suspense>
    </Styled.Wrapper>
  );
};

export default HomeContent;
