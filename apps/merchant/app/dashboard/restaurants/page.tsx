import RestaurantsCard from "@/features/restaurants/components/RestaurantsCard";
import { getRestaurantsService } from "@/features/restaurants/service/getRestaurantService";

export default async function Page() {
  const restaurantsData = await getRestaurantsService();
  return (
    <div className="m-4">
      <RestaurantsCard restaurantsData={restaurantsData.data} />
    </div>
  );
}
