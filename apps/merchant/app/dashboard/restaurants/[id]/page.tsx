import RestaurantDetails from "@/features/restaurants/components/RestaurantDetails";
import { getRestaurantService } from "@/features/restaurants/service/getRestaurantService";

interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({params}: PageProps) {
  const {id} = await params;
  const restaurantDetails = await getRestaurantService(id);
  return (
    <div className="w-full h-screen p-6 md:p-10 flex flex-col overflow-hidden">
       <RestaurantDetails restaurantData={restaurantDetails.data} />
    </div>
  );
}
