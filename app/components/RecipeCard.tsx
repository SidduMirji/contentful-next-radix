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
import Link from "next/link";

interface RecipeCardProps {
  recipe: any;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { title, cookingTime, thumbnail, slug } = recipe.fields;

  return (
    <Card size="3" style={{ maxWidth: 270 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={1200}
          height={1800}
          className="block w-full h-[400px] bg-gray-500"
          alt="Bold typography"
        />
      </Inset>

      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src="https://image.similarpng.com/very-thumbnail/2021/06/Chef-logo-template-isoated-on-transparent-background-PNG.png"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            {title}
          </Text>
          <Text as="div" size="2" color="gray">
            JUST takes {cookingTime} to cook.
          </Text>
        </Box>
      </Flex>
      <Flex justify="end" className="mb-0 p-5">
        <Link href={`/recipes/${slug}`}>
          <Button variant="surface">Cook This</Button>
        </Link>
      </Flex>
    </Card>
  );
};

export default RecipeCard;
