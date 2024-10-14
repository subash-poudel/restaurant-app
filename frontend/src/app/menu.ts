import { Menu } from "./models";

export const MENU_ITEMS: Menu = {
  restaurantName: "{{restaurant_name}}",
  appetizers: [
    {
      id: 1,
      name: "Spring Rolls",
      price: 5.99,
      description: "Crispy rolls with vegetable filling",
    },
    {
      id: 2,
      name: "Garlic Bread",
      price: 3.99,
      description: "Toasted bread with garlic butter",
    },
  ],
  mainCourses: [
    {
      id: 3,
      name: "Grilled Chicken",
      price: 12.99,
      description: "Served with mashed potatoes and salad",
    },
    {
      id: 4,
      name: "Vegetarian Pizza",
      price: 10.99,
      description: "Pizza topped with fresh vegetables",
    },
  ],
  desserts: [
    {
      id: 5,
      name: "Chocolate Cake",
      price: 6.5,
      description: "Rich chocolate cake with ganache",
    },
    {
      id: 6,
      name: "Ice Cream",
      price: 4.99,
      description: "Vanilla, chocolate, or strawberry",
    },
  ],
  drinks: [
    {
      id: 7,
      name: "Coca-Cola",
      price: 1.99,
      description: "Cold and refreshing soda",
    },
    {
      id: 8,
      name: "Orange Juice",
      price: 2.5,
      description: "Freshly squeezed orange juice",
    },
  ],
};
