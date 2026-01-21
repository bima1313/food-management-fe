import ImageCard from "@/features/profile/components/ImageCard";
import { Button } from "@workspace/ui/components/button";
import {
  FieldGroup,
  Field,
  FieldLabel,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";

export default function Page() {
  return (
    <>
      <ImageCard />
      <div className="w-full my-8 px-8">
        <form id="Restaurant-form">
          <FieldGroup>
            <Field data-disabled orientation={"horizontal"}>
              <FieldLabel htmlFor="name-disabled" className="w-[4.3rem]">
                Username:
              </FieldLabel>
              <Input
                id="name-disabled"
                placeholder="Mixue"
                autoComplete="off"
                disabled
              />
            </Field>
            <Field orientation={"horizontal"}>
              <FieldLabel htmlFor="register-form-email" className="w-[4.3rem]">
                Email
              </FieldLabel>
              <Input
                id="register-form-email"
                placeholder="test@gmail.com"
                autoComplete="off"
              />
            </Field>
            <Field orientation={"horizontal"}>
              <FieldLabel htmlFor="Restaurant-form-name" className="w-[4.3rem]">
                Name:
              </FieldLabel>
              <Input
                id="Restaurant-form-name"
                placeholder="Mixue"
                autoComplete="off"
              />
            </Field>
          </FieldGroup>
        </form>
      </div>
      <div className="lg:flex justify-center gap-8 mt-10 px-8">
        <Button className=" w-full lg:mr-4 lg:w-auto" size={"lg"}>Edit Profile</Button>
        <Button
          className="mt-6 md:mt-8 w-full lg:w-auto lg:mt-0"
          variant={"destructive"}
          size={"lg"}
        >
          Delete Account
        </Button>
      </div>
    </>
  );
}
