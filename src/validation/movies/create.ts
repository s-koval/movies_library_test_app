import * as yup from "yup";

const createMovieSchema = yup.object({
  title: yup.string().min(3).required(),
  publishYear: yup
    .string()
    .required()
    .test("isValidYear", "Publish year is invalid", (value) => {
      if (!RegExp(/\d*/).test(value)) {
        return false;
      }

      const val = parseInt(value);

      return !isNaN(val) && val >= 1900 && val <= 2100;
    }),
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
