import authGuard from "@core/guards/auth";
import { MovieService } from "@core/services/movie";
import { TAuthRequest } from "@core/types/api";
import { NextResponse } from "next/server";
import { errorMiddleware } from "@core/middlewares/error";
import createMovieSchema from "@core/validation/movies/create";
import { FileService } from "@core/services/file";

const movieService = new MovieService();
const fileService = new FileService();

const GET = async (req: TAuthRequest) => {
  const movies = await movieService.findMany({
    where: {
      userId: req.user.id,
    },
  });

  return NextResponse.json({ movies });
};

const POST = async (req: TAuthRequest) => {
  const body = await req.formData();

  const dto = await createMovieSchema.validate(body);

  const fileName = await fileService.upload(dto.image);

  await movieService.create({
    data: {
      title: dto.title,
      publishYear: dto.publishYear,
      image: fileName,
      userId: req.user.id,
    },
  });

  return NextResponse.json({}, { status: 201 });
};

const wrappedGET = errorMiddleware(authGuard(GET));
const wrappedPOST = errorMiddleware(authGuard(POST));

export { wrappedGET as GET, wrappedPOST as POST };
