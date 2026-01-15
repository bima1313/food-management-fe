import RestaurantCard from "@/features/restaurants/components/RestaurantCard";
import RestaurantEmpty from "@/features/restaurants/components/RestaurantEmpty";
import { getRestaurantsService } from "@/features/restaurants/service/getRestaurantService";

export default async function Page() {
  const restaurants = await getRestaurantsService();
  console.log(restaurants.data);
  console.log("setelah parsing ====" + restaurants.data.restaurants.at(0));
  return (
    <div className="flex w-full min-h-[85vh] items-center justify-center p-4">
      {restaurants.data != null ? <RestaurantCard restaurantsData={restaurants.data} /> : <RestaurantEmpty />}
    </div>
  );
}
