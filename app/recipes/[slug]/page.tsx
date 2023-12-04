// import { createClient } from 'contentful'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import client from "@/lib/utils/contentful";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items?.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return paths as any;
}

const getRecipeData = async (params: any) => {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: { recipe: items[0] },
    revalidate: 1,
  } as any;
};

interface RecipeProps {
  params: any;
}

const Recipe: React.FC<RecipeProps> = async ({ params }) => {
  const recipe = (await getRecipeData(params)) as any;
  if (!recipe) return <h2>Loading...</h2>;


  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.props.recipe.fields;

  return (
    <Card size="2" className="w-1/3">
      
        <Inset clip="padding-box" side="top" pb="current">
        <Text as="div" size="5" weight="bold" className="p-5">
            {title}
            <Text as="div" size="2" color="gray">
            JUST takes {cookingTime} min to cook.
          </Text>
          </Text>
          
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            alt="Bold typography"
            className="block bg-gray-500 w-full"
          />
        </Inset>
        <Box>
           
        </Box>
        <Text as="p" size="3">
          <Strong>Method</Strong>
          <div>{documentToReactComponents(method)}</div>
        </Text>
    </Card>
  );
};

export default Recipe;
