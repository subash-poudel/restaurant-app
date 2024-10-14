import { MENU_ITEMS } from "@/app/menu";
import { MenuItem } from "@/app/models";

function getAllMenuItems(): MenuItem[] {
  const allItems: MenuItem[] = [];
  for(const [key, value] of Object.entries(MENU_ITEMS)) {
    if (key === "restaurantName" ) {
      continue;
    }
    allItems.push(...value);
  }
  return allItems;
}

function getItem(itemId: string): MenuItem {
  const allItems = getAllMenuItems();
  const item = allItems.find((item) => item.id.toString() === itemId);
  return item ?? MENU_ITEMS.appetizers[0];
}

export async function generateStaticParams() {
  const items = getAllMenuItems();

  return items.map((item) => ({
    itemId: encodeURIComponent(item.id),
  }));
}

export default function Item({ params }: { params: { itemId: string } }) {
  const { itemId } = params;
  const urlDecodedItemId = decodeURIComponent(itemId);
  const item = getItem(urlDecodedItemId);
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
