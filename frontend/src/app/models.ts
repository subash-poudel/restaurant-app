export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Menu {
  appetizers: MenuItem[];
  mainCourses: MenuItem[];
  desserts: MenuItem[];
  drinks: MenuItem[];
}
