
import styles from './singlePost.module.css'
import Image from 'next/image';
import PostUser from '@/components/postUser/porstuser';
import { Suspense } from 'react';
import { getPost } from '../../../lib/data';

const getData = async (slug)=>{
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {cache:"no-store"});

  if(!res.ok){
    throw new Error("Something went wrong");
  }

  else return res.json();
};

export const generateMetadata = async({params})=>{
  const {slug} = params;
  const post = await getData(slug);

  return{
    title: post.title,
    description: post.desc
  }
}

const SingleHomePage = async ({params}) => {

  const {slug} = params;

  //get post using API
  // const post = await getData({slug});
  // console.log(post.userId)

  //get post without API
  const post = await getPost(slug);
  let date = post;
  console.log(date)
    return (
    <div className={styles.container}>
    {post.img &&    <div className={styles.imgContainer}>
          <Image className={styles.img}  src={post.img} alt='test' fill />
        </div>}


        <div className={styles.textContainer}>
            <h1 className={styles.titles}>{post.title}</h1>
            <div className={styles.detail}>


            {post &&  (<Suspense fallback={<div>Loading...</div>} > 
              <PostUser userID={post.userId}  />
            </Suspense>) }
            
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>123</span>
            </div>
            </div>
            <div className={styles.content}>
              <p>{post.desc}</p>
            </div>
        </div>
      
    </div>

    ) 
  };
  
  export default SingleHomePage;