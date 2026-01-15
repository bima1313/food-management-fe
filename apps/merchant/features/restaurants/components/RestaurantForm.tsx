"use client";

import { FC } from "react";
import { Controller } from "react-hook-form";
import { Toaster } from "sonner";

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
import FormCard from "@/components/FormCard";
import { useCreateRestaurant } from "../hooks/useCreateRestaurant";

const RestaurantForm: FC = () => {
  const { form, onSubmit } = useCreateRestaurant();

  return (
    <FormCard
      className="my-4 md:mx-auto"
      title="Restaurant"
      footer={
        <div className="w-full grid grid-cols-2 gap-3">
          <Button
            onClick={() => form.reset()}
            className="w-full h-12 cursor-pointer"
            variant={"outline"}
            type="button"
            form="Restaurant-form"
          >
            Reset
          </Button>
          <Button
            className="w-full h-12 cursor-pointer"
            type="submit"
            form="Restaurant-form"
          >
            Add Restaurant
          </Button>
        </div>
      }
    >
      <form id="Restaurant-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="Restaurant-form-name">
                  Restaurant
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
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="Restaurant-form-address">
                  Address
                </FieldLabel>
                <Input
                  {...field}
                  className="pas"
                  id="Restaurant-form-address"
                  aria-invalid={fieldState.invalid}
                  placeholder="M.H. Thamrin Street, Jakarta, Indonesia"
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
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="is-dine-in">Dine-In Service</FieldLabel>
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
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="is-take-away">
                  Take Away Service
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
        <Toaster />
      </form>
    </FormCard>
  );
};

export default RestaurantForm;
