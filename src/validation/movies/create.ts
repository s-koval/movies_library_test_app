import * as yup from "yup";

const createMovieSchema = yup.object({
  title: yup.string().min(3).required(),
  publishYear: yup.number().min(1900).max(2100).required(),
  image: yup
    .mixed<File>()
    .required()
    .test(
      "isImage",
      "Uploaded media is invalid",
      (value) => value instanceof File
    )
    .test((value) => RegExp(/(jpeg|png|tiff|webp)$/).test(value.name)),
});

export default createMovieSchema;
