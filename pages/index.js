import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts';


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
    <ul>
      {posts?.map(post => (
        <li key={post.id}><a href={`${post.slug}`}>{post.title}</a></li>
      ))}
    </ul>
  )
}

export default Home
