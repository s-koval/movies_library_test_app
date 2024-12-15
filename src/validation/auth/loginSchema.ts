import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("loginSchema.email.email")
    .required("loginSchema.email.required"),
  password: yup
    .string()
    .min(6, "loginSchema.password.min")
    .required("loginSchema.password.required"),
  rememberMe: yup.boolean().required("loginSchema.rememberMe.required"),
});

export default loginSchema;
