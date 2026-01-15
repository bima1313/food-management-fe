"use client";

import { FC } from "react";
import { MdRestaurant } from "react-icons/md";

import { Button } from "@workspace/ui/components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import { useRouter } from "next/navigation";

const RestaurantEmpty: FC = () => {
  const router = useRouter();

  function onClick() {
    router.push("/dashboard/restaurants/create");
  }
  return (
    <Empty className="w-full max-w-md mx-auto border rounded-xl shadow-sm bg-card p-8">
      <EmptyHeader className="flex flex-col items-center text-center mb-6">
        <EmptyMedia variant="icon" className="mb-4">
          <MdRestaurant className="h-10 w-10 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle className="text-2xl font-bold">
          No Restaurants Found
        </EmptyTitle>
        <EmptyDescription className="text-muted-foreground mt-2">
          You don&apos;t have any restaurants yet. Would you like to create your
          first one?
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex justify-center">
        <Button onClick={onClick} className="w-full sm:w-auto min-w-[200px]">
          Create Restaurant
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export default RestaurantEmpty;
