"use server"
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData)=>{


    // const title = formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")
    // const userId = formData.get("userId")
    const {title, desc, slug, userId} = Object.fromEntries(formData);

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
    }
    catch(err){
        console.log(err);
        return {error: "Something went wrong"}
    }
}


export const deletePost = async (formData)=>{
    const {id} = Object.fromEntries(formData);

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