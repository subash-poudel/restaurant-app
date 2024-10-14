import { MENU_ITEMS } from "@/app/menu";
import { MenuItem } from "@/app/models";
// import { GetStaticPaths, GetStaticProps } from "next";

function getAllMenuItems(): MenuItem[] {
  const allItems = Object.values(MENU_ITEMS).reduce((items, acc) => {
    return [...items, ...acc];
  }, []) as MenuItem[];
  return allItems;
}

function getItem(itemId: string): MenuItem {
  const allItems = getAllMenuItems();
  const item = allItems.find((item) => item.name === itemId);
  return item ?? MENU_ITEMS.appetizers[0];
}

// export const getStaticPaths = (async () => {
//   const allPaths = getAllMenuItems().map((item) => {
//     return {
//       params: {
//         name: item.name,
//       },
//     };
//   });
//   return {
//     paths: allPaths,
//     fallback: true, // false or "blocking"
//   };
// }) satisfies GetStaticPaths;

// export const getInitialProps = (async (context) => {
//   console.log('next context', context);
//   const item = getItem(context.params.itemId);
//   return { props: { item } }
// }) satisfies GetStaticProps<{
//   item: MenuItem
// }>

export async function generateStaticParams() {
  const items = getAllMenuItems();

  return items.map((item) => ({
    itemId: item.name,
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
