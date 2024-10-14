import { MENU_ITEMS } from "@/app/menu";
import { MenuItem } from "@/app/models";
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
        <Link href={`/blog/${item.id}`} key={item.id}>
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

function getItem(itemId: string): MenuItem {
  const allItems = Object.values(MENU_ITEMS).reduce((items, acc) => {
    return [...items, ...acc];
  }, []) as MenuItem[];
  const item = allItems.find((item) => item.name === itemId);
  return item ?? MENU_ITEMS.appetizers[0];
}

export default function Item({ params }: { params: { itemId: string } }) {
  const { itemId } = params;
  const urlDecodedItemId = decodeURIComponent(itemId);
  const item = getItem(urlDecodedItemId);
  console.log({ itemId });
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Menu Item</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <p className="text-lg font-semibold text-gray-800 mt-4">{item.price}</p>
      </div>
    </div>
  );
}
