import { ChangeEvent } from "react";

export type TMovieForm = {
  title?: string;
  publishYear?: string;
  image?: File;
};

export type TMovieChangeHandler = <K extends keyof TMovieForm>(
  field: K
) => K extends "image"
  ? (file: File) => void
  : (evt: ChangeEvent<HTMLInputElement>) => void;
