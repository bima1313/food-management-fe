"use client";

import { FC } from "react";
import { Controller } from "react-hook-form";
import { Toaster } from "sonner";
import { Button } from "@workspace/ui/components/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";
import { useRouter } from "next/navigation";
import FormCard from "@/components/FormCard";
import { useLoginForm } from "../hooks/useLoginForm";

const LoginForm: FC = () => {
  const { form, onSubmit } = useLoginForm();
  const router = useRouter();

  function onRegisterClick() {
    router.push("/register");
  }

  return (
    <FormCard
      className="my-4 mx-4 md:mx-0"
      title="Login"
      footer={
        <Button
          className="w-full h-12 cursor-pointer"
          type="submit"
          form="login-form"
        >
          Login
        </Button>
      }
    >
      <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="login-form-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="login-form-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="test@gmail.com"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="login-form-password">Password</FieldLabel>
                <Input
                  {...field}
                  className="pas"
                  id="login-form-password"
                  aria-invalid={fieldState.invalid}
                  type="password"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <FieldDescription>
                  Don&apos;t have an account?
                  <Button
                    type="button"
                    onClick={onRegisterClick}
                    variant={"link"}
                    className="pl-2 cursor-pointer"
                  >
                    Register
                  </Button>
                </FieldDescription>
              </Field>
            )}
          />
        </FieldGroup>
        <Toaster />
      </form>
    </FormCard>
  );
};

export default LoginForm;
