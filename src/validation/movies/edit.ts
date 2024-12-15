import * as yup from "yup";

const editMovieSchema = yup.object({
  title: yup.string().min(3, "movieSchema.title.min"),
  publishYear: yup
    .string()
    .test("isValidYear", "movieSchema.publishYear.test", (value) => {
      if (!value) {
        return true;
      }

      if (!RegExp(/\d*/).test(value)) {
        return false;
      }

      const val = parseInt(value);

      return !isNaN(val) && val >= 1900 && val <= 2100;
    }),
  image: yup
    .mixed<File>()
    .test("isImage", "movieSchema.image.test", (value) =>
      value ? value instanceof File : true
    )
    .test("isValidExt", "movieSchema.image.test", (value) =>
      value ? RegExp(/(jpeg|png|tiff|webp)$/).test(value.name) : true
    ),
});

export default editMovieSchema;
