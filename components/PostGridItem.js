import { Box, Button, Image, Link } from "@chakra-ui/core"; 

const PostGridItem = ({feature_image, title, excerpt, slug}) => {
  return (
    <Box
      d="flex"
      flexDir="column"
      maxW={{ sm: "xs" }}
      boxShadow="5px 5px 10px #888888"
      rounded="sm"
      overflow="hidden"
      bg="white"
    >
      <Box
        p="10"
        bg="grey"
      >
        <Image
          src={feature_image}
          alt={title}
          boxShadow="5px 5px 10px #888888"
        />
      </Box>
      <Box
        p="5"
        fontWeight="semibold"
        as="h3"
        isTruncated
      >
        {title}
      </Box>
      <Box
        p="5"
        fontWeight="normal"
        as="p"
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        {excerpt}
      </Box>
      <Box
        p="5"
        alignSelf="flex-end"
        mt="auto"
      >
        <Link href={`/${slug}`}>
          <Button variantColor="green">Read More</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default PostGridItem;
