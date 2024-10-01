
import styles from './singlePost.module.css'
import Image from 'next/image';
import PostUser from '@/components/postUser/porstuser';
import { Suspense } from 'react';
import { getPost } from '../../../../lib/data';

// const getData = async (slug)=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache:"no-store"});

//   if(!res.ok){
//     throw new Error("Something went wrong");
//   }

//   else return res.json();
// };

const SingleHomePage = async ({params}) => {

  const {slug} = params;

  //get post using API
  // const post = await getData({slug});
  // console.log(post.userId)

  //get post without API
  const post = await getPost(slug);
  // console.log(post)
    return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img}  src='https://images.pexels.com/photos/28497015/pexels-photo-28497015/free-photo-of-fashionable-woman-in-stylish-skirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='test' fill />
        </div>


        <div className={styles.textContainer}>
            <h1 className={styles.titles}>{post.title}</h1>
            <div className={styles.detail}>
            <Image className={styles.avatar}  
            src='https://images.pexels.com/photos/28497015/pexels-photo-28497015/free-photo-of-fashionable-woman-in-stylish-skirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt="" 
            width={50}
            height={50}
            />
            <Suspense fallback={<div>Loading....</div>} > 
              <PostUser userID={post.userId}/>
            </Suspense>
            
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
            </div>
            <div className={styles.content}>
              <p>{post.body}</p>
            </div>
        </div>
      
    </div>

    ) 
  };
  
  export default SingleHomePage;