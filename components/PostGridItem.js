import moment from 'moment';
import { Box, Button, Image, Heading, Link, Text } from "@chakra-ui/core";

const PostGridItem = ({ feature_image, published_at, slug, title }) => {
  return (
    <Link href={`/${slug}`}>

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
          isTruncated
        >
          <Heading as="h4" size="md">{title}</Heading>
          <Text fontSize="xs"><em>Published</em>: {moment(published_at).format('MMMM, Do YY')}</Text>
        </Box>
      </Box>
    </Link>
  );
}

export default PostGridItem;
