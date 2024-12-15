import * as yup from "yup";

const createMovieSchema = yup.object({
  title: yup
    .string()
    .min(3, "movieSchema.title.min")
    .required("movieSchema.title.required"),
  publishYear: yup
    .string()
    .required("movieSchema.publishYear.required")
    .test("isValidYear", "movieSchema.publishYear.test", (value) => {
      if (!RegExp(/\d*/).test(value)) {
        return false;
      }

      const val = parseInt(value);

      return !isNaN(val) && val >= 1900 && val <= 2100;
    }),
  image: yup
    .mixed<File>()
    .required("movieSchema.image.required")
    .test("isImage", "movieSchema.image.test", (value) => value instanceof File)
    .test("isValidExt", "movieSchema.image.test", (value) =>
      RegExp(/(jpeg|png|tiff|webp)$/).test(value.name)
    ),
});

export default createMovieSchema;
