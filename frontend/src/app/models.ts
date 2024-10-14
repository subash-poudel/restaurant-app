export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Menu {
  restaurantName: string;
  appetizers: MenuItem[];
  mainCourses: MenuItem[];
  desserts: MenuItem[];
  drinks: MenuItem[];
}
