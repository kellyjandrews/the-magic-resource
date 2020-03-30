import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts';
import PostGridItem from '../components/PostGridItem';
import FeaturedPostItem from '../components/FeaturedPostItem';
import { Box, Divider, Flex, Grid, Heading} from "@chakra-ui/core";

const Home = () => {
  const [posts, setPosts] = useState();
  const [features, setFeatures] = useState();

  useEffect(() => {
    async function getPostList() {
      const postList = await getPosts();
      if (postList) {
        setFeatures(postList.filter(post => post.featured === true));
        return setPosts(postList);
      }
    }

    getPostList();

  }, [])
  console.table(posts);
  console.log(features);
  return (
    <Flex flexDirection="column">
      <Box w={"100%"} mb={6}>
        {features?.map(feature => <FeaturedPostItem {...feature} key={feature.id} />)}
      </Box>
      <Heading textAlign={"center"} >Latest Posts</Heading>
      <Divider />
      <Grid autoColumns templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }} gap={16}>
        {posts?.map(post => <PostGridItem {...post} key={post.id} />)}
      </Grid>  
    </Flex>  
  )
}

export default Home
