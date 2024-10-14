import { MENU_ITEMS } from "./menu";
import { MenuItem } from "./models";
import Link from "next/link";

function MenuItemList({
  items,
  category,
}: {
  items: MenuItem[];
  category: string;
}) {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
        {category}
      </h2>
      {items.map((item) => (
        <Link href={`/items/${item.name}`} key={item.id}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-lg font-semibold text-gray-800 mt-4">
              {item.price}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Restaurant Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MenuItemList items={MENU_ITEMS.appetizers} category="Appetizers" />
        <MenuItemList items={MENU_ITEMS.desserts} category="Desserts" />
        <MenuItemList items={MENU_ITEMS.drinks} category="Drinks" />
        <MenuItemList items={MENU_ITEMS.mainCourses} category="Main Courses" />
      </div>
    </div>
  );
}
