"use client";

import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@workspace/ui/components/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { restaurant } from "../models/restaurant";
import { restaurantSchema } from "../models/restaurantSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@workspace/ui/components/badge";
import { Textarea } from "@workspace/ui/components/textarea";
import { Separator } from "@workspace/ui/components/separator";
interface restaurantDetails {
  restaurantData: restaurant;
}
const RestaurantDetails: FC<restaurantDetails> = ({ restaurantData }) => {
  const form = useForm<z.infer<typeof restaurantSchema>>({
    resolver: zodResolver(restaurantSchema),
    defaultValues: {
      name: restaurantData.name,
      address: restaurantData.address,
      settings: {
        isDineInEnabled: restaurantData.settings.isDineInEnabled,
        isTakeAwayEnabled: restaurantData.settings.isTakeAwayEnabled,
      },
    },
  });
  const onSubmit = async () => {
    form.reset();
  };
  return (
    <>    
    <div className="w-full lg:flex lg:justify-between">
      <div className="lg:w-1/2">
        <Badge variant="outline" className="w-fit mb-4">
          ID: {restaurantData.id}
        </Badge>
        <form id="Restaurant-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation={"horizontal"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel
                    htmlFor="Restaurant-form-name"
                    className="w-[4.3rem]"
                  >
                    Restaurant:
                  </FieldLabel>
                  <Input
                    {...field}
                    id="Restaurant-form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Mixue"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation={"horizontal"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel
                    htmlFor="Restaurant-form-address"
                    className="w-[5.4rem] sm:w-20"
                  >
                    Address:
                  </FieldLabel>
                  <Textarea
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
            <FieldLabel className="text-base">Settings</FieldLabel>
            <Controller
              name="settings.isDineInEnabled"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation={"horizontal"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="is-dine-in" className="w-1/2">
                    Dine-In Service:
                  </FieldLabel>
                  <Select
                    onValueChange={(val) => field.onChange(val === "true")}
                    value={field.value?.toString()}
                  >
                    <SelectTrigger
                      id="is-dine-in"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="true">Available</SelectItem>
                        <SelectItem value="false">Not Available</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="settings.isTakeAwayEnabled"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation={"horizontal"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor="is-take-away" className="w-1/2">
                    Take Away Service:
                  </FieldLabel>
                  <Select
                    onValueChange={(val) => field.onChange(val === "true")}
                    value={field.value?.toString()}
                  >
                    <SelectTrigger
                      id="is-take-away"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="true">Available</SelectItem>
                        <SelectItem value="false">Not Available</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </div>
      <div className="mt-8">
        <Button className="mr-4 w-full lg:w-auto">Edit Restaurant</Button>
        <Button
          className="block mt-6 md:mt-8 w-full lg:w-auto lg:mt-0 lg:inline"
          variant={"destructive"}
        >
          Delete Restaurant
        </Button>
      </div>
    </div>
    <h2 className="mt-8 font-bold text-3xl">Menus</h2>
    <Separator className="bg-black"/>
    </>
  );
};

export default RestaurantDetails;
