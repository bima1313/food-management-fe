"use client";

import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../models/LoginSchema";
import { loginService } from "../service/loginService";

export const useLoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      await loginService(values);

      form.reset();
      toast("Login Success", {
        onAutoClose() {
          router.push("/dashboard");
        },
        onDismiss() {
          router.push("/dashboard");
        },
        duration: 1200,
      });
    } catch (error) {
      toast("" + error);
    }
  };
  return { form, onSubmit };
};
