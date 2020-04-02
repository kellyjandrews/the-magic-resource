import { AspectRatioBox, Box, Heading, Image, Link } from "@chakra-ui/core"; 

const FeaturedPostItem = ({ feature_image, slug, title }) => {
  return (
    <Link href={`/${slug}`} w={"100%"} className="slide">
      <Box position={"relative"} >
        <AspectRatioBox maxH={"400px"}>
          <Image src={feature_image} objectFit="cover" />
        </AspectRatioBox>
        <Box bg={"white"} boxShadow="5px 5px 10px #888888" p={"6"} position={"absolute"} zIndex={2} bottom="0" >
          <Heading as="h1" size="2xl">
            {title}
          </Heading>
        </Box>
      </Box>
    </Link>
  )
};

export default FeaturedPostItem;
