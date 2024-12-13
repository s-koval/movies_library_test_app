import { NextResponse } from "next/server";

import { MovieNotFoundError } from "@core/exceptions/movies";
import authGuard from "@core/guards/auth";
import editMovieSchema from "@core/validation/movies/edit";

import { FileService } from "@core/services/file";
import { MovieService } from "@core/services/movie";

import { errorMiddleware } from "@core/middlewares/error";

import { TAuthRequest, TDynamicSegments } from "@core/types/api";
import { TMovieUpdateProps } from "@core/types/services/movie";


const movieService = new MovieService();
const fileService = new FileService();

const GET = async (req: TAuthRequest, segments: TDynamicSegments) => {
  const { id } = await segments.params;

  const movie = await movieService.findBy({
    where: {
      userId: req.user.id,
      id,
    },
  });

  if (!movie) {
    throw new MovieNotFoundError();
  }

  return NextResponse.json(movie);
};

const PUT = async (req: TAuthRequest, segments: TDynamicSegments) => {
  const [{ id }, formData] = await Promise.all([
    segments.params,
    req.formData(),
  ]);

  const parsed = Object.fromEntries(formData.entries());

  const dto = await editMovieSchema.validate(parsed);

  const movie = await movieService.findBy({
    where: {
      userId: req.user.id,
      id,
    },
  });

  if (!movie) {
    throw new MovieNotFoundError();
  }

  const props: TMovieUpdateProps = {
    where: {
      id,
    },
    data: {
      title: dto.title,
    },
  };

  if (dto.publishYear) {
    props.data.publishYear = parseInt(dto.publishYear);
  }

  if (dto.image) {
    const fileName = await fileService.upload(dto.image);

    props.data.image = fileName;
  }

  await movieService.update(props);

  return NextResponse.json({});
};

const wrappedGET = errorMiddleware(authGuard(GET));
const wrappedPUT = errorMiddleware(authGuard(PUT));

export { wrappedGET as GET, wrappedPUT as PUT };
