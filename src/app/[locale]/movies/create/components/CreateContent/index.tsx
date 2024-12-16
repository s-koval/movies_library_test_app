"use client";

import { FC } from "react";

import dynamic from "next/dynamic";

import CreateMovieForm from "../CreateMovieForm";

import Styled from "./styled";

const CreateHeading = dynamic(() => import("../CreateHeading"), { ssr: false });

const CreateContent: FC = () => {
  return (
    <Styled.Wrapper>
      <CreateHeading />
      <CreateMovieForm />
    </Styled.Wrapper>
  );
};

export default CreateContent;
