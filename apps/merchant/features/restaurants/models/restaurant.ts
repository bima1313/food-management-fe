export type restaurant = {
  id: string;
  name: string;
  address: string;
  settings: restaurantSettings;
  menus: [];
  rating: number;
};
export type restaurants = {
  restaurants: restaurant[];
}
export type getRestaurants = {
  token: string;
  tokenExpiredAt: number;
};
type restaurantSettings = {
  isDineInEnabled: boolean;
  isTakeAwayEnabled: boolean;
};
