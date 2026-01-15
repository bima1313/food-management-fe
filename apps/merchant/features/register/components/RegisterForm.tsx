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
import { useRegisterForm } from "../hooks/useRegisterForm";

const RegisterForm: FC = () => {
  const { form, onSubmit } = useRegisterForm();
  const router = useRouter();

  function onLoginClick() {
    router.push("/");
  }

  return (
    <FormCard
      title="Register"
      footer={
        <Button
          className="w-full h-12 cursor-pointer"
          type="submit"
          form="register-form"
        >
          Register
        </Button>
      }
    >
      <form id="register-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="register-form-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="register-form-email"
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
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="register-form-username">
                  Username
                </FieldLabel>
                <Input
                  {...field}
                  id="register-form-username"
                  aria-invalid={fieldState.invalid}
                  placeholder="test2625"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="register-form-name">Name</FieldLabel>
                <Input
                  {...field}
                  id="register-form-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="test"
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
                <FieldLabel htmlFor="register-form-password">
                  Password
                </FieldLabel>
                <Input
                  {...field}
                  className="pas"
                  id="register-form-password"
                  aria-invalid={fieldState.invalid}
                  type="password"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <FieldDescription>
                  Have an account?
                  <Button
                    type="button"
                    onClick={onLoginClick}
                    variant={"link"}
                    className="pl-2 cursor-pointer"
                  >
                    Login
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

export default RegisterForm;
