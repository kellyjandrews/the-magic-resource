import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts';
import { Box, Button, Grid, Image, Link } from "@chakra-ui/core";

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function getPostList() {
      const postList = await getPosts();
      if (postList) {
        return setPosts(postList);
      }
    }

    getPostList();

  }, [])

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={12}>
      {posts?.map(post => (
        <Box
          d="flex"
          flexDir="column"
          maxW="sm"
          boxShadow="5px 5px 10px #888888"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
        >
          <Box
            p="10"
          >
            <Image
              src={post.feature_image}
              alt={post.title}
              boxShadow="5px 5px 10px #888888"
            />
          </Box>
          <Box
              p="5"
              fontWeight="semibold"
              as="h3"
              isTruncated
            >
              {post.title}
          </Box>
          <Box
            p="5"
            fontWeight="normal"
            as="p"
          >
            {post.excerpt}
          </Box>
          <Box
            p="5"
            alignSelf="flex-end"
            mt="auto"
          >
            <Link href={`/${post.slug}`}>
              <Button variantColor="green">Read More</Button>
            </Link>            
          </Box>
        </Box>
    ))}
    </Grid>
        
  )
}

export default Home
