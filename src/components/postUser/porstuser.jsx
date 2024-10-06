import { getUserMongo } from "../../lib/data";
import styles from "./postuser.module.css"
import Image from 'next/image';
// const getUser = async (userid)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`, {cache:"no-store"});
  
//     if(!res.ok){
//       throw new Error("Something went wrong");
//     }
  
//     return res.json();
//   };

const PostUser = async ({userID}) => {

    const user = await getUserMongo(userID);
    console.log(user)
    return (
    <div className={styles.container}>

     
        <Image className={styles.avatar}  src={user.img ? user.img : "/noavater.png"} alt=""  width={50}  height={50} />
 
        <div className={styles.texts}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    </div>
    )
  };
  
  export default PostUser;