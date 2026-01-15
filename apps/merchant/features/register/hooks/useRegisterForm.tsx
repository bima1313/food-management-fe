"use";

import { toast } from "sonner";
import { registerSchema } from "../models/registerSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerService } from "../services/registerServices";

export const useRegisterForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      await registerService(values);
      form.reset();

      toast("Register Success", {
        onAutoClose() {
          router.push("/");
        },
        onDismiss() {
          router.push("/");
        },
        duration: 1200,
      });
    } catch (error) {
      toast("Error = " + error);
    }
  };

  return { form, onSubmit };
};
