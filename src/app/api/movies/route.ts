import { NextResponse } from "next/server";

import authGuard from "@core/guards/auth";
import createMovieSchema from "@core/validation/movies/create";

import { FileService } from "@core/services/file";
import { MovieService } from "@core/services/movie";

import { errorMiddleware } from "@core/middlewares/error";

import { TAuthRequest } from "@core/types/api";



const movieService = new MovieService();
const fileService = new FileService();

const GET = async (req: TAuthRequest) => {
  const where = {
    userId: req.user.id,
  };

  const [movies, total] = await Promise.all([
    movieService.findMany({
      where,
    }),
    movieService.count({ where }),
  ]);

  return NextResponse.json({ movies, total });
};

const POST = async (req: TAuthRequest) => {
  const formData = await req.formData();

  const parsed = Object.fromEntries(formData.entries());

  console.log(parsed);

  const dto = await createMovieSchema.validate(parsed);

  const fileName = await fileService.upload(dto.image);

  await movieService.create({
    data: {
      title: dto.title,
      publishYear: parseInt(dto.publishYear),
      image: fileName,
      userId: req.user.id,
    },
  });

  return NextResponse.json({}, { status: 201 });
};

const wrappedGET = errorMiddleware(authGuard(GET));
const wrappedPOST = errorMiddleware(authGuard(POST));

export { wrappedGET as GET, wrappedPOST as POST };
