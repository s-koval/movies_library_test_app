import * as yup from "yup";

const editMovieSchema = yup.object({
  title: yup.string().min(3),
  publishYear: yup
    .string()
    .test("isValidYear", "Publish year is invalid", (value) => {
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
    .test("isImage", "Uploaded media is invalid", (value) =>
      value ? value instanceof File : true
    )
    .test((value) =>
      value ? RegExp(/(jpeg|png|tiff|webp)$/).test(value.name) : true
    ),
});

export default editMovieSchema;
