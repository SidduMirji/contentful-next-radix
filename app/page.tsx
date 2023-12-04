// "use client"
import client from "@/lib/utils/contentful";
import ShowDataClient from "./components/ShowDataClient";
import RecipeCard from "./components/RecipeCard";
import { Flex } from "@radix-ui/themes";

async function getContentData() {
  try {
    const response = await client.getEntries({
      content_type: "recipe", // Replace with your Content Type ID
    });

    return {
      entries: response.items,
    };
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return {
      entries: [],
    };
  }
}

export default async function Home() {
  const data = (await getContentData()) as any;
  return (
    <main>
      <Flex gap="4" wrap="wrap" className="w-full" align="center">
        {data.entries?.map((item: any) => (
          <RecipeCard key={item.sys.id} recipe={item}/>
        ))}
      </Flex>

      <ShowDataClient data={data.entries} />
    </main>
  );
}
