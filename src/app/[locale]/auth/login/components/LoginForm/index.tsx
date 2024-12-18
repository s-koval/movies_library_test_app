"use client";

import { ChangeEvent, FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useParams, useRouter } from "next/navigation";

import loginSchema from "@core/validation/auth/loginSchema";

import Button from "@core/components/Button";
import CheckBox from "@core/components/CheckBox";
import HelperText from "@core/components/HelperText";
import Input from "@core/components/Input";
import Typography from "@core/components/Typography";

import { useLoginMutation } from "@core/services/api/hooks/mutations/auth/useLoginMutation";

import { TLoginForm } from "@core/types/forms/auth";

import Styled from "./styled";

const LoginForm: FC = () => {
  const { t } = useTranslation(["login", "messages", "validations"]);

  const isTablet = useMediaQuery("(max-width: 768px)");

  const router = useRouter();
  const params = useParams();

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
    reValidateMode: "onChange",
  });

  const { mutate } = useLoginMutation({
    onError: (err) => {
      toast.error(
        t(err.response?.data.message || "somethingWentWrong", {
          ns: "messages",
        })
      );
    },
    onSuccess: () => {
      router.push(`/${params.locale}`);
    },
  });

  const onChange = (field: keyof TLoginForm) => {
    if (field === "rememberMe") {
      return (evt: ChangeEvent<HTMLInputElement>) => {
        setValue("rememberMe", evt.target.checked);
      };
    }

    return (evt: ChangeEvent<HTMLInputElement>) => {
      setValue(field, evt.target.value);
    };
  };

  const onSubmit = (data: TLoginForm) => {
    mutate(data);
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        component="h1"
        variant={isTablet ? "h2" : "h1"}
        brightness={0}
      >
        {t("title")}
      </Typography>
      <Styled.Form.ControlsWrapper>
        <Styled.Form.Row>
          <Input
            label={t("email.label")}
            onChange={onChange("email")}
            value={watch("email")}
            type="email"
          />
          <HelperText
            value={
              errors?.email?.message &&
              t(errors?.email?.message, { ns: "validations" })
            }
            color="error"
          />
        </Styled.Form.Row>
        <Styled.Form.Row>
          <Input
            label={t("password.label")}
            onChange={onChange("password")}
            value={watch("password")}
            type="password"
          />
          <HelperText
            value={
              errors?.password?.message &&
              t(errors?.password?.message, { ns: "validations" })
            }
            color="error"
          />
        </Styled.Form.Row>
      </Styled.Form.ControlsWrapper>
      <CheckBox
        label={t("rememberMe.label")}
        onChange={onChange("rememberMe")}
        checked={watch("rememberMe")}
      />
      <Button>{t("loginBtn")}</Button>
    </Styled.Form>
  );
};

export default LoginForm;
