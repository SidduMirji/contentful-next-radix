import { Avatar, Box, Button, Card, Flex, Inset, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecipeDetails = () => {
  return (
    <Card size="3" style={{ maxWidth: 270 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt="Bold typography"
          //   style={{
          //     display: "block",
          //     width: "100%",
          //     height: 140,
          //     backgroundColor: "var(--gray-5)",
          //   }}
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
    </Card>
  )
}

export default RecipeDetails