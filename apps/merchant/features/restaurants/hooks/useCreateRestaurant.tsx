"use client";

import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { restaurantSchema } from "../models/restaurantSchema";
import { createRestaurantService } from "../service/createRestaurantService";

export const useCreateRestaurant = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof restaurantSchema>>({
      resolver: zodResolver(restaurantSchema),
      defaultValues: {
        name: "",
        address: "",
        settings: {
          isDineInEnabled: true,
          isTakeAwayEnabled: false,
        },
      },
    });

  const onSubmit = async (values: z.infer<typeof restaurantSchema>) => {
    try {
      await createRestaurantService(values);

      form.reset();
      toast("Create restaurant Success", {
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
