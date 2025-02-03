"use server";

import dbConnect from "@/lib/dbConnect";

export const postSingleProduct = async (postData) => {
  try {
    /* const postData = await req.json(); */
    const result = await dbConnect("practice_data").insertOne(postData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
