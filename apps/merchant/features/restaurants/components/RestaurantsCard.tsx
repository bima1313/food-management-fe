"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { FC } from "react";
import { restaurants } from "../models/restaurant";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface restaurantProps {
  restaurantsData: restaurants;
}
const RestaurantsCard: FC<restaurantProps> = ({ restaurantsData }) => {
  const route = useRouter();
  return (
    <ul className="w-full grid gap-4 grid-cols-3 lg:grid-cols-4 h-0 bg-red-400">
      {restaurantsData.restaurants.map((data) => {
        return (
          <li className="w-full mx-auto" key={data.id}>
            <Link href={`/dashboard/restaurants/${data.id}`}>
              <Card
                onClick={() => {
                  route.push(`/dashboard/restaurants/details`);
                }}
              >
                <CardHeader>
                  <CardTitle className="text-center text-xs sm:text-base md:text-xl xl:text-3xl">
                    {data.name}
                  </CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter></CardFooter>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RestaurantsCard;
