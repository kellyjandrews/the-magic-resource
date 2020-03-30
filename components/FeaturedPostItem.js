import { AspectRatioBox, Box, Heading, Image, Link } from "@chakra-ui/core"; 

const FeaturedPostItem = ({ feature_image, slug, title }) => {
  return (
    <Box position={"relative"}>
      <AspectRatioBox maxH={"400px"}>
        <Image src={feature_image} objectFit="cover" />
      </AspectRatioBox>
      <Link href={`/${slug}`}>
        <Box bg={"white"} maxW={"25%"} boxShadow="5px 5px 10px #888888" p={"6"} position={"absolute"} zIndex={2} top="0" left="0">
          <Heading as="h1" size="2xl">
            {title}
          </Heading>
        </Box>
      </Link>
    </Box>
  )
};

export default FeaturedPostItem;
