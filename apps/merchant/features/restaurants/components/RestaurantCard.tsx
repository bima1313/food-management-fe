import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { FC } from "react";
import { restaurants } from "../models/restaurant";
interface restaurantProps {
  restaurantsData: restaurants;
}
const RestaurantCard: FC<restaurantProps> = ({
restaurantsData
}) => (
 restaurantsData.restaurants.map(data => {
    return (
        <Card key={data.id}
          className=
            "w-full max-w-md mx-auto border rounded-xl shadow-sm bg-card p-8"     
        >
          <CardHeader>
            <CardTitle className="text-center text-3xl">{data.name}</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
           <CardFooter></CardFooter>
        </Card>
    )
 })
);
export default RestaurantCard;
