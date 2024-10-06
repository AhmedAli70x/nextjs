"use server"
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "next-auth/react";;
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData)=>{
    const {title, desc, slug, userId} = await Object.fromEntries(formData);

    console.log(title, desc, slug, userId)

    try{
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        console.log("saved to DB")
        revalidatePath("/blog")
        revalidatePath("/admin")
    }
    catch(err){
        console.log(err);
        return {error: "Something went wrong"}
    }
}

export const addUser = async (previousState, formData)=>{
    const {username, email, password, img} = await Object.fromEntries(formData);

    try{
        connectToDb();
        const newUser = new User({username, email, password, img });
        await newUser.save();
        console.log("saved to DB")
        revalidatePath("/admin")
    }
    catch(err){
        console.log(err);
        return {error: "Something went wrong"}
    }
}


export const deletePost = async (formData)=>{
    const {id} =  await Object.fromEntries(formData);

    console.log(id)

    try{
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("Deleted from DB")
        revalidatePath("/blog")
    }
    catch(err){
        console.log(err);
        return {error: "Something went wrong"}
    }
}
export const deleteUser = async (formData)=>{
    const {id} =  await Object.fromEntries(formData);
    try{
        connectToDb();
        await Post.deleteMany({ userId: id});
        await User.findByIdAndDelete(id);
        console.log("Deleted from DB")
        revalidatePath("/admin")
    }
    catch(err){
        console.log(err);
        return {error: "Something went wrong"}
    }
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");

  };

export const handleLogout = async () => {
    "use server";

    await signOut("github");
  };


export const register = async ( previousState, formData)=>{

    const {username, email, password, passwordRepeat, img} = await Object.fromEntries(formData);

    console.log(username, email, password, passwordRepeat);

    if(password !== passwordRepeat){
        return  {error: "Password do not match"} ;
       
    }

    try{
        connectToDb();
        //check if user exists
        const user = await User.findOne({username});
        
        if(user){
            return {error: "Username already exists"} ;
            
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img: "image"
        });
        await newUser.save();
        console.log("saved to DB")
        return {success: true};

    }
    catch(err){
        console.log(err);
        return {error: "Something went wrong"}
    }
}

export const login = async (previousState, formData)=>{
 const {username, password} = Object.fromEntries(formData);

try{
    await signIn("credentials", {username, password})

}catch(err){
    console.log(err);
    if(err.message.includes("CredentialsSignin")){
        return {error: "Invalid username or password"}
    }
    throw err;
}

}