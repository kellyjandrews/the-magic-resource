import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts';
import PostGridItem from '../components/PostGridItem';
import FeaturedPostSlider from '../components/FeaturedPosts/FeaturedPostSlider';
import { Divider, Flex, Grid, Heading} from "@chakra-ui/core";

const Home = () => {
  const [posts, setPosts] = useState();
  const [features, setFeatures] = useState();

  useEffect(() => {
    async function getPostList() {
      const postList = await getPosts();
      if (postList) {
        setFeatures(postList.filter(post => post.featured === true));
        setPosts(postList);
        return;
      }
    }

    getPostList();

  }, [])

  return (
    <Flex flexDirection="column">
      <FeaturedPostSlider featureList={features} />
      <Heading textAlign={"center"} >Latest Posts</Heading>
      <Divider />
      <Grid autoColumns templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }} gap={16}>
        {posts?.map(post => <PostGridItem {...post} key={post.id} />)}
      </Grid>  
    </Flex>  
  )
}

export default Home
