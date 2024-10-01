import { getUser } from "../../../lib/data";
import styles from "./postuser.module.css"

// const getUser = async (userid)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`, {cache:"no-store"});
  
//     if(!res.ok){
//       throw new Error("Something went wrong");
//     }
  
//     return res.json();
//   };

const PostUser = async ({userID}) => {
    //using Api
    // const user = await getUser(userID);
    // console.log(user)
    // console.log(userID)
    const user = await getUser(userID);
    // console.log(userID)
    return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.name}</span>
    </div>
    )
  };
  
  export default PostUser;