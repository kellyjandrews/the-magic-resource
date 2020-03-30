import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getPostBySlug } from '../api/posts';
import xss from 'xss';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState();

  useEffect(() => {
    async function getPost() {
      const postBySlug = await getPostBySlug(slug);
      if (postBySlug) {
        return setPost(postBySlug);
      }
    }
  if (slug) {
    getPost();
      }
   
  }, [slug])

  return (
    <>
      <a href="/">Home</a>
    {post ? 
      <>
          <h1>{post.title}</h1>
          <article dangerouslySetInnerHTML={{__html: xss(post.html)}} />
      </>
      : <p>Loading...</p>
    }
      
    </>
  )
}



export default Post;